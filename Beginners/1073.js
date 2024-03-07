// Read an integer N.Print the square of each one of the even values from 1 to N including N if it is the case.

// Input
// The input contains an integer N(5 < N < 2000).

// Output
// Print the square of each one of the even values from 1 to N, as the given example.

// Be carefull! Some language automaticly print 1e+006 instead 1000000. Please configure your program to print the correct format setting the output precision.

const { stdin, stdout } = require("process");
const readline = require("readline");
let rl = readline.createInterface({
    input: stdin,
    output: stdout,
});

rl.question("", (inputs) => {
    inputs = Number(inputs);
    if (inputs > 5 && inputs < 2000) {
        for (let i = 1; i <= inputs; i++) {
            if (i % 2 === 0) {
                let result = Math.pow(i, 2);
                console.log(`${i}^2 = ${result}`)
            }
        }
    }
    else {
        console.log("Invalid input choice!");
    }
    rl.close();
});