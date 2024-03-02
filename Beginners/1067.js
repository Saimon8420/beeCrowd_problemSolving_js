// Read an integer value X(1 <= X <= 1000).Then print the odd numbers from 1 to X, each one in a line, including X if is the case.

// Input
// The input will be an integer value.

// Output
// Print all odd values between 1 and X, including X if is the case.

const readline = require("readline");
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("", (inputs) => {
    inputs = Number(inputs);
    if (inputs >= 1 && inputs <= 1000) {
        for (let i = 1; i <= inputs; i++) {
            if (i % 2 !== 0) {
                console.log(i);
            }
        }
    }
    else {
        console.log("Invalid inputs, range is [1-1000]");
    }
    rl.close();
})