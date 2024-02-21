// Read two integer values.After this, calculate the product between them and store the result in a variable named PROD.Print the result like the example below.Do not forget to print the end of line after the result, otherwise you will receive “Presentation Error”.

// Input
// The input file contains 2 integer numbers.

// Output
// Print the message "PROD" and PROD according to the following example, with a blank space before and after the equal signal.

const readline = require("readline");
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

rl.question("", (a) => {
    rl.question("", (b) => {
        const A = parseInt(a);
        const B = parseInt(b);
        const sum = A * B;
        console.log("PROD " + "= " + sum);
        rl.close();
    })
})