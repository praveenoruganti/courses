(this["webpackJsonppraveenoruganti-courses"]=this["webpackJsonppraveenoruganti-courses"]||[]).push([[219],{788:function(n,e,t){"use strict";t.r(e),e.default=' ![screenshot of the app](https://praveenoruganti.github.io/courses/images/spring/collections.jpg)\n\nIn Spring basically collections are configured as\n\n- List\n- Set\n- Map\n- Properties\n\nTo specify above collections , tag are <list>,<set>,<map> and <props>\n\nHere <map> contains internally entries (<entry>). Every entry contains <key> and <value> , these even can be represents as attributes.\n\nProperties also stores data in the key value pair only. But by default key and values are type String in Properties. It contains child tag <prop key=\u201d\u201d></prop>. It doesn\u2019t contain any <value> tag to represent the value; we can directly specify the value in between the <prop> tag.\n\nFor example,\n\n```jsx\npublic class Employee {\n\n private List<String>empList;\n private Set<String>empSet;\n private Map<String,String>empMap;\n private Properties empProperties;\n public List<String>getEmpList() {\n  return empList;\n }\n public void setEmpList(List<String> empList) {\n  this.empList = empList;\n }\n public Set<String>getEmpSet() {\n  return empSet;\n }\n public void setEmpSet(Set<String> empSet) {\n  this.empSet = empSet;\n }\n public Map<String, String>getEmpMap() {\n  return empMap;\n }\n public void setEmpMap(Map<String, String> empMap) {\n  this.empMap = empMap;\n }\n public Properties getEmpProperties() {\n  return empProperties;\n }\n public void setEmpProperties(Properties empProperties) {\n  this.empProperties = empProperties;\n }\n @Override\n public String toString() {\n  return"Employee [empList=" + empList + ", empSet=" + empSet\n    + ", empMap=" + empMap + ", empProperties=" + empProperties\n    + "]";\n }\n\n\n}\n```\n\n**beans.xml**\n\n```jsx\n<beans>\n\n<bean class="com.praveen.core.collections.bean.Employee" name="emp">\n  <property name="empList">\x3c!-- it will maintain duplicates --\x3e\n   <list>\n    <value>A</value>\n    <value>A</value>\n    <value>A</value>\n    <value>B</value>\n    <value>C</value>\n    <value>D</value>\n   </list>\n  </property>\n  <property name="empSet">\x3c!-- it will not maintain duplicates --\x3e\n   <set>\n    <value>A</value>\n    <value>A</value>\n    <value>A</value>\n    <value>B</value>\n    <value>C</value>\n    <value>D</value>\n   </set>\n  </property>\n  <property name="empMap">\n   <map>\n    <entry>\n     <key>\n      <value>K1</value>\n     </key>\n     <value>V1</value>\n    </entry>\n    <entry key="K2" value="V2" />\n    <entry key="K3">\n     <value>V3</value>\n    </entry>\n    <entry value="V4">\n     <key>\n      <value>K4</value>\n     </key>\n    </entry>\n   </map>\n  </property>\n  <property name="empProperties">\n   <props>\n    <prop key="key1">\n     val1\n    </prop>\n    <prop key="key1">\n     val3\n    </prop>\n    <prop key="key2">\n     val2\n    </prop>\n   </props>\n  </property>\n </bean>\n</beans>\n```\n\n```jsx\n\npublic class SpringCollectionsMain {\n private static ApplicationContext context;\n\n public static void main(String[] args) throws Exception, Exception  {\n  context = new ClassPathXmlApplicationContext("beans.xml");\n  Employee emp=(Employee)context.getBean("emp");\n  System.out.println(emp);\n\n }\n\n}\n\n```\n\n**Output**\n\n```jsx\n\nSep 08, 2019 2:24:03 AM org.springframework.context.support.AbstractApplicationContext prepareRefresh\nINFO: Refreshing org.springframework.context.support.ClassPathXmlApplicationContext@14514713: startup date [Sun Sep 08 02:24:03 IST 2019]; root of context hierarchy\n\nSep 08, 2019 2:24:04 AM org.springframework.beans.factory.xml.XmlBeanDefinitionReader loadBeanDefinitions\nINFO: Loading XML bean definitions from class path resource [beans.xml]\n\nin Param\n\nIn Employee Default Constructor\n\nIn Address Default Constructor\n\nIn Address class , Employee setter\n\nIn Employee class , Address setter\n\nEmployee [empList=[A, A, A, B, C, D], empSet=[A, B, C, D], empMap={K1=V1, K2=V2, K3=V3, K4=V4}, empProperties={key2=val2, key1=val3}]\n\n```\n\n**Note**\n\n- Employee Object Created with empList as null\n- Employee Object created with empList with zero size (Or empty List)\n- In case of any property tag is defined without any value tag, then Spring Container throws Exception\n```jsx\n  org.springframework.beans.factory.parsing.BeanDefinitionParsingException: Configuration problem: <property> element for property \u2019empList\u2019 must specify a ref or value\n```\n**Using Annotations**\n\n```jsx\npublic class CollectionsBean {\n\n    @Autowired\n    private List<String> nameList;\n\n    public void printNameList() {\n        System.out.println(nameList);\n    }\n\n\n}\n\n```\n\n```jsx\n@Configuration\npublic class CollectionConfig {\n\n    @Bean\n    public CollectionsBean getCollectionsBean() {\n        return new CollectionsBean();\n    }\n\n    @Bean\n    public List<String> nameList() {\n        return Arrays.asList("Praveen", "Prasad", "Bhaja");\n    }\n\n\n}\n```\n\n```jsx\npublic class CollectionsTest {\n\n private static ApplicationContext context;\n\n public static void main(String args[]) {\n  context = new AnnotationConfigApplicationContext(CollectionConfig.class);\n  CollectionsBean collectionsBean = context.getBean(\n    CollectionsBean.class);\n  collectionsBean.printNameList();\n }\n\n}\n```\n\n**Output**\n\n```jsx\n\nSep 08, 2019 2:26:09 AM org.springframework.context.support.AbstractApplicationContext prepareRefresh\nINFO: Refreshing org.springframework.context.annotation.AnnotationConfigApplicationContext@5cb0d902: startup date [Sun Sep 08 02:26:09 IST 2019]; root of context hierarchy\n\n[Praveen, Prasad, Bhaja]\n\n```\n\n '}}]);