// Day 7: Objects

// Tasks/Activities:

// Activity 1: Object Creation and Access

// Task 1: Create an object representing a book with properties like title, author, and year, and log the object to the console.
let book = {
  title: "Ramayan",
  author: "Valmiki",
  year: "200 B.C.E",
};
console.log(book); // op = { title: 'Ramayan', author: 'Valmiki', year: '200 B.C.E' }

// • Task 2: Access and log the title and author properties of the book object.
console.log(book.title); //op - Ramayan
console.log(book.author); // op - Valmiki

// Activity 2: Object Methods

// Task 3: Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method.

book = {
  title: "Ramayan",
  author: "Valmiki",
  year: "200 B.C.E",
  getTitleAndAuthor: function () {
    return `${this.title} by ${this.author}`;
  },
};

console.log(book.getTitleAndAuthor()); // op-  Ramayan by Valmiki

// • Task 4: Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object.

book = {
  title: "Ramayan",
  author: "Valmiki",
  year: "200 B.C.E",
  updateYear: function (newYear) {
    this.year = newYear;
  },
};

book.updateYear("150 B.C.E");
console.log(book);

/*   {
  title: 'Ramayan',
  author: 'Valmiki',
  year: '150 B.C.E',
  updateYear: [Function: updateYear]
}
  */

// Activity 3: Nested Objects

// Task 5: Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console.

const library = {
  name: "City Library",
  books: [
    {
      title: "Ramayan",
      author: "Valmiki",
      year: "200 B.C.E",
    },
    {
      title: "Mahabharata",
      author: "Vyasa",
      year: "300 B.C.E",
    },
  ],
};

console.log(library);

/*
 {
  name: 'City Library',
  books: [
    { title: 'Ramayan', author: 'Valmiki', year: '200 B.C.E' },
    { title: 'Mahabharata', author: 'Vyasa', year: '300 B.C.E' }
  ]
}
  
*/

// Task 6: Access and log the name of the library and the titles of all the books in the library.
// Access and log the name of the library
console.log("Library Name:", library.name);

// Access and log the titles of all the books in the library
console.log("Book Titles:");
library.books.forEach((book) => {
  console.log(book.title);
});

/*
Library Name: City Library
Book Titles:
Ramayan
Mahabharata

*/

// Activity 4: The this Keyword

// Task 7: Add a method to the book object that uses the this keyword to return a string with the book's title and year, and log the result of calling this method.

book = {
  title: "Ramayan",
  author: "Valmiki",
  year: "200 B.C.E",
  getTitleAndYear: function () {
    return `${this.title} (${this.year})`;
  },
};

// Log the result of calling the method
console.log(book.getTitleAndYear()); // 0p - Ramayan (200 B.C.E)

// Activity 5: Object Iteration

// • Task 8: Use a for...in loop to iterate over the properties of the book object and log each property and its value.

book = {
  title: "Ramayan",
  author: "Valmiki",
  year: "200 B.C.E",
  getTitleAndYear: function () {
    return `${this.title} (${this.year})`;
  },
};

// Use a for...in loop to iterate over the properties of the book object
for (let property in book) {
  console.log(`${property}: ${book[property]}`);
}

/* outputs-
title: Ramayan
author: Valmiki
year: 200 B.C.E
getTitleAndYear: function() {
    return `${this.title} (${this.year})`;
}

*/

// Task 9: Use object.keys and object.values methods to log all the keys and values of the book object.

book = {
  title: "Ramayan",
  author: "Valmiki",
  year: "200 B.C.E",
};

// Use Object.keys to get all the keys and log them
const keys = Object.keys(book);
console.log("Keys:", keys);

// Use Object.values to get all the values and log them
const values = Object.values(book);
console.log("Values:", values);

/*  outputs -

Keys: [ 'title', 'author', 'year' ]
Values: [ 'Ramayan', 'Valmiki', '200 B.C.E' ]

*/
