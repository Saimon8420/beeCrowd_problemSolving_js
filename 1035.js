// Read 4 integer values A, B, C and D.Then if B is greater than C and D is greater than A and if the sum of C and D is greater than the sum of A and B and if C and D were positives values and if A is even, write the message “Valores aceitos” (Accepted values).Otherwise, write the message “Valores nao aceitos” (Values not accepted).

// Input
// Four integer numbers A, B, C and D.

// Output
// Show the corresponding message after the validation of the values.

const readline = require("readline");
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("", (numbers) => {
    numbers = numbers.split(" ");
    const A = parseInt(numbers[0]);
    const B = parseInt(numbers[1]);
    const C = parseInt(numbers[2]);
    const D = parseInt(numbers[3]);

    if (B > C && D > A && ((C + D) > (A + B)) && C >= 0 && D >= 0 && A % 2 === 0) {
        console.log("Valores aceitos");
    }
    else {
        console.log("Valores nao aceitos");
    }
    rl.close();
});