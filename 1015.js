// Read the four values corresponding to the x and y axes of two points in the plane, p1(x1, y1) and p2(x2, y2) and calculate the distance between them, showing four decimal places after the comma, according to the formula:

// Distance
// Input
// The input file contains two lines of data.The first one contains two double values: x1 y1 and the second one also contains two double values with one digit after the decimal point: x2 y2.

// Output
// Calculate and print the distance value using the provided formula, with 4 digits after the decimal point.

const { stdin, stdout } = require("process");
const readline = require("readline");
let rl = readline.createInterface({
    input: stdin,
    output: stdout,
});

rl.question("", (fistValue) => {
    rl.question("", (secondValue) => {
        const value1 = fistValue.split(" ");
        const x1 = parseFloat(parseFloat(value1[0]).toFixed(1));
        const y1 = parseFloat(parseFloat(value1[1]).toFixed(1));
        const value2 = secondValue.split(" ");
        const x2 = parseFloat(parseFloat(value2[0]).toFixed(1));
        const y2 = parseFloat(parseFloat(value2[1]).toFixed(1));

        const distance = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
        const answer = parseFloat(distance).toFixed(4);
        console.log(answer);
        rl.close();
    });
});