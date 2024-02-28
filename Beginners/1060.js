// Write a program that reads 6 numbers.These numbers will only be positive or negative(disregard null values).Print the total number of positive numbers.

//  Input
// Six numbers, positive and / or negative.

// Output
// Print a message with the total number of positive numbers.

const { stdin, stdout } = require("process");
const readline = require("readline");
let rl = readline.createInterface({
    input: stdin,
    output: stdout,
});
let counter = 0;
let numberCount = 0;
const collectInput = () => {
    rl.question("", (input) => {
        input = (Number(input));
        if (input >= 0) {
            numberCount++;
        }
        counter++;
        if (counter < 6) {
            collectInput();
        }
        else {
            rl.close();
            console.log(numberCount + " valores positivos");
        };
    });
};

collectInput();
