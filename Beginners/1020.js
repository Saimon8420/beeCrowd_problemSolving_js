// Read an integer value corresponding to a person's age (in days) and print it in years, months and days, followed by its respective message “ano(s)”, “mes(es)”, “dia(s)”.

// Note: only to facilitate the calculation, consider the whole year with 365 days and 30 days every month.In the cases of test there will never be a situation that allows 12 months and some days, like 360, 363 or 364. This is just an exercise for the purpose of testing simple mathematical reasoning.

// Input
// The input file contains 1 integer value.

// Output
// Print the output, like the following example.

const readline = require("readline");
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("", (age) => {
    age = parseInt(age);
    let years = 0;
    let months = 0;
    let days = 0;
    if (age > 0 && age < 30) {
        days = age;
    }
    if (age >= 30 && age < 365) {
        months = Math.floor(age / 30);
        days = Math.ceil(age % 30);
    }

    if (age >= 365) {
        years = Math.floor(age / 365);
        const monthsRemain = Math.ceil(age % 365);
        if (monthsRemain >= 30) {
            months = Math.floor(monthsRemain / 30);
            days = Math.ceil(monthsRemain % 30);
        }
    }
    console.log(years + " ano(s)");
    console.log(months + " mes(es)");
    console.log(days + " dia(s)");
    rl.close();
});