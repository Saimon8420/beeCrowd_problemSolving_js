// Read an integer N.This N will be the number of integer numbers X that will be read.

// Print how many these numbers X are in the interval[10, 20] and how many values are out of this interval.


// Input
// The first line of input is an integer N(N < 10000), that indicates the total number of test cases.
// Each case is an integer number X(-107 < X < 107).



//  Output
// For each test case, print how many numbers are in and how many values are out of the interval.

const readline = require("readline");
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let count = 0;
let testCases = [];

const countNumbers = (testCases) => {
    let withinInterval = 0;
    let outsideInterval = 0;

    for (let i = 0; i < testCases.length; i++) {
        if (testCases[i] >= 10 && testCases[i] <= 20) {
            withinInterval++;
        } else {
            outsideInterval++;
        }
    }

    console.log(`${withinInterval} in`);
    console.log(`${outsideInterval} out`);

    rl.close();
};

const getInputs = () => {
    rl.question("", (input) => {
        count = parseInt(input);
        getNextInput();
    });
};

const getNextInput = () => {
    rl.question("", (input) => {
        input = parseInt(input);
        testCases.push(input);
        count--;

        if (count > 0) {
            getNextInput();
        } else {
            countNumbers(testCases);
        }
    });
};

getInputs();