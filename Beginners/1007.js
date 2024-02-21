// Read four integer values named A, B, C and D.Calculate and print the difference of product A and B by the product of C and D(A * B - C * D).

// Input
// The input file contains 4 integer values.

// Output
// Print DIFERENCA(DIFFERENCE in Portuguese) with all the capital letters, according to the following example, with a blank space before and after the equal signal.

const readline = require("readline");
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("", (a) => {
    rl.question("", (b) => {
        rl.question("", (c) => {
            rl.question("", (d) => {
                const A = parseInt(a);
                const B = parseInt(b);
                const C = parseInt(c);
                const D = parseInt(d);
                const answer = ((A * B) - (C * D));
                console.log("DIFERENCA " + "= " + answer);
                rl.close();
            });
        });
    });
});