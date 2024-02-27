// In an imaginary country called Lisarb, all the people are very happy to pay their taxes because they know that doesn’t exist corrupt politicians and the taxes are used to benefit the population, without any misappropriation.The currency of this country is Rombus, whose symbol is R$.

// Read a value with 2 digits after the decimal point, equivalent to the salary of a Lisarb inhabitant.Then print the due value that this person must pay of taxes, according to the table below.

// Remember, if the salary is R$ 3,002.00 for example, the rate of 8 % is only over R$ 1,000.00, because the salary from R$ 0.00 to R$ 2,000.00 is tax free.In the follow example, the total rate is 8 % over R$ 1000.00 + 18 % over R$ 2.00, resulting in R$ 80.36 at all.The answer must be printed with 2 digits after the decimal point.

// Input
// The input contains only a float - point number, with 2 digits after the decimal point.

// Output
// Print the message "R$" followed by a blank space and the total tax to be payed, with two digits after the decimal point.If the value is up to 2000, print the message "Isento".

const readline = require("readline");
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.question("", (inputs) => {
    inputs = parseFloat(Number(inputs).toFixed(2));
    let result = 0;
    if (inputs >= 0.00 && inputs <= 2000.00) {
        result = "Isento"
    }
    else if (inputs >= 2000.01 && inputs <= 3000.00) {
        result = inputs - 2000.00;
        result = ((inputs - 2000.00) * 8) / 100;
        result = parseFloat(result).toFixed(2);
    }
    else if (inputs >= 3000.01 && inputs <= 4500.00) {
        inputs = inputs - 2000.00;
        const firstImplies = inputs - 1000;

        const firstCase = ((inputs - firstImplies) * 8) / 100;
        const secondCase = (firstImplies * 18) / 100;
        result = parseFloat(firstCase + secondCase).toFixed(2);
    }
    else {
        inputs = inputs - 2000.00;
        const firstImplies = inputs - 1000;
        const secondImplies = firstImplies - 1500;

        const firstCase = ((inputs - firstImplies) * 8) / 100;
        const secondCase = ((firstImplies - secondImplies) * 18) / 100;
        const thirdCase = (secondImplies * 28) / 100;
        result = parseFloat(firstCase + secondCase + thirdCase).toFixed(2);
    }
    console.log(result !== "Isento" ? `R$ ${result}` : result);
    rl.close();
});