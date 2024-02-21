// Read 3 floating - point numbers.After, print the roots of bhaskara’s formula.If it's impossible to calculate the roots because a division by zero or a square root of a negative number, presents the message “Impossivel calcular”.

// Input
// Read 3 floating - point numbers(double) A, B and C.

// Output
// Print the result with 5 digits after the decimal point or the message if it is impossible to calculate.

const readline = require("readline");
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("", (inputs) => {
    inputs = inputs.split(" ");
    const A = parseFloat(inputs[0]);
    const B = parseFloat(inputs[1]);
    const C = parseFloat(inputs[2]);
    let pr1 = Math.pow(B, 2) - (4 * A * C);
    if (pr1 > 0 && A > 0) {
        pr1 = Math.sqrt(pr1);
        const r1 = parseFloat((-B + pr1) / (2 * A)).toFixed(5);
        const r2 = parseFloat((-B - pr1) / (2 * A)).toFixed(5);
        console.log("R1 = " + r1);
        console.log("R2 = " + r2);
    }
    else {
        console.log("Impossivel calcular");
    }
    rl.close();
});