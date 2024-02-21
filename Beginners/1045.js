// Read 3 double numbers(A, B and C) representing the sides of a triangle and arrange them in decreasing order, so that the side A is the biggest of the three sides.Next, determine the type of triangle that they can make, based on the following cases always writing an appropriate message:

// if A ≥ B + C, write the message: NAO FORMA TRIANGULO
// if A2 = B2 + C2, write the message: TRIANGULO RETANGULO
// if A2 > B2 + C2, write the message: TRIANGULO OBTUSANGULO
// if A2 < B2 + C2, write the message: TRIANGULO ACUTANGULO
// if the three sides are the same size, write the message: TRIANGULO EQUILATERO
// if only two sides are the same and the third one is different, write the message: TRIANGULO ISOSCELES
// Input
// The input contains three double numbers, A(0 < A), B(0 < B) and C(0 < C).

// Output
// Print all the classifications of the triangle presented in the input.

const readline = require("readline");
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.question("", (inputs) => {
    inputs = inputs.split(" ");
    inputs = inputs.sort((a, b) => b - a);
    let A = parseFloat(inputs[0] > 0 ? inputs[0] : 0);
    let B = parseFloat(inputs[1] > 0 ? inputs[1] : 0);
    let C = parseFloat(inputs[2] > 0 ? inputs[2] : 0);
    if (A >= (B + C)) {
        console.log("NAO FORMA TRIANGULO");
    }
    else {
        if (Math.pow(A, 2) === (Math.pow(B, 2) + Math.pow(C, 2))) {
            console.log("TRIANGULO RETANGULO");
        }
        if (Math.pow(A, 2) > (Math.pow(B, 2) + Math.pow(C, 2))) {
            console.log("TRIANGULO OBTUSANGULO");
        }
        if (Math.pow(A, 2) < (Math.pow(B, 2) + Math.pow(C, 2))) {
            console.log("TRIANGULO ACUTANGULO");
        }
        if (A === B && B === C && C === A) {
            console.log("TRIANGULO EQUILATERO");
        }
        if ((A === B && B !== C) || (B === C && A !== B)) {
            console.log("TRIANGULO ISOSCELES");
        }
    };
    rl.close();
});