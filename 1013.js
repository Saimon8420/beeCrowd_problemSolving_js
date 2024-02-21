// Make a program that reads 3 integer values and present the greatest one followed by the message "eh o maior".Use the following formula:

// Input
// The input file contains 3 integer values.

// Output
// Print the greatest of these three values followed by a space and the message “eh o maior”.

const { stdin, stdout } = require("process");
const readline = require("readline");
let rl = readline.createInterface({
    input: stdin,
    output: stdout,
})

rl.question("", (num) => {
    const ar = num.split(" ");
    const a = parseInt(ar[0]);
    const b = parseInt(ar[1]);
    const c = parseInt(ar[2]);
    if (a > b && a > c) {
        console.log(a + " eh o maior");
    }
    if (b > a && b > c) {
        console.log(b + " eh o maior");
    }
    if (c > a && c > b) {
        console.log(c + " eh o maior");
    }

    rl.close();
});