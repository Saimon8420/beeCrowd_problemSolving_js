// Read three integers and sort them in ascending order.After, print these values in ascending order, a blank line and then the values in the sequence as they were readed.

// Input
// The input contains three integer numbers.

// Output
// Present the output as requested above.

const { stdin, stdout } = require("process");
const readline = require("readline");
let rl = readline.createInterface({
    input: stdin,
    output: stdout,
});

rl.question("", (inputs) => {
    inputs = inputs.split(" ");
    inputs = inputs.map(each => parseInt(each));
    const original = [...inputs];
    const sorted = inputs.sort((a, b) => a - b);
    console.log(sorted.join("\n"));
    console.log("");
    console.log(original.join("\n"));
    rl.close();
});