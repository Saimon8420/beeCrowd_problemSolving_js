// Read an integer N(2 < N < 1000).Print the multiplication table of N.
// 1 x N = N      2 x N = 2N        ...       10 x N = 10N

// Input
// The input is an integer N(1 < N < 1000).

// Output
// Print the multiplication table of N., like the following example.

const readline = require("readline");
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("", (input) => {
    input = Number(input);
    if (input > 1 && input < 1000) {
        for (let i = 1; i <= 10; i++) {
            console.log(`${i} x ${input} = ${i * input}`)
        }
    }
    else {
        console.log("invalid input!");
    }
    rl.close();
});