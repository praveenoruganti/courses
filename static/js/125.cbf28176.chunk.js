(this["webpackJsonppraveenoruganti-courses"]=this["webpackJsonppraveenoruganti-courses"]||[]).push([[125],{694:function(n,t,e){"use strict";e.r(t),t.default=' \n- Functions are exactly same as predicates except that functions can return any type of result but function should (can) return only one value and that value can be any type as per our requirement.\n- To implement functions oracle people introduced Function interface in 1.8version.\n- Function interface present in Java.util.function package.\n- Functional interface contains only one method i.e.. apply()\n\n```jsx\ninterface function(T,R) {\n   public R apply(T t);\n}\n```\n\n`Let\'s see an example, Write a function to find length of given input string.`\n\n```jsx\npublic class FunctionTest {\n\n\tpublic static void main(String[] args) {\n\t\tFunction<String, Integer> f = s -> s.length();\t\n\t\tSystem.out.println(f.apply("Praveen"));\n\t\tSystem.out.println(f.apply("Oruganti"));\n\t}\n\n}\n```\n\n**Output**\n\n```jsx\n7\n8\n```\n\n`Let\'s see another example`\n\n```jsx\npublic class FunctionDemo {\n\n    public static void main(String args[]) {\n        beforeJava8();// Without Function Functional Interface\n        fromJava8();// With Function Functional Interface\n    }\n\n    private static void beforeJava8() {\n        Integer usd = 10;\n        Double inrValue = convertUsdToInr(usd);\n        System.out.println("From beforeJava8 " + usd + " USD = " + inrValue + " INR");\n    }\n\n    // User defined method, this functionality is common in most of the Java\n    // application\n    private static Double convertUsdToInr(Integer usd) {// Single input\n        Double inrRate = 71.0; // Call Webservice\n        return usd * inrRate;\n    }\n\n    private static void fromJava8() {\n        Double inrRate = 71.0; // Call Webservice\n        Function<Integer, Double> function = usd -> usd * inrRate;\n        System.out.println("From fromJava8 " + 10 + " USD = " + function.apply(10) + " INR");\n        // Function<T, R>\n        // @param <T> the type of the input to the function\n        // @param <R> the type of the result of the function\n    }\n\n}\n\n```\n\n**Output**\n\n```jsx\nFrom beforeJava8 10 USD = 710.0 INR\nFrom fromJava8 10 USD = 710.0 INR\n```\n\n`Another Example using Function`\n\n```jsx\npublic class FunctionDemo1 {\n    public static void main(String args[]) {\n        beforeJava8();// Without Function Functional Interface\n        fromJava8();// With Function Functional Interface\n    }\n    private static void beforeJava8() {\n        Integer n1 = 5; Integer squareOfNumber = calculateSquareOfNumber(n1);\n        System.out.println("From withoutFunction \u2013 Square of a number is :" + squareOfNumber);\n    }\n    // User defined method, this functionality is common in most of the Java\n    private static Integer calculateSquareOfNumber(Integer n1) {\n        return n1 * n1;\n    }\n    private static void fromJava8() {\n        Function<Integer, Integer> function = n1 -> n1 * n1;\n        System.out.println("From withFunction \u2013 Square of a number is :" + function.apply(5));\n        // Function<T, R> // @param <T> the type of the input to the function // @param <R> the type of the result of the function\n    }\n}\n\n```\n\n**Output**\n\n```jsx\nFrom withoutFunction \u2013 Square of a number is :25\nFrom withFunction \u2013 Square of a number is :25\n```\n\n`Example using andThen`\n\n```jsx\n\npublic class FunctionAndThenDemo {\n    public static void main(String args[]) {\n        Function<String, String> function1 = s -> s.toUpperCase();\n        Function<String, String> function2 = s -> s + " World";\n        System.out.println("Output of function1 : " + function1.apply("Hello"));\n        System.out.println("andThen Output : " + function1.andThen(function2).apply("Hello")); //The output of the first function will become input to the second function\n        //System.out.println("andThen Output 2 : " + function2.andThen(function1).apply("Hello"));\n    }\n}\n\n```\n**Output**\n\n```jsx\nOutput of function1 : HELLO\nandThen Output : HELLO World\n```\n\n`Another Example using andThen`\n\n```jsx\npublic class FunctionAndThenDemo2 {\n\n    public static void main(String args[]) {\n\n        Function<Integer, Integer> function1 = n1 -> n1 + n1;\n        Function<Integer, Integer> function2 = n1 -> n1 * n1;\n\n        System.out.println("Function 1 andThen Function 2 : " + function1.andThen(function2).apply(10));\n\n    }\n\n}\n\n```\n\n**Output**\n\n```jsx\nFunction 1 andThen Function 2 : 400\n```\n\n`Example using compose`\n\n```jsx\npublic class FunctionComposeDemo {\n    public static void main(String args[]) {\n        Function<String, String> function1 = s -> s.toUpperCase();\n        Function<String, String> function2 = s -> s + " World";\n        System.out.println("Output \u2013 function1 : " + function1.apply("Hello"));\n        System.out.println("Output \u2013 Compose : " + function1.compose(function2).apply("Hello")); // The output of the first function will become input to the second function\n    }\n}\n\n```\n**Output**\n\n```jsx\nOutput \u2013 function1 : HELLO\nOutput \u2013 Compose : HELLO WORLD\n```\n\n`Another Example using compose`\n\n```jsx\n\npublic class FunctionComposeDemo2 {\n\n    public static void main(String args[]) {\n        Function<Integer, Integer> function1 = n1 -> n1 + n1;\n        Function<Integer, Integer> function2 = n1 -> n1 * n1;\n        System.out.println("Function 1 compose Function 2 : " + function1.compose(function2).apply(10));\n    }\n\n}\n\n```\n**Output**\n\n```jsx\nFunction 1 compose Function 2 : 200\n```\n\n`Example using Identity`\n\n```jsx\n\npublic class FunctionIdentityDemo {\n    public static void main(String args[]) {\n        Function<String, String> function = Function.identity();\n        System.out.println(function.apply("Java8"));\n        Function<Boolean, Boolean> function2 = Function.identity(); \n        System.out.println(function2.apply(true));\n        Function<Integer, Integer> function1 = Function.identity();\n        System.out.println(function1.apply(1));\n    }\n}\n\n```\n**Output**\n\n```jsx\nJava8\ntrue\n1\n```\n\n`Let\'s see an example where a function can accept two arguments`\n\n```jsx\npublic class BiFunctionIdentityDemo {\n    public static void main(String args[]) {\n        BiFunction<Integer, Integer, Integer> sum = (x,y) -> (x+y);\t\n        System.out.println(sum.apply(5,6));       \n    }\n}\n``` '}}]);