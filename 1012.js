// Make a program that reads three floating point values: A, B and C.Then, calculate and show:
// a) the area of the rectangled triangle that has base A and height C.
// b) the area of the radius's circle C. (pi = 3.14159)
// c) the area of the trapezium which has A and B by base, and C by height.
// d) the area of ​​the square that has side B.
// e) the area of the rectangle that has sides A and B.

// Input
// The input file contains three double values with one digit after the decimal point.

//  Output
// The output file must contain 5 lines of data.Each line corresponds to one of the areas described above, always with a corresponding message(in Portuguese) and one space between the two points and the value.The value calculated must be presented with 3 digits after the decimal point.

const readline = require("readline");

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

rl.question("", (a) => {
    const ar = a.split(" ");
    const A = parseFloat(parseFloat(ar[0]).toFixed(1));
    const B = parseFloat(parseFloat(ar[1]).toFixed(1));
    const C = parseFloat(parseFloat(ar[2]).toFixed(1));
    const pi = 3.14159;

    const areaRectangleTriangle = parseFloat((1 / 2.0) * A * C).toFixed(3);
    const areaCircle = parseFloat(pi * Math.pow(C, 2)).toFixed(3);
    const areaTrapezium = parseFloat((1 / 2.0) * (A + B) * C).toFixed(3);
    const areaSquare = parseFloat(Math.pow(B, 2)).toFixed(3);
    const areaRectangle = parseFloat(A * B).toFixed(3);
    console.log("TRIANGULO: " + areaRectangleTriangle);
    console.log("CIRCULO: " + areaCircle);
    console.log("TRAPEZIO: " + areaTrapezium);
    console.log("QUADRADO: " + areaSquare);
    console.log("RETANGULO: " + areaRectangle);
    rl.close();
});