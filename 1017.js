// Little John wants to calculate and show the amount of spent fuel liters on a trip, using a car that does 12 Km / L.For this, he would like you to help him through a simple program.To perform the calculation, you have to read spent time(in hours) and the same average speed(km / h).In this way, you can get distance and then, calculate how many liters would be needed.Show the value with three decimal places after the point.

// Input
// The input file contains two integers.The first one is the spent time in the trip(in hours).The second one is the average speed during the trip(in Km / h).

// Output
// Print how many liters would be needed to do this trip, with three digits after the decimal point.

const readline = require("readline");
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("", (time) => {
    rl.question("", (speed) => {
        const spentTime = parseInt(time);
        const averageSpeed = parseInt(speed);
        const milage = 12;
        const fuelNeeded = parseFloat((spentTime * averageSpeed) / milage).toFixed(3);
        console.log(fuelNeeded);
        rl.close();
    });
});