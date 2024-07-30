// Day 5: Functions

// Tasks/Activities:

// Activity 1: Function Declaration

// • Task 1: Write a function to check if a number is even or odd and log the result to the console.

function checkNumber(num) {
  if (num % 2 === 0) {
    console.log(`${num} is an even number!`);
  } else {
    console.log(`${num} is an odd number!`);
  }
}
checkNumber(4); //4 is an even number!
checkNumber(5); //  5 is an odd number!


// • Task 2: Write a function to calculate the square of a number and return the result.

 function square(num) {
    return num * num
    
 }
   const result = square(4);
   console.log("Result =", result);   //Result = 16

// Activity 2: Function Expression

// • Task 3: Write a function expression to find the maximum of two numbers and log the result to the console.

function maxNumber(num1,num2) {
   return  num1 > num2 ? `${num1} is greater` : `${num2} is greater`
}
const maximum = maxNumber(213,55)
console.log(maximum);           // output = 213 is greater

// • Task 4: Write a function expression to concatenate two strings and return the result.

const concatenateStrings = function(str1, str2) {
    return str1 + str2;
};

// Example usage:
const result1 = concatenateStrings('Hello, ', 'world!');
console.log(result1); // Outputs: "Hello, world!"


// Activity 3: Arrow Functions

// • Task 5: Write an arrow function to calculate the sum of two numbers and return the result.

const sumOfTwoNumber = () => {
    let a = 10;

    let b = 30;
    return a + b
}
console.log(sumOfTwoNumber()); // uotput - 40

// • Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value.
const containsCharacter = (str, char) => str.includes(char);

// Example usage:
const result2 = containsCharacter('Deepak', 'k');
console.log(result2); // Outputs: true

const result3 = containsCharacter('Deepak', 'x');
console.log(result3); // Outputs: false


// Activity 4: Function Parameters and Default Values

// • Task 7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter. 💡💡

function multiply(a, b = 2) {
    return a * b;
}
const result4 = multiply(5, 3);
console.log(result4); // Outputs: 15 ( b=2 override by new value 3)

const result5 = multiply(7);
console.log(result5); // Outputs: 14 (since the default value of b is 2, it autonedically multiply with 7)

// Task 8: Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.
 
function details(name, age=30) {
    return `hello ${name} you're now ${age}`
}
const greeting = details("Deepak", 21);  //hello Deepak you're now 21
console.log(greeting);
const greeting1 = details("Deepak");  //hello Deepak you're now 30 (you see here default age value = 30)
console.log(greeting1);


// Activity 5: Higher-Order Functions

// • Task 9: Write a higher-order function that takes a function and a number, and calls the function that many times.

function repeatFunction(fn, times) {
    for (let i = 0; i < times; i++) {
        fn();
    }
}

// Example usage:
const sayHello = () => console.log('Hello!');

repeatFunction(sayHello, 3);
// Outputs:
// Hello!
// Hello!
// Hello!


// • Task 10: Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.

function composeFunctions(fn1, fn2, value) {
    return fn2(fn1(value));
}

// Example usage:
const addOne = x => x + 1;
const square1 = x => x * x;

const result7 = composeFunctions(addOne, square1, 2);
console.log(result7); // Outputs: 9 (first addOne(2) = 3, then square(3) = 9)
 
// 💡💡💡in JavaScript, if an arrow function has exactly one parameter, you can omit the parentheses around the parameter.
