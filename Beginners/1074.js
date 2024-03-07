// Read an integer value N.After, read these N values and print a message for each value saying if this value is odd, even, positive or negative.In case of zero(0), although the correct description would be "EVEN NULL", because by definition zero is even, your program must print only "NULL", without quotes.

// Input
// The first line of input is an integer N(N < 10000), that indicates the total number of test cases.Each case is a integer number X(-107 < X < 107)..

// Output
// For each test case, print a corresponding message, according to the below example.All messages must be printed in uppercase letters and always will have one space between two words in the same line.

const { stdin, stdout } = require("process");
const readline = require("readline");
let rl = readline.createInterface({
    input: stdin,
    output: stdout,
});
let count = 0;
let totalInputs = [];
rl.question("", (inputs) => {
    inputs = Number(inputs);
    if (inputs < 10000) {
        count = inputs;
        getInputs();
    }
    else {
        console.log("Invalid input choice!");
    }
})

function getInputs() {
    rl.question("", (inputs) => {
        inputs = Number(inputs);
        if (inputs > -10000000 && inputs < 10000000) {
            totalInputs.push(inputs);
            count--;
            if (count > 0) {
                getInputs();
            }
            else {
                rl.close();
                checkInputs(totalInputs);
            }
        }
        else {
            console.log("invalid choice!");
        }
    });
};

function checkInputs(totalInputs) {
    totalInputs.map(each => {
        if (each !== 0 && (each % 2 === 0 || each % 2 === -0)) {
            if (each % 2 === 0 && each > 0) {
                console.log("EVEN POSITIVE")
            }
            else {
                console.log("EVEN NEGATIVE")
            }
        }
        if (each !== 0 && (each % 2 !== 0 || each % 2 !== -0)) {
            if (each % 2 !== 0 && each > 0) {
                console.log("ODD POSITIVE")
            }
            else {
                console.log("ODD NEGATIVE")
            }
        }
        if (each === 0) {
            console.log("NULL");
        }
    });
};