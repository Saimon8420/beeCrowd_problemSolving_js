// Make a program that reads five integer values.Count how many of these values ​​are even and  print this information like the following example.

// Input
// The input will be 5 integer values.

// Output
// Print a message like the following example with all letters in lowercase, indicating how many even numbers were typed.

const readline = require("readline");
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
let count = 0;
let evenCount = 0;
function getInputs() {
    rl.question("", (input) => {
        input = Number(input);
        if (input % 2 === 0) {
            evenCount++;
        }
        count++;
        if (count < 5) {
            getInputs();
        }
        else {
            rl.close();
            console.log(evenCount + " valores pares");
        }
    })
};
getInputs();
