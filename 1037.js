// You must make a program that read a float - point number and print a message saying in which of following intervals the number belongs: [0, 25](25, 50], (50, 75], (75, 100].If the read number is less than zero or greather than 100, the program must print the message “Fora de intervalo” that means "Out of Interval".

// The symbol '(' represents greather than.For example:
// [0, 25] indicates numbers between 0 and 25.0000, including both.
// (25, 50]indicates numbers greather than 25(25.00001) up to 50.0000000.

// Input
// The input file contains a floating - point number.

// Output
// The output must be a message like following example.

const { stdin, stdout } = require("process");
const readline = require("readline");
let rl = readline.createInterface({
    input: stdin,
    output: stdout,
});

rl.question("", (input) => {
    input = parseFloat(input);
    if (input > 100 || input < 0) {
        console.log("Fora de intervalo");
    }
    if (input >= 0 && input <= 25) {
        console.log("Intervalo [0,25]");
    }
    if (input > 25 && input <= 50) {
        console.log("Intervalo (25,50]");
    }
    if (input > 50 && input <= 75) {
        console.log("Intervalo (50, 75]");
    }
    if (input > 75 && input <= 100) {
        console.log("Intervalo (75,100]");
    }
    rl.close();
});