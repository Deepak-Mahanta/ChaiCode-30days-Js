// Task-1

for ( let num = 0; num <=10; num++) {
    console.log(num);    
}

/* 
output -
0
1
2
3
4
5
6
7
8
9
10
*/


// Task-2
for (let i = 1; i <= 10; i++) {
    console.log(`5 * ${i} =`, 5 * i);

}
/* 
output -
5 * 1 = 5
5 * 2 = 10
5 * 3 = 15
5 * 4 = 20
5 * 5 = 25
5 * 6 = 30
5 * 7 = 35
5 * 8 = 40
5 * 9 = 45
5 * 10 = 50

*/

// Task - 3
let sum = 0;
let i = 1;

while (i <= 10) {
    sum += i;
    i++;
}

console.log("Sum of numbers from 1 to 10:", sum);  // op - Sum of numbers from 1 to 10: 55

// Task - 4
let number = 10;
while (number >= 1) {
    console.log(number);
    number--;
}

/* 
output - 
10
9
8
7
6
5
4
3
2
1

*/
// Task-5
let num = 1;

do {
  console.log(num);
  num++;
} while (num <= 5);
 /*   
  
1
2
3
4
5 
 */

// Task -6
function factorial(n) {
    if (n < 0) {
      return "Factorial is not defined for negative numbers.";
    }
  
    let result = 1;
    let i = n;
  
    do {
      result *= i;
      i--;
    } while (i > 0);
  
    return result;
  }
  
  // Example usage:
  let giveNumber = 5; // You can change this to any non-negative number
  console.log(`Factorial of ${giveNumber} is ${factorial(giveNumber)}`);

  // output - Factorial of 5 is 120

  // Task - 7
  // Define the number of rows for the pattern
const numRows = 5;

// Outer loop for rows
for (let i = 1; i <= numRows; i++) {
    let row = '';
    
    // Inner loop for printing asterisks
    for (let j = 1; j <= i; j++) {
        row += '*';
    }
    
    console.log(row);
}
/*             
output--
*
**
***
****
*****
*/

// Task - 8
const arr1 = [1,2,3,4,5,6,7,8,9,10]
for (let count = 1; count <= arr1.length; count++) {
   if (count === 5) {
    continue;
   }
   console.log(count);  // it skip 5 
  
}  
  





/* 
Day 4: Loops

Tasks/Activities:

Activity 1: For Loop

Task 1: Write a program to print numbers from 1 to 10 using a for loop. 
Task 2: Write a program to print the multiplication table of 5 using a for loop.

Activity 2: While Loop

Task 3: Write a program to calculate the sum of numbers from 1 to 10 using a while loop.
 Task 4: Write a program to print numbers from 10 to 1 using a while loop.

Activity 3: Do... While Loop

Task 5: Write a program to print numbers from 1 to 5 using a do...while loop. 
Task 6: Write a program to calculate the factorial of a number using a do...while loop.

Activity 4: Nested Loops

Task 7: Write a program to print a pattern using nested for loops:

*
**
***
****
*****

Activity 5: Loop Control Statements

Task 8: Write a program to print numbers from 1 to 10, but skip the number 5 using the continue statement.

Task 9: Write a program to print numbers from 1 to 10, but stop the loop when the number is 7 using the break, statement

*/