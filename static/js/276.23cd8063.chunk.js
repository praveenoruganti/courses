(this["webpackJsonppraveenoruganti-courses"]=this["webpackJsonppraveenoruganti-courses"]||[]).push([[276],{845:function(t,n,e){"use strict";e.r(n),n.default=' JUnit 5 assertions help us in validating the expected output with the actual output of a test case. In short, assertions are nothing but static methods that we call in our tests to verify expected behavior. All JUnit Jupiter assertions are present in the `org.junit.jupiter.Assertions` class.\n\nThese methods support Java 8 lambda expressions and are extensively overloaded to support different types such as primitives, objects, streams, arrays etc.\n\n**Assert methods in Assertions API**\n\n![screenshot of the app](https://praveenoruganti.github.io/courses/images/testing/assertions.jpg)\n\n\nLet\'s create a class StringUtils\n\n```jsx\npackage com.praveen.junit.utils;\n\npublic class StringUtils {\n\n\tprivate StringUtils() {\n\n\t}\n\n\tpublic static String reverse(String input) {\n\t\tif (input == null) {\n\t\t\treturn null;\n\t\t}\n\t\tif (input.length() == 0) {\n\t\t\treturn "";\n\t\t}\n\t\tchar[] charArray = input.toCharArray();\n\t\tint start = 0;\n\t\tint end = input.length() - 1;\n\t\twhile (start < end) {\n\t\t\tchar temp = charArray[start];\n\t\t\tcharArray[start] = charArray[end];\n\t\t\tcharArray[end] = temp;\n\t\t\tstart++;\n\t\t\tend--;\n\t\t}\n\t\treturn new String(charArray);\n\t}\n}\n```\n\nLet\'s create Junit test case for StringUtils\n\n```jsx\npackage com.praveen.junit.utils;\n\nimport static org.junit.jupiter.api.Assertions.assertEquals;\nimport static org.junit.jupiter.api.Assertions.assertNotEquals;\nimport static org.junit.jupiter.api.Assertions.assertNotNull;\nimport static org.junit.jupiter.api.Assertions.assertNull;\n\nimport org.junit.jupiter.api.Test;\n\nclass StringUtilsTest {\n\n\t@Test\n\tvoid givenNullString_whenReverseIsCalled_thenNullIsReturned() {\n\t\tString actual = StringUtils.reverse(null);\n\t\tassertNull(actual);\n\t}\n\n\t@Test\n\tvoid givenEmptyString_whenReverseIsCalled_thenEmptyStringIsReturned() {\n\t\tString actual = StringUtils.reverse("");\n\t\tString expected = "1234";\n\t\tassertNotNull(actual);\n\t\tassertNotEquals(expected, actual);\n\t}\n\n\t@Test\n\tvoid givenNonNullString_whenReverseIsCalled_thenReversedStringIsReturned() {\n\t\tString actual = StringUtils.reverse("ABCD");\n\t\tString expected = "DCBA";\n\t\tassertNotNull(actual);\n\t\tassertEquals(expected, actual);\n\t}\n}\n\n```\n '}}]);