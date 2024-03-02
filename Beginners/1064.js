// Read 6 values that can be floating point numbers.After, print how many of them were positive.In the next line, print the average of all positive values typed, with one digit after the decimal point.

// Input
// The input consist in 6 numbers that can be integer or floating point values.At least one number will be positive.

// Output
// The first output value is the amount of positive numbers.The next line should show the average of the positive values ​typed.

const { stdin, stdout } = require("process");
const readline = require("readline");
let rl = readline.createInterface({
    input: stdin,
    output: stdout,
});

let count = 0;
let positiveCount = 0;
let total = 0;
function collectInputs() {
    rl.question("", (inputs) => {
        inputs = Number(inputs);
        if (inputs >= 0) {
            positiveCount++;
            total = total + inputs;
        }
        count++;
        if (count < 6) {
            collectInputs();
        }
        else {
            rl.close();
            if (positiveCount >= 1) {
                console.log(positiveCount + " valores positivos");
                console.log(parseFloat(total / positiveCount).toFixed(1));
            }
            else {
                console.log("Invalid Inputs");
            }
        };
    });
};

collectInputs();