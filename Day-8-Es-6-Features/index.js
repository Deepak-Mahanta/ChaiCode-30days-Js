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
  titel: "Ramayan",
  author: "Valmiki",
  year: 200,
};
let { titel, author } = book;
console.log(`Title: ${titel}`);
console.log(`Author: ${author}`);

/* 

Title: Ramayan
Author: Valmiki

💡you can like this if you want to change value name--- let { title: bookTitle, author: bookAuthor } = book;

*/

// Activity 3: Spread and Rest Operators

// Task 5: Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.
let arr1 = ["a", "b", "c", "d"];
let newArray = [...arr1, 1, 2, 3];
console.log(newArray);

/* 
[
  'a', 'b', 'c', 'd',
  1,   2,   3
]
  */

// • Task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.

// Define a function that uses the rest operator to accept any number of arguments
function sum(...numbers) {
  // Use the reduce method to sum all the numbers
  return numbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
}

// Example usage of the function
let result = sum(1, 2, 3, 4, 5);
console.log(result); // Output: 15

// Activity 4: Default Parameters

// Task 7: Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second parameter.

let myFunction = function (num1, num2 = 1) {
  return console.log(`First number ${num1} Second number ${num2}`);
};
myFunction(2);
myFunction(2, 5);
/*  
First number 2 Second number 1
First number 2 Second number 5
*/

// Activity 5: Enhanced Object Literals

// Article

// Task 8: Use enhanced object literals to create an object with methods and properties, and log the object to the console.

// Define variables for properties
let name1 = "Alice";
let age1 = 28;

// Use enhanced object literals to create an object
let person1 = {
  name1, // Shorthand for name: name
  age1, // Shorthand for age: age

  // Method using shorthand syntax
  greet() {
    console.log(
      `Hello, my name is ${this.name1} and I am ${this.age1} years old.`
    );
  },

  // Method using regular function syntax
  celebrateBirthday: function () {
    this.age1 += 1;
    console.log(`Happy Birthday! I am now ${this.age1} years old.`);
  },
};

// Log the object to the console
console.log(person1);

// Call the methods
person1.greet();
person1.celebrateBirthday();

/*
{
  name1: 'Alice',
  age1: 28,
  greet: [Function: greet],
  celebrateBirthday: [Function: celebrateBirthday]
}
Hello, my name is Alice and I am 28 years old.
Happy Birthday! I am now 29 years old.


*/

// Task 9: Create an object with computed property names based on variables and log the object to the console.

// Define variables for property names
let propName1 = "firstName";
let propName2 = "lastName";
let propName3 = "age";

// Create an object with computed property names
let person = {
  [propName1]: "John",
  [propName2]: "Doe",
  [propName3]: 30,
};

// Log the object to the console
console.log(person);

// { firstName: 'John', lastName: 'Doe', age: 30 }
