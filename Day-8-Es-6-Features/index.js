// Day 8: ES6+ Features

// Tasks/Activities:

// Activity 1: Template Literals

// Task 1: Use template literals to create a string that includes variables for a person's name and age, and log the string to the console.
let name = "Akash";
let age = 20;
let person = `Hi I am ${name} and iam ${age} years old.`;
console.log(person); // OP - Hi I am Akash and iam 20 years old.

// Task 2: Create a multi-line string using template literals and log it to the console.

let multiLine = `
My friends name are -
Deepak Kumar 
Amit Kumar
Krishna Bhuyan
Debabrat Swain
`;
console.log(multiLine);
/*
My friends name are -
Deepak Kumar 
Amit Kumar
Krishna Bhuyan
Debabrat Swain 
*/

// Activity 2: Destructuring

// Task 3: Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.

let arr = [10, 20, 30, 40];
let [firstArray, secondArray] = arr;
console.log(`The first element is - ${firstArray}`);
console.log(`The second element is - ${secondArray}`);

// OutPuts -
// The first element is - 10
// The second element is - 20

// Task 4: Use object destructuring to extract the title and author from a book object and log them to the console.
let book = {
    titel : "Ramayan",
    author : "Valmiki",
    year : 200
}
let { titelName,authorName} = book
console.log(`Title: ${titelName}`);
console.log(`Author: ${authorName}`);

// Activity 3: Spread and Rest Operators

// Task 5: Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.

// • Task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.

// Activity 4: Default Parameters

// Task 7: Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second parameter.

// Activity 5: Enhanced Object Literals

// Article

// Task 8: Use enhanced object literals to create an object with methods and properties, and log the object to the console.

// Day 9: D

// Task 9: Create an object with computed property names based on variables and log the object to the console.

// Article
