(this["webpackJsonppraveenoruganti-courses"]=this["webpackJsonppraveenoruganti-courses"]||[]).push([[111],{680:function(t,n,e){"use strict";e.r(n),n.default=' List interface accepts null, duplicates and maintain insertion order.\n\n**ArrayList**\n\nArrayList is implemented as a resizable array. As more elements are added to ArrayList, its size is increased dynamically. It\'s elements can be accessed directly by using the get and set methods, since ArrayList is essentially an array.ArrayList is a better choice if your program is thread-safe.ArrayList grow 50% of its size each time.\nArrayList implements RandomAccess Marker interface to indicate that they support fast (generally constant time) random access.\n\n- ArrayList class can contain duplicate elements.\n- ArrayList class maintains insertion order.\n- ArrayList class is non synchronized.\n-  ArrayList allows random access because array works at the index basis.\n- In  ArrayList class, manipulation is slow because a lot of shifting needs to be occurred if any element is removed from the arraylist.\n\n```jsx\npackage com.praveen.collections;\n\nimport java.util.ArrayList;\nimport java.util.Iterator;\n\npublic class ArrayListExamples {\n\n\tpublic static void main(String[] args) {\n\n\t\tList<String> names = new ArrayList<>(); // creating arraylist\n\t\tnames.add("Praveen"); // adding element in arraylist\n\t\tnames.add("Anil");\n\t\tnames.add("Prasad");\n\t\tnames.add("Kasyap");\n\t\tnames.add("Praveen");\n\t\tnames.add("Kiran");\n\t\tnames.add("Narayana");\n\t\tnames.add("Keerthana");\n\t\tnames.add("Anusha");\n\t\tnames.add("Lakshmi");\n\n\t\tSystem.out.println("Number of elements present in the names list " + names.size());\n\n\t\tSystem.out.println(names);\n\n\t\tSystem.out.println();\n\n\t\tSystem.out.println("Traversing list through Iterator");\n\t\tIterator<String> nameIterator = names.iterator();\n\t\twhile (nameIterator.hasNext()) {\n\t\t\tSystem.out.print(nameIterator.next() + " ");\n\t\t}\n\n\t\tSystem.out.println();\n\t\tSystem.out.println();\n\n\t\tSystem.out.println("Traversing list using for loop");\n\t\tfor (int i = 0; i < names.size(); i++) {\n\t\t\tSystem.out.print(names.get(i) + " ");\n\t\t}\n\n\t\tSystem.out.println();\n\t\tSystem.out.println();\n\n\t\tSystem.out.println("Traversing list using enhanced for loop");\n\t\tfor (String name : names) {\n\t\t\tSystem.out.print(name + " ");\n\t\t}\n\n\t\tSystem.out.println();\n\t\tSystem.out.println();\n\n\t\tSystem.out.println("Traversing list using forEach");\n\t\tnames.forEach(name -> System.out.print(name + " "));\n\n\t\tSystem.out.println();\n\t\tSystem.out.println();\n\n\t\tSystem.out.println("Removing element present in index 1");\n\t\tnames.remove(1);\n\t\tSystem.out.print(names);\n\n\t\tSystem.out.println();\n\t\tSystem.out.println();\n\n\t\tSystem.out.println("Removing element Praveen");\n\t\tnames.remove("Praveen");\n\t\tSystem.out.print(names);\n\n\t\tSystem.out.println();\n\t\tSystem.out.println();\n\n\t\tSystem.out.println("Sorting elements in ascending order");\n\t\tnames.sort(Comparator.naturalOrder());\n\t\tSystem.out.print(names);\n\n\t\tSystem.out.println();\n\t\tSystem.out.println();\n\n\t\tSystem.out.println("Sorting elements in descending order");\n\t\tnames.sort(Comparator.reverseOrder());\n\t\tSystem.out.print(names);\n\n\t}\n\n}\n\n```\nOutput\n\n```jsx\nNumber of elements present in the names list 10\n[Praveen, Anil, Prasad, Kasyap, Praveen, Kiran, Narayana, Keerthana, Anusha, Lakshmi]\n\nTraversing list through Iterator\nPraveen Anil Prasad Kasyap Praveen Kiran Narayana Keerthana Anusha Lakshmi \n\nTraversing list using for loop\nPraveen Anil Prasad Kasyap Praveen Kiran Narayana Keerthana Anusha Lakshmi \n\nTraversing list using enhanced for loop\nPraveen Anil Prasad Kasyap Praveen Kiran Narayana Keerthana Anusha Lakshmi \n\nTraversing list using forEach\nPraveen Anil Prasad Kasyap Praveen Kiran Narayana Keerthana Anusha Lakshmi \n\nRemoving element present in index 1\n[Praveen, Prasad, Kasyap, Praveen, Kiran, Narayana, Keerthana, Anusha, Lakshmi]\n\nRemoving element Praveen\n[Prasad, Kasyap, Praveen, Kiran, Narayana, Keerthana, Anusha, Lakshmi]\n\nSorting elements in ascending order\n[Anusha, Kasyap, Keerthana, Kiran, Lakshmi, Narayana, Prasad, Praveen]\n\nSorting elements in descending order\n[Praveen, Prasad, Narayana, Lakshmi, Kiran, Keerthana, Kasyap, Anusha]\n```\n\n\n**LinkedList**\n\nLinkedList is implemented as a double linked list. Its performance on add and remove is better than Arraylist, but worse on get and set methods.LinkedList, however, also implements Queue interface which adds more methods than ArrayList and Vector, such as offer(), peek(), poll(), etc.\n\n```jsx\npackage com.praveen.collections;\n\nimport java.util.LinkedList;\nimport java.util.List;\nimport java.util.Iterator;\n\npublic class LinkedListExamples {\n\n\tpublic static void main(String[] args) {\n\n\t\tSystem.out.println("LinkedList Examples");\n\n\t\tList<String> monthList = new LinkedList<>();\n\t\tmonthList.add("January");\n\t\tmonthList.add("February");\n\t\tmonthList.add("March");\n\t\tmonthList.add("April");\n\t\tmonthList.add("May");\n\t\tmonthList.add("June");\n\t\tmonthList.add("July");\n\t\tmonthList.add("August");\n\t\tmonthList.add("September");\n\t\tmonthList.add("October");\n\t\tmonthList.add("November");\n\t\tmonthList.add("December");\n\n\t\tSystem.out.println("Months :- " + monthList);\n\n\t\tList<String> nameList = new LinkedList<String>();\n\t\tnameList.add("Praveen");\n\t\tnameList.add("Kiran");\n\t\tnameList.add("Prasad");\n\t\tnameList.add("Anusha");\n\t\tIterator<String> nameIterator = nameList.iterator();\n\t\twhile (nameIterator.hasNext()) {\n\t\t\tSystem.out.println(nameIterator.next());\n\t\t}\n\t}\n\n}\n\n```\n\nOutput\n\n```jsx\nLinkedList Examples\nMonths :- [January, February, March, April, May, June, July, August, September, October, November, December]\nPraveen\nKiran\nPrasad\nAnusha\n\n```\n\n\n**Vector**\n\nVector is similar with ArrayList, but it is synchronized.Vector each time doubles its array size.\n\n```jsx\npackage com.praveen.collections;\n\nimport java.util.Vector;\nimport java.util.Iterator;\nimport java.util.Enumeration;\n\nclass EmployeeList {\n\tprivate int id;\n\tprivate String name;\n\tprivate String address;\n\tprivate Double salary;\n\n\tpublic EmployeeList(int id, String name, String address, Double salary) {\n\t\tthis.id = id;\n\t\tthis.name = name;\n\t\tthis.address = address;\n\t\tthis.salary = salary;\n\t}\n\n\t@Override\n\tpublic String toString() {\n\t\treturn "Employee [id=" + id + ", name=" + name + ", address=" + address + ", salary=" + salary + "]";\n\t}\n}\n\npublic class VectorExamples {\n\n\tpublic static void main(String[] args) {\n\n\t\tSystem.out.println("Vector Examples");\n\n\t\tVector<String> monthVector = new Vector<>();\n\t\tmonthVector.add("January");\n\t\tmonthVector.add("February");\n\t\tmonthVector.add("March");\n\t\tmonthVector.add("April");\n\t\tmonthVector.add("May");\n\t\tmonthVector.add("June");\n\t\tmonthVector.add("July");\n\t\tmonthVector.add("August");\n\t\tmonthVector.add("September");\n\t\tmonthVector.add("October");\n\t\tmonthVector.add("November");\n\t\tmonthVector.add("December");\n\n\t\tSystem.out.println("Months :- " + monthVector);\n\n\t\tVector<EmployeeList> empVector = new Vector<>();\n\n\t\tempVector.add(new EmployeeList(101, "Bob", "Pune", 20000.0));\n\t\tempVector.add(new EmployeeList(102, "Alice", "Mumbai", 30000.0));\n\t\tempVector.add(new EmployeeList(103, "John", "Bangalore", 25000.0));\n\t\tempVector.add(new EmployeeList(104, "Anthony", "Hyderabad", 40000.0));\n\n\t\tIterator<EmployeeList> itr = empVector.iterator();\n\t\twhile (itr.hasNext()) {\n\t\t\tSystem.out.println(itr.next());\n\t\t}\n\n\t\tVector<String> nameVector = new Vector<String>();// creating vector\n\t\tnameVector.add("Praveen");// method of Collection\n\t\tnameVector.addElement("Kiran");// method of Vector\n\t\tnameVector.addElement("Prasad");\n\t\t// traversing elements using Enumeration\n\t\tEnumeration<String> nameEnumeration = nameVector.elements();\n\t\twhile (nameEnumeration.hasMoreElements()) {\n\t\t\tSystem.out.println(nameEnumeration.nextElement());\n\t\t}\n\n\t\tVector<String> dayNames = new Vector<>();\n\t\tdayNames.add("Sunday");\n\t\tdayNames.add("Monday");\n\t\tdayNames.add("Tuesday");\n\t\tdayNames.add("Wednesday");\n\t\tdayNames.add("Thursday");\n\t\tdayNames.add("Friday");\n\t\tdayNames.add("Saturday");\n\t\tEnumeration<String> days = dayNames.elements();\n\t\twhile (days.hasMoreElements()) {\n\t\t\tSystem.out.println(days.nextElement());\n\t\t}\n\t}\n}\n \n\n```\n\nOutput\n\n```jsx\nVector Examples\nMonths :- [January, February, March, April, May, June, July, August, September, October, November, December]\nEmployee [id=101, name=Bob, address=Pune, salary=20000.0]\nEmployee [id=102, name=Alice, address=Mumbai, salary=30000.0]\nEmployee [id=103, name=John, address=Bangalore, salary=25000.0]\nEmployee [id=104, name=Anthony, address=Hyderabad, salary=40000.0]\nPraveen\nKiran\nPrasad\nSunday\nMonday\nTuesday\nWednesday\nThursday\nFriday\nSaturday\n```\n\n**Stack**\n\nStack is a subclass of Vector that implements a standard last-in, first-out stack.\n\nStack only defines the default constructor, which creates an empty stack. Stack includes all the methods defined by Vector, and adds several of its own.\n\n\n```jsx\n\npackage com.praveen.collections;\n\nimport java.util.Stack;\nimport java.util.EmptyStackException;\n\npublic class StackExamples {\n\n    public static void main(String[] args) {\n        System.out.println("Stack Examples");\n\n        Stack<Integer> numberStack = new Stack<>();\n        System.out.println("stack: " + numberStack);\n        showpush(numberStack, 42);\n        showpush(numberStack, 66);\n        showpush(numberStack, 99);\n        showpop(numberStack);\n        showpop(numberStack);\n        showpop(numberStack);\n        try {\n            showpop(numberStack);\n        } catch (EmptyStackException ex) {\n            System.out.println("empty stack");\n        }\n    }\n\n    static void showpop(Stack<Integer> numberStack) {\n        System.out.print("pop -> ");\n        Integer num = (Integer) numberStack.pop();\n        System.out.println(num);\n        System.out.println("stack: " + numberStack);\n    }\n\n    static void showpush(Stack<Integer> st, int num) {\n        st.push(new Integer(num));\n        System.out.println("push(" + num + ")");\n        System.out.println("stack: " + st);\n    }\n\n}\n\n\t\n\n```\n\nOutput\n\n```jsx\nStack Examples\nstack: []\npush(42)\nstack: [42]\npush(66)\nstack: [42, 66]\npush(99)\nstack: [42, 66, 99]\npop -> 99\nstack: [42, 66]\npop -> 66\nstack: [42]\npop -> 42\nstack: []\npop -> empty stack\n```\n\n**Difference between Array and ArrayList**\n\n![screenshot of the app](https://praveenoruganti.github.io/courses/images/java/arraylist1.png)\n\n**Difference between ArrayList and Vector**\n\n![screenshot of the app](https://praveenoruganti.github.io/courses/images/java/alvsv.jpg)\n\n**Difference between ArrayList and LinkedList**\n\n![screenshot of the app](https://praveenoruganti.github.io/courses/images/java/alvsll.jpg)\n\n**Iterator interface**\n\nAn iterator is an interface that iterates the elements. It is used to traverse the list and modify the elements.\nIterator interface has three methods which are mentioned below:\n\n- public boolean hasNext() \u2014 This method returns true if the iterator has more elements.\n- public object next() \u2014 It returns the element and moves the cursor pointer to the next element.\n- public void remove() \u2014 This method removes the last elements returned by the iterator.\n\n**Difference between Enumerator and Iterator**\n\n![screenshot of the app](https://praveenoruganti.github.io/courses/images/java/enumiterator.png)\n\n**Difference between Iterator and ListIterator**\n\n![screenshot of the app](https://praveenoruganti.github.io/courses/images/java/listiterator.png)\n\n**Fail fast vs Fail safe iterators**\n\nIterators in java give us the facility to traverse over the Collection objects. Iterators returned by the Collection are either fail-fast in nature or fail-safe in nature.\n\nFail-Fast iterators immediately throw ConcurrentModificationException if a collection is modified while iterating over it. For example,\nIterators returned by ArrayList, Vector, HashMap.\n\nWhere as Fail-Safe iterators don\u2019t throw any exceptions if a collection is modified while iterating over it. Because, they operate on the clone of the collection, not on the actual collection. For example, Iterator returned by ConcurrentHashMap.\n\n\n\n\n\n\n\n '}}]);