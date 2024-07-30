// Day 6: Arrays

// Tasks/Activities:

// Activity 1: Array Creation and Access

// Task 1: Create an array of numbers from 1 to 5 and log the array to the console.

const arr1 = [1, 2, 3, 4, 5];
console.log(arr1); //oputputs - [ 1, 2, 3, 4, 5 ]

// Task 2: Access the first and last elements of the array and log them to the console.
const firstElement = arr1[0];
const lastElement = arr1[arr1.length - 1];
console.log("First Element:", firstElement); // First Element: 1
console.log("Last Element:", lastElement); // Last Element: 5

// Activity 2: Array Methods (Basic)

// Task 3: Use the push method to add a new number to the end of the array and log the updated array.

const array2 = [1, 2, 3, 4, 5];
array2.push(12);
console.log("New array is =", array2); // New array is = [ 1, 2, 3, 4, 5, 12 ]

// Task 4: Use the pop method to remove the last element from the array and log the updated array.
array2.pop();
console.log("After removing last element new array is =", array2);

//output - After removing last element new array is = [ 1, 2, 3, 4, 5 ]

// Task 5: Use the shift method to remove the first element from the array and log the updated array

array2.shift();
console.log("First element removed =", array2);
// First element removed = [ 2, 3, 4, 5 ]

// Task 6: Use the unshift method to add a new number to the beginning of the array and log the updated array.
array2.unshift(40);
console.log("Added first element:", array2);

// output = Added first element: [ 40, 2, 3, 4, 5 ]

// Activity 3: Array Methods (Intermediate)

// Task 7: Use the map method to create a new array where each number is doubled and log the new array.

const myArray = [1, 2, 3, 4];
const doubleArray = myArray.map((item) => {
  return item * 2;
});
console.log("Doubled Array:", doubleArray); // output = console.log('Doubled Array:', doubledArray);

// Task 8: Use the filter method to create a new array with only even numbers and log the new array.

const myArray1 = [1, 2, 3, 4, 5, 6];
let evenNumber = myArray1.filter((e) => {
  return e % 2 === 0;
});
console.log("Even Numbers : ", evenNumber); // Even Numbers :  [ 2, 4, 6 ]

// Task 9: Use the reduce method to calculate the sum of all numbers in the array and log the result.

const arr3 = [1, 2, 3, 4, 5];

// Calculate the sum of all numbers in the array
const sum = arr3.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);

// Log the result to the console
console.log("Sum of All Numbers:", sum); // Sum of All Numbers: 15

// Activity 4: Array Iteration

// • Task 10: Use a for loop to iterate over the array and log each element to the console.
const arr4 = [1, 2, 3, 4, 5];
for (let index = 0; index < arr4.length; index++) {
  console.log(index);
}
/*outputs:  
0
1
2
3
4
*/

// • Task 11: Use the forEach method to iterate over the array and log each element to the console.
const arr5 = [1, 2, 3, 4, 5];

// Use the forEach method to iterate over the array and log each element
arr5.forEach((element) => {
  console.log("Element:", element);
});

/* 
Element: 1
Element: 2
Element: 3
Element: 4
Element: 5

*/

// Activity 5: Multi-dimensional Arrays

// • Task 12: Create a two-dimensional array (matrix) and log the entire array to the console.

// Create a two-dimensional array (matrix)
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// Log the entire array to the console
console.log("Matrix:", matrix);

// output - Matrix: [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ]

// • Task 13: Access and log a specific element from the two-dimensional array.
//the element at the second row and third column
const specificElement = matrix[1][2]; // This accesses the element '6'
console.log("Specific Element:", specificElement);

// output - Specific Element: 6
