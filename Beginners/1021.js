// Read a value of floating point with two decimal places.This represents a monetary value.After this, calculate the smallest possible number of notes and coins on which the value can be decomposed.The considered notes are of 100, 50, 20, 10, 5, 2. The possible coins are of 1, 0.50, 0.25, 0.10, 0.05 and 0.01.Print the message “NOTAS:” followed by the list of notes and the message “MOEDAS:” followed by the list of coins.

// Input
// The input file contains a value of floating point N(0 ≤ N ≤ 1000000.00).

// Output
// Print the minimum quantity of banknotes and coins necessary to change the initial value, as the given example.

const readline = require("readline");
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// for notes;
let note100 = 0;
let note50 = 0;
let note20 = 0;
let note10 = 0;
let note5 = 0;
let note2 = 0;
// for coins;
let coin1 = 0;
let coin050 = 0;
let coin025 = 0;
let coin010 = 0;
let coin005 = 0;
let coin001 = 0;

rl.question("", (money) => {
    money = parseFloat(parseFloat(money).toFixed(2));
    if (money >= 0 && money <= 1000000.00) {
        convertIntoCash(money);
    }
    rl.close();
})

const convertIntoCash = (money) => {
    if (money > 2) {
        note100 = Math.floor(money / 100);
        money = money % 100;

        note50 = Math.floor(money / 50);
        money = money % 50;

        note20 = Math.floor(money / 20);
        money = money % 20;

        note10 = Math.floor(money / 10);
        money = money % 10;

        note5 = Math.floor(money / 5);
        money = money % 5;

        note2 = Math.floor(money / 2);
        money = money % 2;
        console.log("NOTAS:");
        console.log(note100 + " nota(s) de R$ 100.00");
        console.log(note50 + " nota(s) de R$ 50.00");
        console.log(note20 + " nota(s) de R$ 20.00");
        console.log(note10 + " nota(s) de R$ 10.00");
        console.log(note5 + " nota(s) de R$ 5.00");
        console.log(note2 + " nota(s) de R$ 2.00");
    }
    if (money < 2) {
        convertCoins(money);
    }
};

const convertCoins = (money) => {
    coin1 = Math.floor(money / 1);
    money = money % 1;

    coin050 = Math.floor(money / 0.50);
    money = money % 0.50;

    coin025 = Math.floor(money / 0.25);
    money = money % 0.25;

    coin010 = Math.floor(money / 0.10);
    money = money % 0.10;

    coin005 = Math.floor(money / 0.05);
    money = money % 0.05;

    coin001 = Math.floor(money / 0.01);

    console.log("MOEDAS:");
    console.log(coin1 + " moeda(s) de R$ 1.00");
    console.log(coin050 + " moeda(s) de R$ 0.50");
    console.log(coin025 + " moeda(s) de R$ 0.25");
    console.log(coin010 + " moeda(s) de R$ 0.10");
    console.log(coin005 + " moeda(s) de R$ 0.05");
    console.log(coin001 + " moeda(s) de R$ 0.01");
};