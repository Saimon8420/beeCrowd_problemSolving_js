// Read two integer values, in this case, the variables A and B.After this, calculate the sum between them and assign it to the variable SOMA.Write the value of this variable.

// Input
// The input file contains 2 integer numbers.

// Output
// Print the message "SOMA" with all the capital letters, with a blank space before and after the equal signal followed by the corresponding value to the sum of A and B.Like all the problems, don't forget to print the end of line, otherwise you will receive "Presentation Error"

const readline = require("readline");
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

rl.question("", (a) => {
    rl.question("", (b) => {
        const A = parseInt(a);
        const B = parseInt(b);
        const sum = A + B;
        console.log("SOMA " + "= " + sum);
        rl.close();
    })
})