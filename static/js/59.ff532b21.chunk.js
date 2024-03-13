(this["webpackJsonppraveenoruganti-courses"]=this["webpackJsonppraveenoruganti-courses"]||[]).push([[59],{628:function(n,t,r){"use strict";r.r(t),t.default=" Linear search is a very simple algorithm. In this type of search, sequential search is made over all items one by one. \n\nEvery item is checked and if a match is found then that particular item is returned, otherwise search will continue till the end of the data collection.\n\nLet's start coding for linear search\n\n```jsx\npackage com.praveen.search.linear;\n\npublic class LinearSearch {\n\n\tpublic static void main(String[] args) {\n\t\tint[] arr = { 90, 24, 46, 35, 32 };\n\t\tSystem.out.println(search(arr, 32));\n\t\tSystem.out.println(search(arr, 46));\n\t\tSystem.out.println(search(arr, 100));\n\n\t}\n\n\tprivate static int search(int[] arr, int target) {\n\n\t\tfor (int i = 0; i < arr.length; i++) {\n\t\t\tif (arr[i] == target) {\n\t\t\t\treturn i;\n\t\t\t}\n\t\t}\n\t\treturn -1;\n\n\t}\n\n}\n\n\n```\n\n**Output**\n```jsx\n4\n2\n-1\n```\n\n`Let's see some programs`\n\n`1. Search in Range`\n\n```jsx\npackage com.praveen.search.linear;\n\npublic class SearchInRange {\n\n\tpublic static void main(String[] args) {\n\t\tint[] arr = { 90, 24, 46, 35, 32 };\n\t\tSystem.out.println(searchInRange(arr, 32, 1, 3));\n\t\tSystem.out.println(searchInRange(arr, 46, 1, 3));\n\n\t}\n\n\tprivate static int searchInRange(int[] arr, int target, int start, int end) {\n\t\tfor (int i = start; i <= end; i++) {\n\t\t\tif (arr[i] == target) {\n\t\t\t\treturn i;\n\t\t\t}\n\t\t}\n\t\treturn -1;\n\t}\n\n}\n\n\n```\n\n**Output**\n\n```jsx\n-1\n2\n```\n\n`2. Find minimum element in an array`\n\n```jsx\npackage com.praveen.search.linear;\n\npublic class FindMin {\n\n\tpublic static void main(String[] args) {\n\t\tint[] arr = { 90, 24, 46, 35, 32 };\n\t\tSystem.out.println(min(arr));\n\t}\n\n\tprivate static int min(int[] arr) {\n\t\tint min = arr[0];\n\t\tfor (int i : arr) {\n\t\t\tif (i < min) {\n\t\t\t\tmin = i;\n\t\t\t}\n\t\t}\n\t\treturn min;\n\t}\n\n}\n```\n\n**Output**\n```jsx\n24\n```\n\n`3. Search in 2D Array`\n\n```jsx\npackage com.praveen.search.linear;\n\nimport java.util.Arrays;\n\npublic class SearchIn2DArray {\n\n\tpublic static void main(String[] args) {\n\n\t\tint[][] arr = { { 12, 18, 21 }, { 89, 73, 23, 92 }, { 6, 32, 1 }, { 10, 43 } };\n\n\t\tSystem.out.println(Arrays.toString(searchIn2DArray(arr, 32)));\n\t\tSystem.out.println(Arrays.toString(searchIn2DArray(arr, 43)));\n\t\tSystem.out.println(Arrays.toString(searchIn2DArray(arr, 73)));\n\t\tSystem.out.println(Arrays.toString(searchIn2DArray(arr, 100)));\n\n\t}\n\n\tprivate static int[] searchIn2DArray(int[][] arr, int target) {\n\n\t\tfor (int row = 0; row < arr.length; row++) {\n\t\t\tfor (int col = 0; col < arr[row].length; col++) {\n\n\t\t\t\tif (target == arr[row][col]) {\n\t\t\t\t\treturn new int[] { row, col };\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\treturn new int[] { -1, -1 };\n\n\t}\n\n}\n\n\n```\n\n**Output**\n\n```jsx\n[2, 1]\n[3, 1]\n[1, 1]\n[-1, -1]\n```\n\n`4. Maximum value in 2D Array`\n\n```jsx\npackage com.praveen.search.linear;\n\npublic class FindMaxin2DArray {\n\n\tpublic static void main(String[] args) {\n\t\tint[][] arr = { { 12, 18, 21 }, { 89, 73, 23, 92 }, { 6, 32, 1 }, { 10, 43 } };\n\n\t\tSystem.out.println(maxIn2DArray(arr));\n\n\t}\n\n\tprivate static int maxIn2DArray(int[][] arr) {\n\n\t\tint max = Integer.MIN_VALUE;\n\n\t\tfor (int row = 0; row < arr.length; row++) {\n\t\t\tfor (int col = 0; col < arr[row].length; col++) {\n\n\t\t\t\tif (arr[row][col] > max) {\n\t\t\t\t\tmax = arr[row][col];\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\treturn max;\n\n\t}\n\n}\n\n```\n**Output**\n```jsx\n92\n```\n\n`5. Find numbers with even number of digits`\n\n```jsx\npackage com.praveen.search.linear;\n\npublic class FindEvenNumberOfDigits {\n\n\tpublic static void main(String[] args) {\n\t\tSystem.out.println(findNumbers(new int[] { 12, 345, 2, 6, 7896 }));\n\t\tSystem.out.println(findNumbers(new int[] { 92, 122, 9062, 230455, -36533 }));\n\t\tSystem.out.println(findNumbers(new int[] { 0, 12, 312, 9765, 12345 }));\n\t}\n\n\tprivate static int findNumbers(int[] arr) {\n\t\tint count = 0;\n\t\tfor (int i : arr) {\n\t\t\tif (even(i)) {\n\t\t\t\tcount++;\n\t\t\t}\n\t\t}\n\t\treturn count;\n\n\t}\n\n\tprivate static boolean even(int num) {\n\n\t\treturn digits(num) % 2 == 0;\n\t}\n\n\tprivate static int digits(int num) {\n\n\t\tif (num < 0) {\n\t\t\tnum *= -1;\n\t\t}\n\n\t\tif (num == 0) {\n\t\t\tnum = 1;\n\t\t}\n\n\t\treturn (int) (Math.log10(num) + 1);\n\t}\n\n}\n\n\n```\n\n**Output**\n\n```jsx\n2\n3\n2\n```\n\n`6. Richest Customer Wealth`\n\n```jsx\npackage com.praveen.search.linear;\n\npublic class MaximumWealth {\n\n\tpublic static void main(String[] args) {\n\n\t\tSystem.out.println(maximumWealth(new int[][] { { 1, 2, 3 }, { 3, 2, 1 } }));\n\t\tSystem.out.println(maximumWealth(new int[][] { { 1, 6, 3 }, { 9, 8, 4 }, { 12, 1, 0 } }));\n\t\tSystem.out.println(maximumWealth(new int[][] { { 11, 32, 53 }, { 29, 38, 24 }, { 112, -1, 10 } }));\n\n\t}\n\n\tprivate static int maximumWealth(int[][] accounts) {\n\n\t\tint sum = 0;\n\t\tint max = Integer.MIN_VALUE;\n\n\t\tfor (int[] ints : accounts) {\n\t\t\tsum = 0;\n\t\t\tfor (int elements : ints) {\n\t\t\t\tsum += elements;\n\t\t\t}\n\n\t\t\tif (sum > max) {\n\t\t\t\tmax = sum;\n\t\t\t}\n\n\t\t}\n\n\t\treturn max;\n\n\t}\n\n}\n\n\n```\n\n**Output**\n\n```jsx\n6\n21\n121\n\n```\n "}}]);