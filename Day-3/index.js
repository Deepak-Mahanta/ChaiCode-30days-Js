// Day 3: Control Structures

// Tasks/Activities:

// Activity 1: If-Else Statements

// Task 1: Write a program to check if a number is positive, negative, or zero, and log the result to the console. 


// let number = 10;         //10 is a positive number!
// let number = 0;         //Zero!
let number = -5;          //-5 is a negative number!  
if (number > 0) {
    console.log(`${number} is a positive number!`);
} else if (number < 0) {
    console.log(`${number} is a negative number!`);
} else {
    console.log("Zero!");

}

// • Task 2: Write a program to check if a person is eligible to vote (age >= 18) and log the result to the console.

function voterAge(age) {
    if (age >= 18) {
        console.log("You can vote!");
    } else {
        console.log("Your are below 18 years! ");
    }
}
voterAge(10); //Your are below 18 years!
voterAge(19); // you can vote!


// Activity 2: Nested If-Else Statements

// Task 3: Write a program to find the largest of three numbers using nested if-else statements.

let num1 = 55;
let num2 = 34;
let num3 = 100;

if (num1 >= num2 & num1 >= num3) {
    console.log("num1 is largest number!");
} else if (num2 >= num1 && num2 >= num3) {
    console.log("num2 is largest number!");

} else {
    console.log("num3 is largest number!");         //num3 is largest number!

}

// Activity 3: Switch Case

// Task 4: Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.

function getDayName(dayNumber) {
    let dayName;

    switch (dayNumber) {
        case 1:
            dayName = "Sunday";
            break;
        case 2:
            dayName = "Monday";
            break;
        case 3:
            dayName = "Tuesday";
            break;
        case 4:
            dayName = "Wednesday";
            break;
        case 5:
            dayName = "Thursday";
            break;
        case 6:
            dayName = "Friday";
            break;
        case 7:
            dayName = "Saturday";
            break;
        default:
            dayName = "Invalid day number. Please enter a number between 1 and 7.";
    }

    console.log(dayName);
}

// Example usage:
getDayName(1);  // Output: Sunday
getDayName(4);  // Output: Wednesday
getDayName(7);  // Output: Saturday
getDayName(8);  // Output: Invalid day number. Please enter a number between 1 and 7.

// Task 5: Write a program that uses a switch case to assign a grade ('A', 'B', 'C', 'D', 'F) based on a score and log the grade to the console.

function getGrade(score) {
    let grade;

    switch (true) {
        case (score >= 90 && score <= 100):
            grade = 'A';
            break;
        case (score >= 80 && score < 90):
            grade = 'B';
            break;
        case (score >= 70 && score < 80):
            grade = 'C';
            break;
        case (score >= 60 && score < 70):
            grade = 'D';
            break;
        case (score >= 0 && score < 60):
            grade = 'F';
            break;
        default:
            grade = 'Invalid score. Please enter a score between 0 and 100.';
    }

    console.log("The grade is: " + grade);
}

// Example usage:
getGrade(95);  // Output: The grade is: A
getGrade(85);  // Output: The grade is: B
getGrade(75);  // Output: The grade is: C
getGrade(65);  // Output: The grade is: D
getGrade(55);  // Output: The grade is: F
getGrade(105); // Output: Invalid score. Please enter a score between 0 and 100.

// Activity 4: Conditional (Ternary) Operator

// • Task 6: Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.

function checkNumber(number) {
    let result = (number % 2 === 0) ? "Even" : "odd";
    console.log(number + " is " + result + ".");
}
checkNumber(7) //7 is odd
checkNumber(10) // 10 is even

// Activity 5: Combining Conditions

// • Task 7: Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.

function isLeapYear(year) {
    let result;

    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        result = year + " is a leap year.";
    } else {
        result = year + " is not a leap year.";
    }

    console.log(result);
}

// Example usage:
isLeapYear(2020); // Output: 2020 is a leap year.
isLeapYear(1900); // Output: 1900 is not a leap year.
isLeapYear(2000); // Output: 2000 is a leap year.
isLeapYear(2021); // Output: 2021 is not a leap year.
