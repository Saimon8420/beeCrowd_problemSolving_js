// In this problem, your job is to read three Portuguese words.These words define an animal according to the table below, from left to right.After, print the chosen animal defined by these three words.

// Input
// The input contains 3 words, one by line, that will be used to identify the animal, according to the above table, with all letters in lowercase.

// Output
// Print the animal name according to the given input.

const readline = require("readline");
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const content = [
    { group: "vertebrado", name: "ave", identity: "carnivoro", result: "aguia" },
    { group: "vertebrado", name: "ave", identity: "onivoro", result: "pomba" },

    { group: "vertebrado", name: "mamifero", identity: "onivoro", result: "homem" },
    { group: "vertebrado", name: "mamifero", identity: "herbivoro", result: "vaca" },

    { group: "invertebrado", name: "inseto", identity: "hematofago", result: "pulga" },
    { group: "invertebrado", name: "inseto", identity: "herbivoro", result: "lagarta" },

    { group: "invertebrado", name: "anelideo", identity: "hematofago", result: "sanguessuga" },
    { group: "invertebrado", name: "anelideo", identity: "onivoro", result: "minhoca" },
];

rl.question("", (group) => {
    rl.question("", (name) => {
        rl.question("", (identity) => {
            const find = content.find(each => each.group === group.toLowerCase() && each.name === name.toLowerCase() && each.identity === identity.toLowerCase());
            console.log(find?.result);
            rl.close();
        });
    });
});