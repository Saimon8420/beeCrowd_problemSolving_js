// Read an integer value X and print the 6 consecutive odd numbers from X, a value per line, including X if it is the case.

// Input
// The input will be a positive integer value.

// Output
// The output will be a sequence of six odd numbers.

const { stdin, stdout } = require("process");
const readline = require("readline");
let rl = readline.createInterface({
    input: stdin,
    output: stdout,
});

rl.question("", (input) => {
    input = Number(input);
    let count = 6;
    if (input > 0) {
        for (let i = 1; i <= count; i++) {
            if (i === 1 && input % 2 !== 0) {
                input = input;
            }
            if (input % 2 === 0) {
                input = input + 1;
            }
            if (i > 1 && input % 2 !== 0) {
                input = input + 2;
            }
            console.log(input);
        }
        count++;
    }
    else {
        console.log("invalid Input");
    }
    rl.close();
});