// Read an integer number between 1 and 12, including.Corresponding to this number, you must print the month of the year, in english, with the first letter in uppercase.

// Input
// The input contains only an integer number.

// Output
// Print the name of the month according to the input number, with the first letter in uppercase.

const readline = require("readline");
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const monthList = [
    { number: 1, name: "January" },
    { number: 2, name: "February" },
    { number: 3, name: "March" },
    { number: 4, name: "April" },
    { number: 5, name: "May" },
    { number: 6, name: "June" },
    { number: 7, name: "July" },
    { number: 8, name: "August" },
    { number: 9, name: "September" },
    { number: 10, name: "October" },
    { number: 11, name: "November" },
    { number: 12, name: "December" },
]

rl.question("", (input) => {
    input = Number(input);
    let result;
    if (input >= 1 && input <= 12) {
        result = monthList.find(each => each.number === input);
        result = result.name;
    }
    else {
        result = "Invalid Choice";
    }

    console.log(result);
    rl.close();
});