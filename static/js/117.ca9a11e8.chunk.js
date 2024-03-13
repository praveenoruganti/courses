(this["webpackJsonppraveenoruganti-courses"]=this["webpackJsonppraveenoruganti-courses"]||[]).push([[117],{686:function(e,n,t){"use strict";t.r(n),n.default=' **Explain about toString method ?**\n\ntoString method is used to print the content of an Object. If the toString method is not overridden in a class, the default toString method from Object class is invoked. This would print some hashcode as shown in the example below. However, if toString method is overridden, the content returned by the toString method is printed.\n\nConsider the class given below:\n\n```jsx\npackage com.praveen.oops;\nclass Animal {\npublic Animal(String name, String type) {\nthis.name = name;\nthis.type = type;\n}\nString name;\nString type;\n}\n```\n\nRun this piece of code:\n\n```jsx\nAnimal animal = new Animal("Tommy", "Dog");\nSystem.out.println(animal);//com.praveen.oops.Animal@f7e6a96\n```\nOutput does NOT show the content of animal (what name? and what type?). To show the content of the animal object, we can override the default implementation of toString method provided by Object class.\n\n\n**Adding toString to Animal class**\n\n```jsx\nclass Animal {\npublic Animal(String name, String type) {\nthis.name = name;\nthis.type = type;\n}\nString name;\nString type;\npublic String toString() {\nreturn "Animal [name=" + name + ", type=" + type\n+ "]";\n}\n}\n\n```\n\nRun this piece of code:\n\n```jsx\nAnimal animal = new Animal("Tommy","Dog");\nSystem.out.println(animal);//Animal [name=Tommy, type=Dog]\n```\n\nOutput now shows the content of the animal object.\n\n**What is the use of equals method in Java?**\n\nEquals method is used when we compare two objects. Default implementation of equals method is defined in Object class. The implementation is similar to == operator. Two object references are equal only if they are pointing to the same object.\n\nWe need to override equals method, if we would want to compare the contents of an object.\n\nConsider the example Client class provided below.\n\n```jsx\nclass Client {\nprivate int id;\npublic Client(int id) {\nthis.id = id;\n}\n}\n```\n== comparison operator checks if the object references are pointing to the same object. It does NOT look at the content of the object.\n\n```jsx\nClient client1 = new Client(25);\nClient client2 = new Client(25);\nClient client3 = client1;\n//client1 and client2 are pointing to different client objects.\nSystem.out.println(client1 == client2);//false\n\n//client3 and client1 refer to the same client objects.\nSystem.out.println(client1 == client3);//true\n//similar output to ==\nSystem.out.println(client1.equals(client2));//false\nSystem.out.println(client1.equals(client3));//true\n```\n\nWe can override the equals method in the Client class to check the content of the objects. Consider the example below: The implementation of equals method checks if the id\'s of both objects are equal. If so, it returns true. Note that this is a basic implementation of equals and more needs to be done to make it foolproof.\n\n```jsx\nclass Client {\nprivate int id;\npublic Client(int id) {\nthis.id = id;\n}\n@Override\npublic boolean equals(Object obj) {\nClient other = (Client) obj;\nif (id != other.id)\nreturn false;\nreturn true;\n}\n}\n```\n\nConsider running the code below:\n\n```jsx\nClient client1 = new Client(25);\nClient client2 = new Client(25);\nClient client3 = client1;\n//both id\'s are 25\nSystem.out.println(client1.equals(client2));//true\n//both id\'s are 25\nSystem.out.println(client1.equals(client3));//true\n```\nAbove code compares the values (id\'s) of the objects.\n\n\n**What are the important things to consider when implementing equals method?**\n\nAny equals implementation should satisfy these properties:\n\n1. Reflexive. For any reference value x, x.equals(x) returns true.\n\n2. Symmetric. For any reference values x and y, x.equals(y) should return true if and only if\ny.equals(x) returns true.\n\n3. Transitive. For any reference values x, y, and z, if x.equals(y) returns true and y.equals(z) returns\ntrue, then x.equals(z) must return true.\n\n4. Consistent. For any reference values x and y, multiple invocations of x.equals(y) consistently\nreturn true or consistently return false, if no information used in equals is modified.\n\n5. For any non-null reference value x, x.equals(null) should return false.\n\nOur earlier implementation of equals method will not satisfy condition 5. It would throw an exception if an object of different class (other than Client) is used for comparison.\n\nLet\'s now provide an implementation of equals which satisfy these properties:\n\n```jsx\n//Client class\n@Override\npublic boolean equals(Object obj) {\nif (this == obj)\nreturn true;\nif (obj == null)\nreturn false;\nif (getClass() != obj.getClass())\nreturn false;\nClient other = (Client) obj;\nif (id != other.id)\nreturn false;\nreturn true;\n}\n```\n\n**What is the hashCode method used for in Java?**\n\nHashCode\'s are used in hashing to decide which group (or bucket) an object should be placed into. A group of object\'s might share the same hashcode.\n\nThe implementation of hash code decides effectiveness of Hashing. A good hashing function evenly distributes object\'s into different groups (or buckets).\n\nA good hashCode method should have the following properties\n\n- If obj1.equals(obj2) is true, then obj1.hashCode() should be equal to obj2.hashCode()\n- obj.hashCode() should return the same value when run multiple times, if values of obj used in equals() have not changed.\n- If obj1.equals(obj2) is false, it is NOT required that obj1.hashCode() is not equal to obj2.hashCode(). Two unequal objects MIGHT have the same hashCode.\n\nA sample hashcode implementation of Client class which meets above constraints is given below:\n\n```jsx\n//Client class\n@Override\npublic int hashCode() {\nfinal int prime = 31;\nint result = 1;\nresult = prime * result + id;\nreturn result;\n}\n```\n \n![screenshot of the app](https://praveenoruganti.github.io/courses/images/java/hashcodeequals.jpg)\n\n '}}]);