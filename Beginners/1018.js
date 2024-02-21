// In this problem you have to read an integer value and calculate the smallest possible number of banknotes in which the value may be decomposed.The possible banknotes are 100, 50, 20, 10, 5, 2 and 1. Print the read value and the list of banknotes.

// Input
// The input file contains an integer value N(0 < N < 1000000).

// Output
// Print the read number and the minimum quantity of each necessary banknotes in Portuguese language, as the given example.Do not forget to print the end of line after each line, otherwise you will receive “Presentation Error”.

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (value) => {
    // Convert value to integer
    value = parseInt(value);
    const initialValue = value;
    // Define the denominations of banknotes
    const banknotes = [100, 50, 20, 10, 5, 2, 1];
    // Initialize an object to store the count of each banknote
    const banknoteCount = {};
    if (value > 0 && value < 1000000) {
        // Loop through each banknote denomination
        for (let note of banknotes) {
            // Calculate the number of banknotes of this denomination
            banknoteCount[note] = Math.floor(value / note);
            // Update the remaining value
            value %= note;
        }
    }
    // Print the results
    console.log(initialValue);
    console.log(`${banknoteCount[100]} nota(s) de R$ 100,00`);
    console.log(`${banknoteCount[50]} nota(s) de R$ 50,00`);
    console.log(`${banknoteCount[20]} nota(s) de R$ 20,00`);
    console.log(`${banknoteCount[10]} nota(s) de R$ 10,00`);
    console.log(`${banknoteCount[5]} nota(s) de R$ 5,00`);
    console.log(`${banknoteCount[2]} nota(s) de R$ 2,00`);
    console.log(`${banknoteCount[1]} nota(s) de R$ 1,00`);

    rl.close();
});