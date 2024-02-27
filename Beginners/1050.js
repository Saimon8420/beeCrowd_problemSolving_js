// Read an integer number that is the code number for phone dialing.Then, print the destination according to the following table:

// If the input number isn’t found in the above table, the output must be:
// DDD nao cadastrado
// That means “DDD not found” in Portuguese language.

// Input
// The input consists in a unique integer number.

// Output
// Print the city name corresponding to the input DDD.Print DDD nao cadastrado if doesn't exist corresponding DDD to the typed number.

const readline = require("readline");
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const destination = [
    { code: 61, destination: "Brasilia" },
    { code: 71, destination: "Salvador" },
    { code: 11, destination: "Sao Paulo" },
    { code: 21, destination: "Rio de Janeiro" },
    { code: 32, destination: "Juiz de Fora" },
    { code: 19, destination: "Campinas" },
    { code: 27, destination: "Vitoria" },
    { code: 31, destination: "Belo Horizonte" },
]

rl.question("", (input) => {
    input = Number(input);
    const find = destination.find(each => each?.code === input);
    const nameOfDest = find !== undefined ? find?.destination : "DDD nao cadastrado";
    console.log(nameOfDest);
    rl.close();
});