// Read an integer value, which is the duration in seconds of a certain event in a factory, and inform it expressed in hours: minutes: seconds.

// Input
// The input file contains an integer N.

// Output
// Print the read time in the input file(seconds) converted in hours: minutes:seconds like the following example.

const { stdin, stdout } = require("process");
const readline = require("readline");

let rl = readline.createInterface({
    input: stdin,
    output: stdout,
});

rl.question("", (time) => {
    time = parseInt(time);
    let hours = 0;
    let minutes = 0;
    let seconds = 0;
    if (time > 0 && time < 60) {
        seconds = time;
    }
    if (time >= 60 && time < 3600) {
        minutes = Math.floor(time / 60);
        seconds = Math.floor(time % 60);
    }

    if (time >= 3600) {
        hours = Math.floor(time / 3600);
        const minuteRemain = Math.floor(time % 3600);
        if (minuteRemain < 3600) {
            minutes = Math.floor(minuteRemain / 60);
            const secondRemain = Math.floor(minuteRemain % 60);
            if (secondRemain < 60) {
                seconds = secondRemain;
            }
        }
    }
    console.log(hours + ":" + minutes + ":" + seconds);
    rl.close();
});