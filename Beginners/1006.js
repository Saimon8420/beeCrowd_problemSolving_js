// Read three values(variables A, B and C), which are the three student's grades. Then, calculate the average, considering that grade A has weight 2, grade B has weight 3 and the grade C has weight 5. Consider that each grade can go from 0 to 10.0, always with one decimal place.

// Input
// The input file contains 3 values of floating points(double) with one digit after the decimal point.

// Output
// Print the message "MEDIA"(average in Portuguese) and the student's average according to the following example, with a blank space before and after the equal signal.

const readline = require("readline");
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("", (a) => {
    rl.question("", (b) => {
        rl.question("", (c) => {
            const A = parseFloat(a).toFixed(1);
            const B = parseFloat(b).toFixed(1);
            const C = parseFloat(c).toFixed(1);
            if (A <= 10.0 && B <= 10.0 && C <= 10.0) {
                const average = ((A * 2) + (B * 3) + (C * 5)) / (2 + 3 + 5);
                const media = parseFloat(average).toFixed(1);
                console.log("MEDIA " + "= " + media);
                rl.close();
            }
        })
    })
})