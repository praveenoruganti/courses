(this["webpackJsonppraveenoruganti-courses"]=this["webpackJsonppraveenoruganti-courses"]||[]).push([[251],{820:function(e,n,t){"use strict";t.r(n),n.default=" Stored Procedures are created to perform one or more DML operations on Database. It is nothing but the group of SQL statements that accepts some input in the form of parameters and performs some task and may or may not returns a value.\n\nStored procedures accept input parameters so that a single procedure can be used over the network by several clients using different input data. And when the procedure is modified, all clients automatically get the new version. Stored procedures reduce network traffic and improve performance. Stored procedures can be used to help ensure the integrity of the database. e.g. sp_helpdb, sp_renamedb, sp_depends etc.\n\nFor example, Imagine a table named with emp_table stored in Database. We are Writing a Procedure to update a Salary of Employee with 1000.\n\n```jsx\nCREATE or REPLACE PROCEDURE INC_SAL(eno IN NUMBER, up_sal OUT NUMBER)\nIS\nBEGIN\nUPDATE emp_table SET salary = salary+1000 WHERE emp_no = eno;\nCOMMIT;\nSELECT sal INTO up_sal FROM emp_table WHERE emp_no = eno;\nEND;\n```\n\n**What are the advantages a stored procedure?**\n\n1. Stored procedure can reduced network traffic and latency, boosting application performance.\n2. Stored procedure execution plans can be reused, staying cached in SQL Server's memory, reducing server overhead.\n3. Stored procedures help promote code reuse.\n4. Stored procedures can encapsulate logic. You can change stored procedure code without affecting clients.\n5. Stored procedures provide better security to your data.\n\n**Difference between user defined functions(UDF) and stored procedures(SO) in PL/SQL?**\n\n- A procedure can have both input and output parameters, but a function can only have input parameters.\n- Inside a procedure we can use DML (INSERT/UPDATE/DELETE) statements. But inside a function we can't use DML statements.\n- We can't utilize a Stored Procedure in a Select statement. But we can use a function in a Select statement.\n- We can use a Try-Catch Block in a Stored Procedure but inside a function we can't use a Try-Catch block.\n- We can use transaction management in a procedure but we can't in a function.\n- We can't join a Stored Procedure but we can join functions.\n- Stored Procedures cannot be used in the SQL statements anywhere in the WHERE/HAVING/SELECT section. But we can use a function anywhere.\n- A procedure can return 0 or n values (max 1024). But a function can return only 1 value that is mandatory.\n- A procedure can't be called from a function but we can call a function from a procedure.\n\n "}}]);