(this["webpackJsonppraveenoruganti-courses"]=this["webpackJsonppraveenoruganti-courses"]||[]).push([[115],{684:function(e,n,p){"use strict";p.r(n),n.default=' Comparable and Comparator in Java is used for sorting the collection of Objects.\n\nImplementing Comparable means "I can compare myself with another object." This is typically useful when there\u2019s a single natural default comparison.\n\nImplementing Comparator means "I can compare two other objects." This is typically useful when there are multiple ways of comparing two instances of a type for example, you could compare people by age, name etc.\n\n**java.lang.Comparable**\n\nTo implement Comparable interface, class must implement a single method compareTo()\n\n```jsx\n\npublic interface Comparable<T>{\n     public int compareTo(T o);\n}\n\n```\n\nYou must modify the class whose instance you want to sort. So that only one sort sequence can be created per class.\n\n**java.util.Comparator**\n\nTo implement Comparator interface, class must implement a single method compare()\n\n```jsx\n\npublic interface Comparator<T>{\n     public int compare(T o1, T o2);\n}\n\n```\n\nYou build a class separate from class whose instance you want to sort. So that multiple sort sequence can be created per class.\n\n**Example for Comparable**\n\n```jsx\npublic class ComparableExample {\n\npublic static void main(String args[]) {\nArrayList<Employee> empList= new ArrayList<Employee>();\nempList.add(new Employee(110,"Praveen",34,200000));\nempList.add(new Employee(101,"Prasad",35,100000));\nempList.add(new Employee(108,"Ravi",34,500000));\nempList.add(new Employee(112,"Prakash",38,700000));\nCollections.sort(empList);\nSystem.out.println(empList);\n}\n\n}\n\nclass Employee implements Comparable<Employee> {\n\nprivate int empId;\nprivate String empName;\nprivate int empAge;\nprivate double empSal;\n\npublic Employee(int empId, String empName, int empAge, double empSal) {\nthis.empId = empId;\nthis.empName = empName;\nthis.empAge = empAge;\nthis.empSal = empSal;\n}\n\npublic int getEmpId() {\nreturn empId;\n}\n\npublic String getEmpName() {\nreturn empName;\n}\n\npublic int getEmpAge() {\nreturn empAge;\n}\n\npublic double getEmpSal() {\nreturn empSal;\n}\n\n@Override\npublic int compareTo(Employee emp) {\n\nif (this.empId == emp.empId)\nreturn 0;\nelse if (this.empId > emp.empId)\nreturn +1;\nelse\nreturn -1;\n}\n\n@Override\npublic String toString() {\nreturn "Employee [empId=" + empId + ", empName=" + empName + ", empAge=" + empAge + ", empSal=" + empSal + "]";\n}\n\n}\n\n```\n\n**Output**\n\n```jsx\n\n[Employee [empId=101, empName=Prasad, empAge=35, empSal=100000.0], Employee [empId=108, empName=Ravi, empAge=34, empSal=500000.0], Employee [empId=110, empName=Praveen, empAge=34, empSal=200000.0], Employee [empId=112, empName=Prakash, empAge=38, empSal=700000.0]]\n\n```\n\n**Example for Comparator**\n\n```jsx\npublic class ComparatorExample {\n\npublic static void main(String args[]) {\nArrayList<EmployeeUpdated> empList = new ArrayList<EmployeeUpdated>();\nempList.add(new EmployeeUpdated(110, "Praveen", 34, 200000));\nempList.add(new EmployeeUpdated(101, "Prasad", 35, 100000));\nempList.add(new EmployeeUpdated(108, "Ravi", 34, 500000));\nempList.add(new EmployeeUpdated(112, "Prakash", 38, 700000));\nCollections.sort(empList, EmployeeUpdated.SalaryComparator);\nSystem.out.println("SalaryComparator \n" + empList);\nCollections.sort(empList, EmployeeUpdated.AgeComparator);\nSystem.out.println("AgeComparator \n" + empList);\nCollections.sort(empList, EmployeeUpdated.NameComparator);\nSystem.out.println("NameComparator \n" + empList);\n}\n\n}\n\nclass EmployeeUpdated {\n\nprivate int empId;\nprivate String empName;\nprivate int empAge;\nprivate double empSal;\n\npublic EmployeeUpdated(int empId, String empName, int empAge, double empSal) {\nthis.empId = empId;\nthis.empName = empName;\nthis.empAge = empAge;\nthis.empSal = empSal;\n}\n\npublic int getEmpId() {\nreturn empId;\n}\n\npublic String getEmpName() {\nreturn empName;\n}\n\npublic int getEmpAge() {\nreturn empAge;\n}\n\npublic double getEmpSal() {\nreturn empSal;\n}\n\n/**\n * Comparator to sort employees list or array in order of Salary\n */\npublic static Comparator<EmployeeUpdated> SalaryComparator = new Comparator<EmployeeUpdated>() {\n\n@Override\npublic int compare(EmployeeUpdated e1, EmployeeUpdated e2) {\nreturn (int) (e1.getEmpSal() \u2013 e2.getEmpSal());\n}\n};\n\n/**\n * Comparator to sort employees list or array in order of Age\n */\npublic static Comparator<EmployeeUpdated> AgeComparator = new Comparator<EmployeeUpdated>() {\n\n@Override\npublic int compare(EmployeeUpdated e1, EmployeeUpdated e2) {\nreturn e1.getEmpAge() \u2013 e2.getEmpAge();\n}\n};\n\n/**\n * Comparator to sort employees list or array in order of Name\n */\npublic static Comparator<EmployeeUpdated> NameComparator = new Comparator<EmployeeUpdated>() {\n\n@Override\npublic int compare(EmployeeUpdated e1, EmployeeUpdated e2) {\nreturn e1.getEmpName().compareTo(e2.getEmpName());\n}\n};\n\n@Override\npublic String toString() {\nreturn "EmployeeUpdated [empId=" + empId + ", empName=" + empName + ", empAge=" + empAge + ", empSal=" + empSal\n+ "]";\n}\n\n}\n\n```\n\n**Example for Comparator Using Lambda**\n\n```jsx\npublic class ComparatorUsingLambda {\n\npublic static void main(String args[]) {\nArrayList<EmployeeUpdated> empList = new ArrayList<EmployeeUpdated>();\nempList.add(new EmployeeUpdated(110, "Praveen", 34, 200000));\nempList.add(new EmployeeUpdated(101, "Prasad", 35, 100000));\nempList.add(new EmployeeUpdated(108, "Ravi", 34, 500000));\nempList.add(new EmployeeUpdated(112, "Prakash", 38, 700000));\nempList.sort(new Comparator<EmployeeUpdated>() {\n@Override\npublic int compare(EmployeeUpdated e1, EmployeeUpdated e2) {\nreturn (int) (e1.getEmpSal() \u2013 e2.getEmpSal());\n}\n});\nSystem.out.println("SalaryComparator");\nempList.forEach((employee)->System.out.println(employee));\nempList.sort(new Comparator<EmployeeUpdated>() {\n@Override\npublic int compare(EmployeeUpdated e1, EmployeeUpdated e2) {\nreturn (int) (e1.getEmpAge() \u2013 e2.getEmpAge());\n}\n});\nSystem.out.println("AgeComparator");\nempList.forEach((employee)->System.out.println(employee));\nempList.sort(new Comparator<EmployeeUpdated>() {\n@Override\npublic int compare(EmployeeUpdated e1, EmployeeUpdated e2) {\nreturn e1.getEmpName().compareTo(e2.getEmpName());\n}\n});\nSystem.out.println("NameComparator");\nempList.forEach((employee)->System.out.println(employee));\n}\n\n}\n\n```\n '}}]);