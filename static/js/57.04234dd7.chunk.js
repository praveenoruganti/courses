(this["webpackJsonppraveenoruganti-courses"]=this["webpackJsonppraveenoruganti-courses"]||[]).push([[57],{626:function(n,t,e){"use strict";e.r(t),t.default=" An array is a collection of items of the same data type stored at contiguous memory locations. \n\nThis makes it easier to calculate the position of each element by simply adding an offset to a base value, i.e., the memory location of the first element of the array.\n\n\n**Defining an Array**\n\nArray definition is similar to defining any other variable. \n\nThere are two things that are needed to be kept in mind, the data type of the array elements and the size of the array. \n\nThe size of the array is fixed and the memory for an array needs to be allocated before use, the size of an array cannot be increased or decreased dynamically.\n\n`Syntax`\n\n```jsx\ndatatype[] variable_name = new datatype[size];\n```\n\n`for example`\n\n```jsx\nint[] num = new int[10];\n\nchar[] arr1 = {'p', 'r', 'a', 'v', 'e', 'e', 'n'};\n\nint[] arr2 = {10, 20, 30, 40, 50};\n\n// Item at i'th index in array is typically accessed  as \"arr[i]\". For example arr1[0] gives us 'p' and arr2[3] gives us 40.\n\n```\n\n**Array Operations and its time complexity**\n\n![screenshot of the app](https://praveenoruganti.github.io/courses/images/dsa/arraytime.jpg)\n\n- Accessing a value at given index: O(1).\n- Updating a value at given index: O(1).\n- Inserting a value at the beginning: O(n).\n- Inserting a value in the middle: O(n).\n- Inserting a value at the end:  O(1) when dealing with a dynamic array and O(n) when dealing with a static array.\n- Removing a value at the beginning: O(n).\n- Removing a value in the middle: O(n).\n- Removing a value at the end: O(1).\n- Copying the array: O(n).\n\nYou can learn more about space and time complexity in [further section](https://praveenoruganti.github.io/courses/#/dsa/complexity).\n\n**Accessing array elements**\n\nArrays allows to access elements randomly. Elements in an array can be accessed using indexes. \n\nSuppose an array named arr stores N elements. Indexes in an array are in the range of 0 to N-1, where the first element is present at index 0 and consecutive elements are placed at consecutive indexes. \n\nFor example,\n\n```jsx\n\nint[] nums = {1,3,5,7,9,11,13,15};\n\nSystem.out.println(nums[0]); // 1\nSystem.out.println(nums[5]); // 11\nSystem.out.println(nums[7]); // 15\nSystem.out.println(nums[8]); // ArrayIndexOutOfBoundsException\n\nint[] arr = new int[4];\nSystem.out.println(arr); // it prints 4 zeros \n\nString[] names = new String[4];\nSystem.out.println(names); // it prints 4 null as it is not a primitive\n\n```\n\n**Properties of Array**\n\n- Array can store data of specific datatype\n- It has contiguous memory location\n- Every cell of an array has unique index\n- Index starts with zero\n- Size of array needs to be specified mandatorily and cannot be modified.\n\n\n**How is an Array represented in Memory (RAM)?**\n\nIt stores the cells data in contiguous memory location.\n\n![screenshot of the app](https://praveenoruganti.github.io/courses/images/dsa/array.png)\n\n**Advantages of using arrays**\n\n- Arrays allow random access of elements. This makes accessing elements by their position faster. \n- Arrays have better cache locality that can make a pretty big difference in performance.\n\n**Limitation of Arrays**\n\n- Need to know size in advance. Too small size cannot add more elements where as Too large size is waste of space.\n- We cannot insert/remove the elements infront of others except at the end.\n- some operations like search will be slow.\n\n**Inserting a value at the beginning of the Array**\n\n```jsx\npackage com.praveen.array;\n\nimport java.util.Arrays;\n\npublic class ArrayDemo {\n\n\tpublic static void main(String[] args) {\n\t\tSystem.out.println(Arrays.toString(addElement(new int[] { 9, 8, 7, 5, 2, 3, 4 }, 10)));\n\t}\n\n\tpublic static int[] addElement(int[] arr, int element) {\n\t\tint newArr[] = new int[arr.length + 1];\n\t\tnewArr[0] = element;\n\t\tfor (int i = 0; i < arr.length; i++) {\n\t\t\tnewArr[i + 1] = arr[i];\n\t\t}\n\t\treturn newArr;\n\t}\n}\n\n```\n**Searching in an Array**\n\nSearching for an element in an array means to check if a given element is present in the array or not. This can be done by accessing elements of the array one by one starting from the first element and checking whether any of the elements matches with the given element. \n\nWe can use loops to perform the above operation of array traversal and access the elements, using indexes. \n\nSuppose the array is named arr[] with size N and the element to be searched is referred to as key. Below is the algorithm to perform the search operation in the given array.\n\n\n```jsx\npackage com.praveen.array;\n\npublic class ArrayDemo {\n\n\tpublic static void main(String[] args) {\n\n\t    int[] num = { 10, 20, 30, 40, 50 };\n\t\tSystem.out.println(searchElement(num, 40)); // true\n\t\tSystem.out.println(searchElement(num, 25)); // false\n\n\t\tSystem.out.println(searchElementEnhanced(num, 20)); // true\n\t\tSystem.out.println(searchElementEnhanced(num, 100)); // false\n\n\t\tSystem.out.println(searchElementJava8(num, 50)); // true\n\t\tSystem.out.println(searchElementJava8(num, 5)); // false\n\n\t}\n\n    /* Time Complexity of this search operation will be O(N) in the worst case as we are checking every element \n\t   of the array from 1st to last, so the number of operations is N.\n\t*/\n\tpublic static boolean searchElement(int[] num, int key) {\n\t\tfor (int i = 0; i < num.length - 1; i++) {\n\t\t\tif (num[i] == key) {\n\t\t\t\treturn true;\n\t\t\t}\n\t\t}\n\n\t\treturn false;\n\t}\n\n\tpublic static boolean searchElementEnhanced(int[] num, int key) {\n\t\tfor (int i : num) {\n\t\t\tif (i == key) {\n\t\t\t\treturn true;\n\t\t\t}\n\t\t}\n\t\treturn false;\n\t}\n\n\tpublic static boolean searchElementJava8(int[] num, int key) {\n\t\treturn Arrays.stream(num).anyMatch(number -> number == key);\n\t}\n\n}\n\n```\n\nLet's see some inbuilt functions in Java for Arrays.\n\n- For comparing two arrays we can use Arrays.equals(a1,a2);\n- For comparing two arrays of arrays we can use Arrays.deepEquals(a1,a2);\n- To print an array we can use Arrays.toString(a);\n- To sort an array we can use Arrays.sort(a);\n- Binary search in an sorted array we can use Arrays.binarySearch(int[] a,int key) where key will be index.\n- To copy an array we can use Arrays.copyof(int[] original,int newLength)\n- To convert an array to List we can use Arrays.asList(a)\n\n\n**How many types of Arrays available?**\n\n1. Single Dimensional Array (1D)\n2. Two Dimensional Array(2D)\n3. Multi Dimensional Array(3D,4D etc)\n\n**Single Dimensional Array**\n\nFor example,\n\n```jsx\npackage com.praveen.array;\n\nimport java.util.Arrays;\n\npublic class SingleDimensionalArray {\n\n\tpublic static void main(String[] args) {\n\n\t\tint[] arr = { 1, 2, 3, 4, 5, 6, 7, 8, 9 };\n\n\t\tfor (int i = 0; i < arr.length; i++) {\n\t\t\tSystem.out.print(arr[i] + \" \");\n\t\t}\n\n\t\tSystem.out.println();\n\n\t\tfor (int i : arr) {\n\t\t\tSystem.out.print(i + \" \");\n\t\t}\n\n\t\tSystem.out.println();\n\n\t\tSystem.out.println(Arrays.toString(arr));\n\n\t}\n}\n```\n\n**Output**\n\n```jsx\n1 2 3 4 5 6 7 8 9 \n1 2 3 4 5 6 7 8 9 \n[1, 2, 3, 4, 5, 6, 7, 8, 9]\n```\n\n**Two Dimensional Array**\n\nFor example,\n\n```jsx\npackage com.praveen.array;\n\nimport java.util.Arrays;\n\npublic class TwoDimensionalArray {\n\tpublic static void main(String[] args) {\n\n\t\tint[][] arr = { { 1, 2, 3 }, { 4, 5 }, { 6, 7, 8, 9 } };\n\n\t\tfor (int row = 0; row < arr.length; row++) {\n\t\t\tfor (int col = 0; col < arr[row].length; col++) {\n\t\t\t\tSystem.out.print(arr[row][col] + \" \");\n\t\t\t}\n\t\t\tSystem.out.println();\n\t\t}\n\n\t\tfor (int row = 0; row < arr.length; row++) {\n\t\t\tSystem.out.println(Arrays.toString(arr[row]));\n\t\t}\n\n\t\t\n\t}\n}\n```\n\n**Output**\n\n```jsx\n1 2 3 \n4 5 \n6 7 8 9 \n[1, 2, 3]\n[4, 5]\n[6, 7, 8, 9]\n```\n\n**Note**\n- if rows and columns are fixed then we will say that as a Matrix Array.\n- if rows as fixed but columns are variable then we will say that as Jagged Array.\n\n\n**MultiDimensional Array**\n\nLets see three dimensional array.\n\nFor example,\n\n```jsx\npackage com.praveen.array;\n\npublic class ThreeDimensionalArray {\n\n\tpublic static void main(String[] args) {\n\t\tint[][][] arr = { { { 1, 2, 3 }, { 4, 5, 6 }, { 7, 8 } } };\n\n\t\tfor (int i = 0; i < arr.length; i++) {\n\t\t\tfor (int j = 0; j < arr[i].length; j++) {\n\t\t\t\tfor (int k = 0; k < arr[i][j].length; k++) {\n\t\t\t\t\tSystem.out.print(arr[i][j][k] + \" \");\n\t\t\t\t}\n\t\t\t\tSystem.out.println();\n\t\t\t}\n\t\t}\n\n\t}\n\n}\n\n```\n\n**Output**\n\n```jsx\n1 2 3 \n4 5 6 \n7 8 \n```\n\n\n`Let's see some Array Programs`\n\n**1. Reverse an Array**\n\n```jsx\nimport java.util.Arrays;\n\npublic class ReverseTheArray {\n\n\tpublic static void main(String[] args) {\n\n\t\tSystem.out.println(Arrays.toString(reverseArray(new int[] { 21, 31, 32, 12, 95 })));\n\n\t}\n\n\tprivate static int[] reverseArray(int[] arr) {\n\t\tint start = 0;\n\t\tint end = arr.length - 1;\n\n\t\tint temp;\n\n\t\twhile (start < end) {\n\t\t\ttemp = arr[start];\n\t\t\tarr[start] = arr[end];\n\t\t\tarr[end] = temp;\n\t\t\tstart++;\n\t\t\tend--;\n\t\t}\n\t\treturn arr;\n\n\t}\n\n}\n\n\n```\n\n**2. Find the maximum and minimum element in an array**\n\n```jsx\npublic class ArrayMaxMin {\n\tpublic static void main(String[] args) {\n\t\tgetMinMax(new int[] { 90, 24, 46, 35, 32, 12, 98, 2 });\n\t}\n\n\tprivate static void getMinMax(int[] num) {\n\t\tint max = num[0];\n\t\tint min = num[1];\n\n\t\tfor (int i = 0; i < num.length; i++) {\n\t\t\tif (num[i] > max) {\n\t\t\t\tmax = num[i];\n\t\t\t} else if (num[i] < min) {\n\t\t\t\tmin = num[i];\n\t\t\t}\n\t\t}\n\n\t\tSystem.out.println(\"Max Element is \" + max);\n\t\tSystem.out.println(\"Min Element is \" + min);\n\t}\n}\n\n```\n\n\n\n\n "}}]);