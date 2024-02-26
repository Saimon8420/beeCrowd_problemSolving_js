// Read the start time and end time of a game, in hours and minutes(initial hour, initial minute, final hour, final minute).Then print the duration of the game, knowing that the game can begin in a day and finish in another day,

// Obs.: With a maximum game time of 24 hours and the minimum game time of 1 minute.

// Input
// Four integer numbers representing the start and end time of the game.

// Output
// Print the duration of the game in hours and minutes, in this format: “O JOGO DUROU XXX HORA(S) E YYY MINUTO(S)” . Which means: the game lasted XXX hour(s) and YYY minutes.

const { stdin, stdout } = require("process");
const readline = require("readline");
let rl = readline.createInterface({
    input: stdin,
    output: stdout,
});

rl.question("", (inputs) => {
    inputs = inputs.split(" ").map(each => Number(each));
    const A = inputs[0]; // Start hour
    const B = inputs[1]; // Start minutes
    const C = inputs[2]; // End hour
    const D = inputs[3]; // End minutes
    function calculate(A, B, C, D) {
        if (A > 24 || C > 24) {
            return "Maximum Game time crossed!";
        }
        if (A === C && B === D) {
            return { hours: 24, minutes: 0 };
        }
        else {
            let hours = C - A;
            let minutes = D - B;
            if (minutes < 0) {
                minutes += 60;
                hours -= 1;
            }
            if (hours < 0) {
                hours += 24;
            }
            return { hours: hours, minutes: minutes };
        }
    }
    const result = calculate(A, B, C, D);
    const { hours, minutes } = result;
    if (hours || minutes) {
        console.log(`O JOGO DUROU ${hours} HORA(S) E ${minutes} MINUTO(S)`);
    }
    else {
        console.log(result);
    }
    rl.close();
});