// Read two integer values X and Y.Print the sum of all odd values between them.

//     Input
// The input file contain two integer values.

//     Output
// The program must print an integer number.This number is the sum off all odd values between both input values that must fit in an integer number.

const readline = require("readline");
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("", (x) => {
    x = Number(x);
    rl.question("", (y) => {
        y = Number(y);
        let sum = 0;
        if (y > 0) {
            for (let i = y; i < x; i++) {
                if (i % 2 !== 0) {
                    sum = sum + i;
                }
            }
        }
        else {
            for (let i = y + 1; i < x; i++) {
                if (i % 2 !== 0) {
                    sum = sum + i;
                }
            }
        }
        console.log(sum);
        rl.close();
    });
});

