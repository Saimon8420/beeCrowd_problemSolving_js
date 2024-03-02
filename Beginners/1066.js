// Make a program that reads five integer values.Count how many   of these values are even, odd, positive and negative.Print these information like following example.

// Input
// The input will be 5 integer values.

// Output
// Print a message like the following example with all letters in lowercase, indicating how many of these values ​​are even, odd, positive and negative.

const readline = require("readline");
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
let count = 0;
let evenCount = 0;
let oddCount = 0;
let positiveCount = 0;
let negativeCount = 0;
function getInputs() {
    rl.question("", (inputs) => {
        inputs = Number(inputs);
        if (inputs % 2 === 0) {
            evenCount++;
        }
        if (inputs % 2 !== 0) {
            oddCount++;
        }
        if (inputs > 0) {
            positiveCount++;
        }
        if (inputs < 0) {
            negativeCount++;
        }
        count++;
        if (count < 5) {
            getInputs();
        }
        else {
            rl.close();
            console.log(evenCount + " valor(es) par(es)");
            console.log(oddCount + " valor(es) impar(es)");
            console.log(positiveCount + " valor(es) positivo(s)");
            console.log(negativeCount + " valor(es) negativo(s)");
        }
    })
};

getInputs();
