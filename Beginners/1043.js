// Read three point floating values(A, B and C) and verify if is possible to make a triangle with them.If it is possible, calculate the perimeter of the triangle and print the message:

// Perimetro = XX.X

// If it is not possible, calculate the area of the trapezium which basis A and B and C as height, and print the message:

// Area = XX.X
// Input
// The input file has tree floating point numbers.

// Output
// Print the result with one digit after the decimal point.

const { stdin, stdout } = require("process");
const readline = require("readline");
let rl = readline.createInterface({
    input: stdin,
    output: stdout,
});

rl.question("", (inputs) => {
    inputs = inputs.split(" ");
    const A = parseFloat(inputs[0]);
    const B = parseFloat(inputs[1]);
    const C = parseFloat(inputs[2]);

    if ((A + B) > C && (A + C) > B && (B + C) > A) {
        const perimeter = parseFloat(A + B + C).toFixed(1);
        console.log("Perimetro = " + perimeter);
    }
    else {
        const trapezium = parseFloat((1 / 2) * C * (A + B)).toFixed(1);
        console.log("Area = " + trapezium);
    }
    rl.close();
});