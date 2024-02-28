// Write a program that prints all even numbers between 1 and 100, including them if it is the case.

// Input
// In this extremely simple problem there is no input.

// Output
// Print all even numbers between 1 and 100, including them, one by row.

const number = 100;
for (let i = 1; i <= number; i++) {
    if (i % 2 === 0) {
        console.log(i);
    };
};