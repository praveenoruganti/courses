(this["webpackJsonppraveenoruganti-courses"]=this["webpackJsonppraveenoruganti-courses"]||[]).push([[56],{625:function(t,e,n){"use strict";n.r(e),e.default=' Queue is a linear data structure somewhat similar to Stack. Unlike Stack, a Queue is open at both ends. One end is always used to insert data(enqueue) and the other end is used to remove data(dequeue).\n\n**Properties of Queue**\n\nIt follows FIFO(First In First Out) method.\n\nFor example, Implementation of billing Counter.\n\n**Why do we use queues?**\n\nAs queues follows FIFO method, they are used when we need to work on data-items in exact sequence of their arrival. Every operating system maintains queues of various processes. Priority queues and breadth first traversal of graphs are some examples of queues.\n\n\n**Common Operations of Queue**\n\n- **Enqueue**: Add an element to the end of the queue; O(1)\n- **Dequeue**: Remove an element from the front of the queue; O(1)\n- **IsEmpty**: Check if the queue is empty\n- **IsFull**: Check if the queue is full\n- **Peek**: Get the value of the front of the queue without removing it; O(1)\n- **Searching for an element in the Queue**: O(n)\n\n![screenshot of the app](https://praveenoruganti.github.io/courses/images/dsa/queue.jpg)\n\nA Queue is typically implemented with a doubly linked list.\n\n**Linear Queue (Array Implementation)** \n\n```jsx\npackage com.praveen.queue.linearqueue.array;\n\npublic class QueueByArray {\n\n\tint[] arr;\n\tint topOfQueue;\n\tint beginningOfQueue;\n\n\tpublic QueueByArray(int size) {\n\t\tthis.arr = new int[size];\n\t\tthis.topOfQueue = -1;\n\t\tthis.beginningOfQueue = -1;\n\t\tSystem.out.println("Successfully created an empty queue of size: " + size);\n\t}\n\n\tpublic void enQueue(int value) {\n\t\tif (isQueueFull()) {\n\t\t\tSystem.out.println("Queue overflow error!!");\n\t\t} else if (isQueueEmpty()) { // If the queue is empty then we need to initialize beginning index\n\t\t\tbeginningOfQueue = 0;\n\t\t\ttopOfQueue++;\n\t\t\tarr[topOfQueue] = value;\n\t\t\tSystem.out.println("Successfully inserted " + value + " in the queue");\n\t\t} else { // if the queue already has some elements in it then no need to initialize\n\t\t\t\t\t// beginning index\n\t\t\ttopOfQueue++;\n\t\t\tarr[topOfQueue] = value;\n\t\t\tSystem.out.println("Successfully inserted " + value + " in the queue");\n\t\t}\n\t\tprintQueue();\n\t}\n\n\tpublic void printQueue() {\n\t\tif (!isQueueEmpty()) {\n\t\t\tSystem.out.println("Queue now ...");\n\t\t\tfor (int i = beginningOfQueue; i <= topOfQueue; i++) {\n\t\t\t\tSystem.out.println(arr[i] + "   ");\n\t\t\t}\n\t\t\tSystem.out.println();\n\t\t} else {\n\t\t\tSystem.out.println("Queue is empty !");\n\t\t}\n\t}\n\n\tpublic void deQueue() {\n\t\tif (isQueueEmpty()) {\n\t\t\tSystem.out.println("Queue underflow error!!");\n\t\t} else {\n\t\t\tSystem.out.println("Dequeing value from Queue...");\n\t\t\tSystem.out.println("Dequeued: " + arr[beginningOfQueue] + " from queue");\n\t\t\tbeginningOfQueue++;\n\t\t\tif (beginningOfQueue > topOfQueue) { // If last element in the Queue is Dequeued\n\t\t\t\tbeginningOfQueue = topOfQueue = -1;\n\t\t\t}\n\t\t}\n\t\tprintQueue();\n\t\tSystem.out.println();\n\t}\n\n\tpublic boolean isQueueEmpty() {\n\t\tif ((beginningOfQueue == -1) || (beginningOfQueue == arr.length))\n\t\t\treturn true;\n\t\telse\n\t\t\treturn false;\n\t}\n\n\tpublic boolean isQueueFull() {\n\t\tif (topOfQueue == arr.length - 1) {\n\t\t\treturn true;\n\t\t} else {\n\t\t\treturn false;\n\t\t}\n\n\t}\n\n\tpublic void peekOperation() {\n\t\tif (!isQueueEmpty()) {\n\t\t\tSystem.out.println(arr[beginningOfQueue]);\n\t\t} else {\n\t\t\tSystem.out.println("The queue is empty!!");\n\t\t}\n\t}\n\n\tpublic void deleteQueue() {\n\t\tarr = null;\n\t\tSystem.out.println("Queue is successfully deleted !");\n\t}\n\n}\n\n\n```\n\n**Drawbacks**\n\n- **Memory Wastage** : The space of the array which is used to store queue elements can never be reused to store the elements of that queue because the elements can only be inserted at rear and elements can be deleted from front, so after the deletion(dequeue) all the space before first can never be filled.\n- **Array Size** : There might be situations in which we may need to extend the queue to insert more elements if we use an array to implement queue, it will be almost impossible to extend the array size, therefore deciding the correct array size is always a problem.  \n\n**What is Circular Queue?**\n\nDequeue operation causes blanks cells in Linear Queue(Array Implementation) so in order to avoid this, we need to go with Circular Queue.\n\nCircular Queue is also a linear data structure which follows the principal of FIFO but instead of ending the queue at last position, it again starts from the first position after the last, hence making the queue behave like a circular data structure.\n\nFront and Rear move circularly i.e.. Rear = (Rear+1) % size.\n\n\n**Circular Queue(Array Implementation)** \n\n```jsx\npackage com.praveen.queue.circularqueue.array;\n\npublic class CircularQueueByArray {\n\n\tint[] arr;\n\tint topOfQueue;\n\tint size;\n\tint start;\n\n\tpublic CircularQueueByArray(int size) {\n\t\tthis.arr = new int[size];\n\t\tthis.size = size;\n\t\tthis.topOfQueue = -1;\n\t\tstart = -1;\n\t\tSystem.out.println("Successfully created an empty queue of size: " + size);\n\t}\n\n\tpublic void enQueue(int value) {\n\t\tif (arr == null) {\n\t\t\tSystem.out.println("Array is not yet created. Please create one first.");\n\t\t} else if (isQueueFull()) {\n\t\t\tSystem.out.println("\nQueue overflow error!!");\n\t\t} else {\n\t\t\tinitializeStartOfArray();\n\t\t\tif (topOfQueue + 1 == size) { // if top is already at last cell of array, then reset it to first cell\n\t\t\t\ttopOfQueue = 0;\n\t\t\t} else {\n\t\t\t\ttopOfQueue++;\n\t\t\t}\n\t\t\tarr[topOfQueue] = value;\n\t\t\tSystem.out.println("\nSuccessfully inserted " + value + " in the queue");\n\t\t}\n\t}\n\n\tpublic void initializeStartOfArray() {\n\t\tif (start == -1) {\n\t\t\tstart = 0;\n\t\t}\n\t}\n\n\tpublic void deQueue() {\n\t\tif (isQueueEmpty()) {\n\t\t\tSystem.out.println("Queue underflow error!!");\n\t\t} else {\n\t\t\tSystem.out.println("\n---------------------------------------------");\n\t\t\tSystem.out.println("Before Dequeue..");\n\t\t\tprintArray();\n\t\t\tSystem.out.println("\nDequeing value from Queue...");\n\t\t\tSystem.out.println("Dequeued: " + arr[start] + " from queue");\n\t\t\tarr[start] = 0; // initialize the unused cell to 0\n\t\t\tif (start == topOfQueue) { // if there is only 1 element in Queue\n\t\t\t\tstart = topOfQueue = -1;\n\t\t\t} else if (start + 1 == size) { // if start has reached end of array, then start again from 0\n\t\t\t\tstart = 0;\n\t\t\t} else {\n\t\t\t\tstart++;\n\t\t\t}\n\t\t}\n\t\tSystem.out.println("After Dequeue..");\n\t\tprintArray();\n\t\tSystem.out.println("---------------------------------------------");\n\t}\n\n\tpublic boolean isQueueEmpty() {\n\t\tif (topOfQueue == -1)\n\t\t\treturn true;\n\t\telse\n\t\t\treturn false;\n\t}\n\n\tpublic boolean isQueueFull() {\n\t\tif (topOfQueue + 1 == start) { // If we have completed a circle, then we can say that Queue is full\n\t\t\treturn true;\n\t\t} else if ((start == 0) && (topOfQueue + 1 == size)) { // Trivial case of Queue being full\n\t\t\treturn true;\n\t\t} else {\n\t\t\treturn false;\n\t\t}\n\t}\n\n\tpublic void peekOperation() {\n\t\t// if stack is not empty, return the value on top of stack\n\t\tif (!isQueueEmpty()) {\n\t\t\tSystem.out.println("\nPeeking value from queue...");\n\t\t\tSystem.out.println(arr[start]);\n\t\t} else {\n\t\t\tSystem.out.println("The queue is empty!!");\n\t\t}\n\t}\n\n\tpublic void deleteStack() {\n\t\tSystem.out.println("\n\nDeleting the entire Queue...");\n\t\tarr = null;\n\t\tSystem.out.println("Queue is successfully deleted !");\n\t}\n\n\t// Print entire array\n\tpublic void printArray() {\n\t\tSystem.out.println("Array now...");\n\t\tfor (int i = 0; i < size; i++) {\n\t\t\tSystem.out.print(arr[i] + "  ");\n\t\t}\n\t\tSystem.out.println("\nStart = " + start);\n\t\tSystem.out.println("End = " + topOfQueue);\n\t}\n\n}\n\n```\n\n**Implementation of Queue using List**\n\n```jsx\npackage com.praveen.queue.list;\n\nimport com.praveen.linkedlist.SingleLinkedList;\n\npublic class QueueByLinkedList {\n\n\tSingleLinkedList list;\n\n\t// constructor\n\tpublic QueueByLinkedList() {\n\t\tlist = new SingleLinkedList();\n\t}\n\n\tpublic void enQueue(int value) {\n\t\tif (list.getHead() == null) {\n\t\t\tlist.createSingleLinkedList(value);\n\t\t} else {\n\t\t\t// push a value on last of queue, update list tail too\n\t\t\tlist.insertInLinkedList(value, list.getSize());\n\t\t}\n\t}\n\n\tpublic int deQueue() {\n\t\tint value = -1;\n\t\tif (isQueueEmpty()) {\n\t\t\tSystem.out.println("Queue underflow error!!");\n\t\t} else {\n\t\t\tvalue = list.getHead().getValue();\n\t\t\tlist.deletionOfNode(0);\n\t\t}\n\t\treturn value;\n\t}\n\n\tpublic int peek() {\n\t\tif (!isQueueEmpty())\n\t\t\treturn list.getHead().getValue();\n\t\telse {\n\t\t\tSystem.out.println("The queue is empty!!");\n\t\t\treturn -1;\n\t\t}\n\t}\n\n\tpublic boolean isQueueEmpty() {\n\t\tif (list.getHead() == null)\n\t\t\treturn true;\n\t\telse\n\t\t\treturn false;\n\t}\n\n\tpublic void deleteStack() {\n\t\tlist.setHead(null);\n\t}\n\n}\n\n```\n\n**When to Use/Avoid Queue**\n\n**When to Use**\n- Helps to manage the data in a particular way(FIFO)\n- Not easily corrupted(No one can insert the data in middle)\n\n**When to Avoid**\n- Random Access not possible(If we have done some mistake it is costly to rectify)\n\n\n**Applications of Queue**\n- CPU scheduling, Disk Scheduling\n- When data is transferred asynchronously between two processes.The queue is used for synchronization. For example: IO Buffers, pipes, file IO, etc.\n- Handling of interrupts in real-time systems.\n- Call Center phone systems use Queues to hold people calling them in order.\n\n '}}]);