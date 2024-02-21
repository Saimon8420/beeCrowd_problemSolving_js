// Read two integer values(A and B).After, the program should print the message "Sao Multiplos"(are multiples) or "Nao sao Multiplos"(aren’t multiples), corresponding to the read values.

// Input
// The input has two integer numbers.

// Output
// Print the relative message to the input as stated above.

const readline = require("readline");
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("", (inputs) => {
    inputs = inputs.split(" ");
    const a = parseInt(inputs[0]);
    const b = parseInt(inputs[1]);
    if ((b % a) === 0) {
        console.log("Sao Multiplos");
    }
    else {
        console.log("Nao sao Multiplos");
    }
    rl.close();
});