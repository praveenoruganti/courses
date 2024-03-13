(this["webpackJsonppraveenoruganti-courses"]=this["webpackJsonppraveenoruganti-courses"]||[]).push([[68],{637:function(t,n,i){"use strict";i.r(n),n.default=' A Heap is a specialized tree-based data structure.\n\nTree is a non linear data structure that consists of nodes with a parent-child relationship.\n\nHeap must be complete or almost binary tree and child node must be less than parent node.\n\nLet\'s start coding for heap sort,\n\n```jsx\npackage com.praveen.sort;\n\npublic class HeapSort {\n\n\tpublic static void main(String[] args) {\n\t\tint[] num = { 90, 24, 46, 35, 32 };\n\t\theapSort(num);\n\t\t// After sorting\n\t\tfor (int i : num) {\n\t\t\tSystem.out.print(i + " ");\n\t\t}\n\t}\n\n\tprivate static void heapSort(int[] num) {\n\t\tint len = num.length;\n\t\tfor (int i = len / 2 - 1; i >= 0; i--) {\n\t\t\theapify(num, len, i);\n\t\t}\n\n\t\t// swap the elements and heapify again\n\t\tfor (int i = len - 1; i >= 0; i--) {\n\t\t\tint temp = num[0];\n\t\t\tnum[0] = num[i];\n\t\t\tnum[i] = temp;\n\t\t\theapify(num, i, 0);\n\t\t}\n\t}\n\n\tprivate static void heapify(int[] num, int len, int i) {\n\t\tint largest = i; // parent node index position\n\t\tint li = 2 * i + 1; // left child node index position\n\t\tint ri = 2 * i + 2; // right child node index position\n\t\tif (li < len && num[li] > num[largest]) {\n\t\t\tlargest = li;\n\t\t}\n\t\tif (ri < len && num[ri] > num[largest]) {\n\t\t\tlargest = ri;\n\t\t}\n\t\tif (largest != i) {\n\t\t\tint temp = num[i];\n\t\t\tnum[i] = num[largest];\n\t\t\tnum[largest] = temp;\n\t\t\theapify(num, len, largest);\n\t\t}\n\t}\n}\n\n```\n\n**Output**\n```jsx\n24 32 35 46 90\n``` '}}]);