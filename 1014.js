// Calculate a car's average consumption being provided the total distance traveled (in Km) and the spent fuel total (in liters).

// Input
// The input file contains two values: one integer value X representing the total distance(in Km) and the second one is a floating point number Y  representing the spent fuel total, with a digit after the decimal point.

// Output
// Present a value that represents the average consumption of a car with 3 digits after the decimal point, followed by the message "km/l".

const { stdin, stdout } = require("process");
const readline = require("readline");
let rl = readline.createInterface({
    input: stdin,
    output: stdout,
})

rl.question("", (distance) => {
    rl.question("", (fuel) => {
        const totalDistance = parseInt(distance);
        const totalFuel = parseFloat(parseFloat(fuel).toFixed(1));

        const averageConsumption = parseFloat(totalDistance / totalFuel).toFixed(3);

        console.log(averageConsumption + " km/l");

        rl.close();
    });
});

