// Read an integer N.Print all numbers between 1 and 10000, which divided by N will give the rest = 2.

// Input
// The input is an integer N(N < 10000)

// Output
// Print all numbers between 1 and 10000, which divided by n will give the rest = 2, one per line.

const readline = require("readline");
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("", (input) => {
    input = Number(input);
    if (input < 10000) {
        for (let i = 1; i < 10000; i++) {
            if (i % input === 2) {
                console.log(i);
            }
        }
    }
    rl.close();
});