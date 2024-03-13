(this["webpackJsonppraveenoruganti-courses"]=this["webpackJsonppraveenoruganti-courses"]||[]).push([[135],{704:function(n,e,t){"use strict";t.r(e),e.default=' **OOP(Object Oriented Programming)**\n\nIt is a programming technique based on the concept of Class and Object.\n\n**Class**\n\nA class is a template which describe about data and behavior of an object. In below example, Class CricketScorer is the template for creating multiple objects. \n\nLet\u2019s look at an example:\n\n```jsx\npackage com.praveen.oops;\n\npublic class CricketScorer {\n\t// Instance Variables - constitute the state of an object\n\tprivate int score;\n\n\t// Behavior - all the methods that are part of the class\n\t// An object of this type has behavior based on the\n\t// methods four, six and getScore\n\tpublic void four() {\n\t\tscore = score + 4;\n\t}\n\n\tpublic void six() {\n\t\tscore = score + 6;\n\t}\n\n\tpublic int getScore() {\n\t\treturn score;\n\t}\n\n\tpublic static void main(String[] args) {\n\t\tCricketScorer scorer = new CricketScorer();\n\t\tscorer.six();\n\t\t// State of scorer is (score => 6)\n\t\tscorer.four();\n\t\t// State of scorer is (score => 10)\n\t\tSystem.out.println(scorer.getScore());\n\t}\n}\n```\n\n**Object**\n\nAn object is an instance of class which can be related to real life example with its attributes(data) and methods(behavior). \n\nIn the above example, we create an object using new CricketScorer(). The reference of the created object is stored in scorer variable. We can create multiple objects of the same\nclass.\n\n**What is state of an Object?**\n\nValues assigned to instance variables of an object. Consider following code snippets from the above example. The value in score variable is initially 0. It changes to 6 and then 10. State of an object might change with time.\n\n```jsx\nscorer.six();\n//State of scorer is (score => 6)\nscorer.four();\n//State of scorer is (score => 10)\n```\n\n**What is behavior of an Object?**\n\nMethods supported by an object. Above example the behavior supported is six(), four() and getScore().\n\n**What is the super class of every class in Java?**\n\nEvery class in java is a sub class of the class Object. When we create a class we inherit all the methods and properties of Object class. \n\nLet\u2019s look at a simple example:\n\n```jsx\nSystem.out.println(str.toString());\nSystem.out.println(str.hashCode());\nSystem.out.println(str.clone());\nif(str instanceof Object){\nSystem.out.println("I extend Object");//Will be printed\n}\n```\n\ntoString, hashCode and clone methods for String class are inherited from Object class and overridden.\n\n**Static vs Non Static**\n\n![screenshot of the app](https://praveenoruganti.github.io/courses/images/java/staticvsnonstatic.jpg)\n\n\n**Core OOPS concepts are:**\n\n- Abstraction\n- Encapsulation\n- Polymorphism\n- Inheritance\n- Association\n- Aggregation\n- Composition\n- Coupling\n- Cohesion\n\n**1. Abstraction**\n\nIt is a process of hiding the implementation details from the user, only functionality will be provided to the user.\nThis can be achieved by Abstract class and Interface.\n\n**Interface**\n\nIt is an abstract type that is used to specify a behaviour that class must implement\n\n- By default the variables in an interface are public final static.\n- By default the methods are public abstract but in Java 8 default, static concrete methods are also introduced.\n- In Java 8, interface having one abstract method is denoted by annotation @FunctionalInterface.\n- Interface can extend one or more interface.\n- Interface can be nested inside another interface.\n\n**Abstract class**\n\n- An abstract class is a class with both abstract and concrete methods.\n- An abstract class cannot be instantiated but they can be sub-classed.\n- An abstract class can support non-static, non-final methods and attributes(protected, private in addition to public)\n- An abstract class can hold state of the object.\n- It can have constructor and member variables where as interface default methods cannot hold state and it cannot have constructor and member variables as well.\n\n![screenshot of the app](https://praveenoruganti.github.io/courses/images/java/inab.jpg)\n\n**2. Encapsulation**\n\nEncapsulation or data binding is about packaging of data(variable) and behavior(method) together in a class.\n\n- Declare the variables of a class as private\n- Provide public setter and getter methods to modify and view the variable values.\n\n**Sample code**\n\n```jsx\nclass CheckingAccount {\n\tprivate double balance = 0;\n\tpublic void setBalance(double bal) {\n\t\tbalance = bal;\n\t};\n\tpublic double getBalance() {\n\t\treturn balance;\n\t};\n}\n```\n\n**3. Polymorphism**\n\nIt is a concept by which we can perform a single action by different ways.\n\n- Overriding(dynamic/runtime)\n- Overloading(static/compile time)\n\n**Method Overriding**\n\n**Rules:**\n\n- Defining multiple methods with same name,same parameters and same return type(or co-variant return type) in super class and sub class known as method overriding.\n- We cannot override a private method of super class in sub class as private methods are not accessible in sub class.\n- We cannot override a static method of super class in sub class as static means class level.\n- We can change accessibility modifier in sub class overridden method but should increase the accessibility if we decrease compiler will throw an error message.\n\n![screenshot of the app](https://praveenoruganti.github.io/courses/images/java/ss.PNG)\n\n**For Exceptions**\n\n- If sub class throws checked exception super class should throw same or super class exception of this.\n- If Super class method throws an exception, then Subclass overriden method can throw the same exception or no exception, but must not throw parent exception of the exception thrown by Super class method.\n\nIt means, if Super class method throws object of NullPointerException class, then Subclass method can either throw same exception, or can throw no exception, but it can never throw object of Exception class (parent of NullPointerException class).\n\n**Sample code**\n\n```jsx\npublic class MethodOverriding {\n\tpublic static void main(String[] args) {\n\t\tA a = new A();// In Class A\n\t\ta.Show(); // show A\n\t\ta.Print();// print A\n\t\t// a.Display(); // compile time error Display method of A is not visible\n\t\tB b = new B(); // In Class A In Class B\n\t\tb.Show(); // show B\n\t\tb.Print(); // print B\n\t\tb.Display(); // display B\n\t\tA ab = new B();// In Class A In Class B\n\t\tab.Show();// show B\n\t\tab.Print(); // print A\n\t\t// ab.Display(); // compile time error Display method of A is not visible\n\t\tab.Check(); // check A\n\t}\n\n}\n\nclass A {\n\tA() {\n\t\tSystem.out.println("In Class A");\n\t}\n\n\tvoid Show() {\n\t\tSystem.out.println("show A");\n\t}\n\n\tstatic void Print() {\n\t\tSystem.out.println("print A");\n\t}\n\n\tprivate void Display() {\n\t\tSystem.out.println("display A");\n\t}\n\n\tvoid Check() {\n\t\tSystem.out.println("check A");\n\t}\n}\n\nclass B extends A {\n\tB() {\n\t\tSystem.out.println("In Class B");\n\t}\n\n\tvoid Show() {\n\t\tSystem.out.println("show B");\n\t}\n\n\tstatic void Print() {\n\t\tSystem.out.println("print B");\n\t}\n\n\tvoid Display() {\n\t\tSystem.out.println("display B");\n\t}\n}\n\n```\n\n**Output**\n\n![screenshot of the app](https://praveenoruganti.github.io/courses/images/java/methodoverridingoutput.png)\n\n**Method Overloading**\n\nIf a class has multiple methods having same name but different in parameters is known as Method Overloading.\nThere are 2 types to overload a method\n\n- by changing number of arguments\n- by changing the datatype\n\nMethod overloading is not possible by changing the return type of method only.\n\nOne type is promoted to another implicitly if no matching datatype is found.\n\nThere will be ambiguity in some cases when there are no matching type arguments, each method promotes similar number of arguments.\n\n**For example**\n\n```jsx\nvoid sum(int a, long b) { \n\tSystem.out.println("a"); \n}\nvoid sum(long a, long b) { \n\tSystem.out.println("b");\n}\nobj.sum(20, 20) ; // ambiguity // compile time error\n```\n\nOne type is not depromoted implicitly for example double cannot be depromoted to any type implicitly.\n\nThrown exceptions from methods are not considered.\n\nNormally we are developing our application interface base approach for example service and serviceImpl so my controller need to inject serviceImpl to get business functionality so in this case in controller class we are injection service bean by taking service interface reference as below.\n\n```jsx\npublic interface BankService {\n  public void doTransaction();\n}\n@Service\npublic class BankServiceImpl implements BankService{\n@Override\npublic void doTransaction() {\n// LOGIC\n}\n}\n@Controller\npublic class BankController {\n  @Autowired(required = true)\n  private BankService service;\n}\n```\n\nHere internally IOC container instantiate my service bean as below approach\n\n```jsx\nBankService service=new BankServiceImpl();//Runtime polymorphism\n```\n\n![screenshot of the app](https://praveenoruganti.github.io/courses/images/java/mo.PNG)\n\n**4.Inheritance(IS-A relationship)**\n\nA subclass can inherit the states and behaviors of it super class is known as Inheritance.\n\nMultiple inheritance is not possible due to ambiguity problem and cyclic inheritance is not allowed on Java.\n\n**5.Association(HAS-A relationship)**\n\nAssociation is a relationship between two classes where one class utilizes feature of another class. It is HAS-A relationship.\n\n**For example**\n\n- Student and ContactInfo.\n\n  All Student HAS A ContactInfo.\n\n- Student and StudentIdCard.\n\n  All Student HAS A StudentIdCard.\n\n**6. Aggregation**\n\nIt is a type of association where it is HAS-A relationship and existence of both the class are not dependent on each other.\n\nLet\'s see an example\n\n```jsx\npublic class Team {\n\tprivate final List<Member> members;\n\n\tpublic Team(List<Member> members) {\n\t\tthis.members = members;\n\t}\n}\n\nclass Member {\n\tprivate final String name;\n\n\tMember(String name) {\n\t\tthis.name = name;\n\t}\n}\n```\nHere in this example, members are not destroyed when Team object is destroyed.\n\nOther good examples could be \n\n- Pond object (aggregate object) and Duck objects (component parts), where ducks may come for sometime in the pond for swimming.\n- a department has several professors.\n- Student has a ContactInfo. They are dependent on each other as ContactInfo can be used anywhere else for example Employee class.\n\n**7. Composition**\n\nIt is a type of association where it is HAS-A relationship. In this relationship ClassB cannot exists without Class A whereas Class A can exist without ClassB.\n\nLet\'s see an example,\n\n```jsx\npublic class Organization {\n\tprivate final List<Department> departments;\n\n\tpublic Organization() {\n\t\tdepartments = new ArrayList<>();\n\t\tdepartments.add(new Department("Finance"));\n\t\tdepartments.add(new Department("HR"));\n\t\tdepartments.add(new Department("Technical"));\n\t}\n}\n\nclass Department {\n\tprivate final String name;\n\n\tDepartment(String name) {\n\t\tthis.name = name;\n\t}\n}\n```\nComposition is implemented using component part object Initialization inside constructor (or sometimes post construction). All the component parts are destroyed as soon as composite object is destroyed.\n\n\nOther good examples could be \n\n- LinkedList composite object consisting of Nodes (component parts)\n- A university has several departments.\n\n**8. Coupling**\n\nCoupling indicates level of dependency between two classes.\n\nIn good software design, classes should be loosely coupled to each other for example Spring Framework.\n\n**9.Cohesion**\n\nCohesion indicates level of logical connection of methods and attributes used in a class.\n\nIn good software design,Classes should be highly Cohesive.\n\n\n '}}]);