(this["webpackJsonppraveenoruganti-courses"]=this["webpackJsonppraveenoruganti-courses"]||[]).push([[214],{783:function(e,n,t){"use strict";t.r(n),n.default=' ![screenshot of the app](https://praveenoruganti.github.io/courses/images/spring/springbeanscopes.jpg)\n\n## Singleton\n\n- It is the default scope of a bean in spring container\n- In this scope, spring creates only one instance of the bean and it is served for every request for that bean from cache with in the container.\n- only one instance of bean per bean id\n- This differs from the java singleton design pattern which is based on per classloader where as in springs, singleton is per container and per bean.\n- singleton scope id used for stateless beans.\n\n## Prototype\n\n- Spring container creates new instance of bean for each and every request for that bean.\n- Prototype scope is useful for stateful bean.\n- After instantiating bean ad submitting it to client, spring container does not maintain the record.so to release the resources held by prototype scope bean, client should implement custom bean post processor.\n\nLets see an example related to Singleton and Prototype bean scopes\n\n```jsx\n\npublic class TokenMachine {\n\n}\n\npublic class Token {\n\n}\n\n\n@Configuration\npublic class AppConfig {\n\n @Bean(name="token")\n @Scope(scopeName = "prototype")\n public Token getToken() {\n  return new Token();\n }\n\n @Bean(name="tokenMachine")\n @Scope(scopeName = "singleton")\n public TokenMachine getTokenMachine() {\n  return new TokenMachine();\n }\n}\n\npublic class AnnotatedBeanScopeTest {\n public static void main(String[] args) {\n  AbstractApplicationContext context = new AnnotationConfigApplicationContext(AppConfig.class);\n  TokenMachine tokenMachine1 = (TokenMachine) context.getBean("tokenMachine");\n  TokenMachine tokenMachine2 = (TokenMachine) context.getBean("tokenMachine");\n  boolean areTokenMachineInstancesSame = tokenMachine1.equals(tokenMachine2);\n  System.out.println(areTokenMachineInstancesSame); // print true\n  Token token1 = (Token) context.getBean("token");\n  Token token2 = (Token) context.getBean("token");\n  boolean areTokenInstancesSame = token1.equals(token2);\n  System.out.println(areTokenInstancesSame); // prints false\n  context.close();\n }\n}\n\n```\n\n**Spring Bean scope features**\n\n- Use the prototype bean when the bean carries a state i.e. its stateful. Use singleton bean for stateless beans.\n- For a prototype bean, the container does not manage the complete lifecyle of the bean. It initiates, configures and assembles a prototype bean and then hands it over to the client. The destruction lifecycle methods are not called.\n- The dependencies of a bean are resolved at instantiation time, therefore if a singleton bean needs a prototype bean, the container creates one during instantiation of the singleton bean. The singleton bean would therefore always have the same instance of prototype bean.\n\n## Request\n\nRequest scope bean is used in HTTP request life cycle.\n\nFor each and every request, new instance of bean is created and is alive for complete HTTP request life cycle.\n\n```jsx\n\n@Bean\n@Scope(value = WebApplicationContext.SCOPE_REQUEST, proxyMode = ScopedProxyMode.TARGET_CLASS)\npublic HelloMessageGenerator requestMessage() {\n return new HelloMessageGenerator();\n}\n\n```\n\nThe attribute proxyMode is needed as during the instantiation of web application context, there is no active request. The Spring Framework will create the proxy for the injection as a dependency.\n\nNext, you should define the controller that has a reference to the requestMessage bean. For that, you need to access the same request more than once to test the web-specific scopes.\n\n```jsx\n\n@Controller\npublic class ScopesController {\n    @Resource(name = \u201crequestMessage\u201d)\n    HelloMessageGenerator requestMessage;\n    @RequestMapping(\u201c/scopes\u201d)\n    public String getScopes(Model model) {\n        requestMessage.setMessage(\u201cGood morning!\u201d);\n        model.addAttribute(\u201crequestMessage\u201d, requestMessage.getMessage());\n        return \u201cscopesExample\u201d;\n    }\n\n}\n\n```\n\n## Session\n\nIt is also related to web applications. On every session, creates new object in container.\n\n```jsx\n@Bean\n@Scope(value = WebApplicationContext.SCOPE_SESSION, proxyMode = ScopedProxyMode.TARGET_CLASS)\npublic HelloMessageGenerator sessionMessage() {\n return new HelloMessageGenerator();\n}\n\n@Controller\npublic class ScopesController {\n    @Resource(name = \u201csessionMessage\u201d)\n    HelloMessageGenerator sessionMessage;\n    @RequestMapping(\u201c/scopes\u201d)\n    public String getScopes(Model model) {\n        sessionMessage.setMessage(\u201cHello there!\u201d);\n        model.addAttribute(\u201csessionMessage\u201d, sessionMessage.getMessage());\n        return \u201cscopesExample\u201d;\n    }\n\n}\n\n```\n\n## globalsession\n\nThis scopes the bean definition to global HTTP session and is only valid for web-aware Application context of Spring. This type is used in portlet container applications where each portlet having their session.\n\n```jsx\n\n@Bean\n@Scope(value = WebApplicationContext.SCOPE_GLOBAL_SESSION, proxyMode = ScopedProxyMode.TARGET_CLASS)\npublic HelloMessageGenerator globalSessionMessage() {\n    return new HelloMessageGenerator();\n}\n\n```\n\n\n '}}]);