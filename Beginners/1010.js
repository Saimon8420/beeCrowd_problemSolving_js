//  In this problem, the task is to read a code of a product 1, the number of units of product 1, the price for one unit of product 1, the code of a product 2, the number of units of product 2 and the price for one unit of product 2. After this, calculate and show the amount to be paid.

// Input
// The input file contains two lines of data.In each line there will be 3 values: two integers and a floating value with 2 digits after the decimal point.

// Output
// The output file must be a message like the following example where "Valor a pagar" means Value to Pay.Remember the space after ":" and after "R$" symbol.The value must be presented with 2 digits after the point.

const readline = require("readline");
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("", (product1) => {
    rl.question("", (product2) => {
        const ar1 = product1.split(" ");
        const ar2 = product2.split(" ");
        const pCode1 = ar1[0];
        const numOfUnit1 = parseInt(ar1[1]);
        const price1 = parseFloat(parseFloat(ar1[2]).toFixed(2));
        const pCode2 = ar2[0];
        const numOfUnit2 = parseInt(ar2[1]);
        const price2 = parseFloat(parseFloat(ar2[2]).toFixed(2));
        const toPay = (parseFloat(numOfUnit1 * price1 + numOfUnit2 * price2).toFixed(2));
        console.log("VALOR A PAGAR:" + " R$ " + toPay);
        rl.close();
    })
})