// Read the start time and end time of a game, in hours.Then calculate the duration of the game, knowing that the game can begin in a day and finish in another day, with a maximum duration of 24 hours.The message must be printed in portuguese “O JOGO DUROU X HORA(S)” that means “THE GAME LASTED X HOUR(S)”

// Input
// Two integer numbers representing the start and end time of a game.

// Output
// Print the duration of the game as in the sample output.

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("", (input) => {
    const [startTime, endTime] = input.split(" ").map(Number);

    function calculateDuration(start, end) {
        if (start === end) {
            return "O JOGO DUROU 24 HORA(S)";
        } else if (start < end) {
            return `O JOGO DUROU ${end - start} HORA(S)`;
        } else {
            return `O JOGO DUROU ${24 - start + end} HORA(S)`;
        }
    }
    console.log(calculateDuration(startTime, endTime));

    rl.close();
});