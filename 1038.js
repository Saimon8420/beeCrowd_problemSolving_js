// Using the following table, write a program that reads a code and the amount of an item.After, print the value to pay.This is a very simple program with the only intention of practice of selection commands.
// Input
// The input file contains two integer numbers X and Y.X is the product code and Y is the quantity of this item according to the above table.

// Output
// The output must be a message "Total: R$ " followed by the total value to be paid, with 2 digits after the decimal point.

const readline = require("readline");
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const products = [
    {
        id: 1, specification: "Cachorro Quente", price: 4.00,
    }, {
        id: 2, specification: "X-Salada", price: 4.50,
    },
    {
        id: 3, specification: "X-Bacon", price: 5.00,
    },
    {
        id: 4, specification: "Torrada simples", price: 2.00,
    },
    {
        id: 5, specification: "Refrigerante", price: 1.50,
    }
];

rl.question("", (inputs) => {
    inputs = inputs.split(" ");
    const id = parseInt(inputs[0]);
    const quantity = parseInt(inputs[1]);
    const findProduct = products.find(each => each.id === id);
    const price = parseFloat(findProduct.price);
    const total = parseFloat(quantity * price).toFixed(2);
    console.log("Total: R$ " + total);
    rl.close();
});