// Activity 1: Arithmetic Operations

let num1 = 12;
let num2 = 10;
console.log(`Addition  of ${num1} & ${num2} is =`, num1 + num2);  //Task-1
console.log(`Subtraction  of ${num1} & ${num2} is =`, num1 - num2);  //Task-2
console.log(`Multiplication  of ${num1} & ${num2} is =`, num1 * num2);  //Task-3
console.log(`Division  of ${num1} & ${num2} is =`, num1 / num2);  //Task-4
console.log(`Remainder  of ${num1} & ${num2} is =`, num1 % num2);  //Task-5

/* -------------OUTPUT--------------

Addition  of 12 & 10 is = 22
Subtraction  of 12 & 10 is = 2
Multiplication  of 12 & 10 is = 120
Division  of 12 & 10 is = 1.2
Remainder  of 12 & 10 is = 2

*/

// Activity 2: Assignment Operators
//Task-6
let number = 20;
number += 5
console.log(number); //OUTPUT- 25

//Task-7
let myName = "Deepak";
myName -= 5
console.log(myName); //OUTPUT- NaN


// Activity 3: Comparison Operators
// Task-8
let score1 = 55;
let score2 = 30;

console.log(`Is ${score1} > ${score2} =`, score1 > score2);  //Is 55 > 30 = true
console.log(`Is ${score1} < ${score2} =`, score1 < score2); //Is 55 < 30 = false

// Task-9
console.log(`Is ${score1} >= ${score2} =`, score1 >= score2);  //Is 55 >= 30 = true
console.log(`Is ${score1} <= ${score2} =`, score1 <= score2);  //Is 55 <= 30 = false

// task-10
console.log(`Is ${score1} == ${score2} =`, score1 == score2);  //Is 55 == 30 = false
console.log(`Is ${score1} === ${score2} =`, score1 === score2);  //Is 55 === 30 = false


// Activity 4: Logical Operators
// Task-11
let age = 18;
let document = "Driving license";
if (age >= 18 && document === "Driving license") {
    console.log("Now you can Drive");               //OUTPUT = Now you can Drive
}

// Task-12
let condition1 = true;
let condition2 = false;

let result = condition1 || condition2; // At least one condition must be true for result to be true
console.log(result); // Logs true because condition1 is true

//Task-13
let condition = true;
let result1 = !condition; // Negates the condition
console.log(result1); // Logs false because condition is true


// Activity 5: Ternary Operator
// Task-14💡
let myNumber = -5;

let output = (myNumber >= 0) ? "Positive" : "Negative";

console.log(result); // Logs "Negative" because number is -5




/***************************************Questions**************************************** */

/* 
Day 2: Operators

Tasks/Activities:

Activity 1: Arithmetic Operations

Task 1: Write a program to add two numbers and log the result to the console.

Task 2: Write a program to subtract two numbers and log the result to the console.

Task 3: Write a program to multiply two numbers and log the result to the console.

Task 4: Write a program to divide two numbers and log the result to the console.

Task 5: Write a program to find the remainder when one number is divided by another and log the result to the console.

Activity 2: Assignment Operators

• Task 6: Use the += operator to add a number to a variable and log the result to the console.

Task 7: Use the -= operator to subtract a number from a variable and log the result to the console.

Activity 3: Comparison Operators

•Task 8: Write a program to compare two numbers using > and < and log the result to the console.

• Task 9: Write a program to compare two numbers using >= and <= and log the result to the console.

• Task 10: Write a program to compare two numbers using == and === and log the result to the console.

Activity 4: Logical Operators

• Task 11: Write a program that uses the && operator to combine two conditions and log the result to the console.

Task 12: Write a program that uses the || operator to combine two conditions and log the result to the console.

Task 13: Write a program that uses the I operator to negate a condition and log the result to the console.

Activity 5: Ternary Operator

Task 14: Write a program that uses the ternary operator to check if a number is positive or negative and log the result to the console.

Feature Request:

1. Arithmetic Operations Script: Write a script that performs basic arithmetic operations (addition, subtraction, multiplication, division, remainder) on two numbers and logs the results. 2. Comparison and Logical Operators Script: Create a script that compares two numbers using different comparison operators and combines conditions using logical operators, logging the

results.

3. Ternary Operator Script: Write a script that uses the ternary operator to determine if a number is positive or negative and logs the result.


*/