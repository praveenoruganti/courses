(this["webpackJsonppraveenoruganti-courses"]=this["webpackJsonppraveenoruganti-courses"]||[]).push([[148],{717:function(n,e,t){"use strict";t.r(e),e.default=' JavaScript variables can hold many data types: numbers, strings, objects and more.\n\n```jsx\nvar length = 16;                               // Number\nvar lastName = "Oruganti";                      // String\nvar x = {firstName:"Praveen", lastName:"Oruganti"};    // Object\n```\n**Note**\n\n- When adding a number and a string, JavaScript will treat the number as a string.\n- JavaScript evaluates expressions from left to right.\n- JavaScript has dynamic types. This means that the same variable can be used to hold different data types.\n- Strings are written with quotes. You can use single or double quotes.\n- Numbers can be written with, or without decimal and extra large or extra small numbers can be written with scientific (exponential) notation.\n- In JavaScript, a variable without a value, has the value undefined. The type is also undefined.\n- In JavaScript, the data type of null is an object.\n\n## JS Numbers\n\n```jsx\nlet num1= 10; // Integer\nlet num2= 10.9; // Decimal Number\n\nlet num3 =15;\nlet sum = num3 + num1 + num2;\nconsole.log(sum); // 35.9\n\nlet diff = num3-num1;\nconsole.log(5);\n\nlet divByZero = num3/0;\nconsole.log(divByZero); // Infinity\n\nconsole.log(0 / 0); // NaN\nconsole.log(0 / 5); // 0\nconsole.log(3 * "a"); // NaN\nconsole.log("a" * 3); // NaN\nconsole.log("b" + 4); // b4\nconsole.log(4 + "b"); // 4b\nconsole.log(5 - "c"); // NaN\nconsole.log("c" - 5); // NaN\n\n// parseInt() string numeral as input and returns a number\nconsole.log(parseInt("11.5")); // 11\nconsole.log(parseInt("ABC")); // NAN\n\n// parseFloat() string numeral as an input and returns a floating number\nconsole.log(parseFloat("11.5")); // 11.5\nconsole.log(parseFloat("ABC")); // NAN\n\n// toFixed() takes floating number and rounds it off to given position\nlet num4 = 87.987653;\nconsole.log(num4.toFixed()); // "88"\nconsole.log(num4.toFixed(2)); // "87.99"\nconsole.log(num4.toFixed(5)); // "87.98765"\n```\n\n## JS Strings\nJavaScript string is a primitive data type that is used to work with texts. For example,\n\n```jsx\nconst name = \'Praveen\';\n```\nIn JavaScript, strings are created by surrounding them with quotes. There are three ways you can use quotes.\n\n- Single quotes: \'Hello\'\n- Double quotes: "Hello"\n- Backticks: `Hello`\n\nSingle quotes and double quotes are practically the same and you can use either of them.\n\nBackticks are generally used when you need to include variables or expressions into a string. This is done by wrapping variables or expressions with $.\n\nYou can also write a quote inside another quote. For example,\n\n```jsx\nconst name = \'My name is "Praveen".\';\n```\nHowever, the quote should not match the surrounding quotes. For example,\n\n```jsx\nconst name = \'My name is \'Praveen\'.\'; // error\n```\n\nFew more examples,\n\n```jsx\nlet myFirstString= "This is Praveen Oruganti";\nlet mySecondString = \'I have passion to learn new technologies\';\nlet doubleQuoteString = "This is a "JavaScript" string"\nconsole.log(doubleQuoteString); // "This is a \'JavaScript\' string"\n\n// what if my string contains a single quote\nlet singleQuotesString = \'This is a \'JavaScript\' string\';\nconsole.log(singleQuotesString); // "This is a \'JavaScript\' string"\n\nlet doubleQuotesString2 = "This is a \'JavaScript\' string"; // "This is a \'JavaScript\' string"\nlet singleQuotesString2 = \'This is a "JavaScript" string\'; // "This is a \'JavaScript\' string"\n```\n### Access String Characters\nYou can access the characters in a string in two ways.\n- One way is to treat strings as an array. For example,\n```jsx\nconst a = \'hello\';\nconsole.log(a[1]); // "e"\n```\n- Another way is to use the method charAt(). For example,\n```jsx\nconst a = \'hello\';\nconsole.log(a.charAt(1)); // "e"\n```\n### JavaScript Strings are immutable\nIn JavaScript, strings are immutable. That means the characters of a string cannot be changed. For example,\n```jsx\nlet a = \'hello\';\na[0] = \'H\';\nconsole.log(a); // "hello"\n```\nHowever, you can assign the variable name to a new string. For example,\n\n```jsx\nlet a = \'hello\';\na = \'Hello\';\nconsole.log(a); // "Hello"\n```\n### JavaScript is Case-Sensitive\nJavaScript is case-sensitive. That means in JavaScript, the lowercase and uppercase letters are treated as different values. For example,\n```jsx\nconst a = \'a\';\nconst b = \'A\'\nconsole.log(a === b); // false\n```\nIn JavaScript, a and A are treated as different values.\n### JavaScript Multiline Strings\nTo use a multiline string, you can either use the + operator or the  operator. For example,\n```jsx\n// using the + operator\nconst message1 = \'This is a long message \' +\n    \'that spans across multiple lines\' +\n    \'in the code.\'\n\n// using the  operator\nconst message2 = \'This is a long message that spans across multiple lines in the code.\'\n```\n### JavaScript String Length\nTo find the length of a string, you can use built-in length property. For example,\n\n```jsx\nconst a = \'hello\';\nconsole.log(a.length); // 5\n```\n\n### JavaScript String Objects\n\nYou can also create strings using the new keyword. For example,\n\n```jsx\nconst a = \'hello\';\nconst b = new String(\'hello\');\n\nconsole.log(a); // "hello"\nconsole.log(b); // "hello"\n\nconsole.log(typeof a); // "string"\nconsole.log(typeof b); // "object"\n```\n**Note**\n\nIt is recommended to avoid using string objects. Using string objects slows down the program.\n\n### JavaScript String Methods\nHere are the commonly used JavaScript String methods:\ncharAt(index)\treturns the character at the specified index\nconcat()\tjoins two or more strings\nreplace()\treplaces a string with another string\nsplit()\tconverts the string to an array of strings\nsubstr(start, length)\treturns a part of a string\nsubstring(start,end)\treturns a part of a string\nslice(start, end)\treturns a part of a string\ntoLowerCase()\treturns the passed string in lower case\ntoUpperCase()\treturns the passed string in upper case\ntrim()\tremoves whitespace from the strings\nincludes()\tsearches for a string and returns a boolean value\nsearch()\tsearches for a string and returns a position of a match\n\n```jsx\n\nlet myFirstString = "This is a string for Javascript string functions, Javascript";\n\n// returns the length of the string\nconsole.log(myFirstString); // 48\n\n// Find index of a string inside another string\nconsole.log(myFirstString.indexOf(\'JavaScript\')); // -1\nconsole.log(myFirstString.indexOf(\'Javascript\')); // 21\nconsole.log(myFirstString.indexOf(\'This\')); // 0\n\n// Find last index of a sting inside another string\nconsole.log(myFirstString.lastIndexOf(\'Javascript\')); // 50\nconsole.log(myFirstString.lastIndexOf(\'This\')); // 0\n\n// Get a part of our String slice(start, end)\nconsole.log(myFirstString.slice(0,4)); // "This"\nconsole.log(myFirstString.slice(21,31)); // "Javascript"\nconsole.log(myFirstString.slice(-10)); // "Javascript"\nconsole.log(myFirstString.slice(5)); // "is a string for Javascript string functions, Javascript"\n\n// Get sub string function - substr(startPos,length)\nconsole.log(myFirstString.substr(0,4)); // "This"\nconsole.log(myFirstString.substr(21,10)); // "Javascript"\nconsole.log(myFirstString.substr(21)); // "Javascript string functions, Javascript"\n\nlet exampleString = "This is JavaScript Tutorial";\n\n// toUpperCase() - it converts our string to uppercase characters\nconsole.log(exampleString.toUpperCase()); // "THIS iS JAVASCRIPT TUTORIAL"\n\n// toLowerCase() - it converts our string to lowercase characters\nconsole.log(exampleString.toLowerCase()); // "this is javascript tutorial"\n\n// concat() - it merges two or more strings\nlet firstName= "Praveen";\nlet lastName = "Oruganti";\nlet title ="Mr"\nconsole.log(firstName.concat(lastName)); // "PraveenOruganti"\nconsole.log(title.concat(\' \',firstName,\' \',lastName)); // "Mr Praveen Oruganti"\n\n// we can also use "+" operator to concat two or more strings\nconsole.log(firstName + lastName); // "PraveenOruganti"\nconsole.log(title + \' \' + firstName+ \' \'+ lastName)); // "Mr Praveen Oruganti"\n\n// trim() - it removes extra spaces\nlet extraSpaceString = \'       mystring   \';\nconsole.log(extraSpaceString.trim()); // "mystring"\n\nlet extraSpaceString2 = \'    my string   \';\nconsole.log(extraSpaceString2.trim()); // "my string"\n\n// charAt() - This takes a position as an argument and returns character at that position\nlet charAtExampleString = "This is my text string";\nconsole.log(charAtExampleString.charAt(5)); // "i"\nconsole.log(charAtExampleString.charAt(11)); //  "t"\n\n// split() - splits our string on the basis of the arguments passed\nlet sampleString = "This is my sample string";\nconsole.log(sampleString.split(\' \')); // ["This", "is", "my", "sample", "string"];\n\nlet sampleString2= "This,is,my,sample,string";\nconsole.log(sampleString.split(\',\')); // ["This", "is", "my", "sample", "string"];\n\nlet sampleString3 = "This is praveenoruganti";\nconsole.log(sampleString3.split()); // ["This is praveenoruganti"]\n```\n\n### JavaScript String() Function\nThe String() function is used to convert various data types to strings. For example,\n\n```jsx\nconst a = 225; // number\nconst b = true; // boolean\n\n//converting to string\nconst result1 = String(a);\nconst result2 = String(b);\n\nconsole.log(result1); // "225"\nconsole.log(result2); // "true"\n```\n### Escape Character\nYou can use the backslash escape character  to include special characters in a string. For example,\n```jsx\nconst name = \'My name is \'Peter\'.\';\nconsole.log(name);\n```\n\n### Iterate\n\n```jsx\nconst string = \'code\';\n\n// using for...in loop\nfor (let i in string) {\n    console.log(string[i]);\n}\n```\n\nYou can check out the [Demo](https://praveenoruganti.github.io/courses/demo/js/DataTypes)\n\n\n\n\n\n '}}]);