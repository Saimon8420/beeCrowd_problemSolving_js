// Peter is organizing an event in his University.The event will be in April month, beginning and finishing within April month.The problem is: Peter wants to calculate the event duration in seconds, knowing obviously the begin and the end time of the event.

// You know that the event can take from few seconds to some days, so, you must help Peter to compute the total time corresponding to duration of the event.

//     Input
// The first line of the input contains information about the beginning day of the event in the format: “Dia xx”. The next line contains the start time of the event in the format presented in the sample input.Follow 2 input lines with same format, corresponding to the end of the event.

//     Output
// Your program must print the following output, one information by line, considering that if any information is null for example, the number 0 must be printed in place of W, X, Y or Z:

// W dia(s)
// X hora(s)
// Y minuto(s)
// Z segundo(s)

// Obs: Consider that the event of the test case have the minimum duration of one minute. “dia” means day, “hora” means hour, “minuto” means minute and “Segundo” means second in Portuguese.

const readline = require("readline");
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("", (startDay) => {
    rl.question("", (startTime) => {
        rl.question("", (endDay) => {
            rl.question("", (endTime) => {
                startDay = startDay.split("Dia ");
                endDay = endDay.split("Dia ");
                startDay = Number(startDay[1]);
                endDay = Number(endDay[1]);

                const sTime = startTime.split(":").map((each) => Number(each));
                const sTimeSec = ((sTime[0] * 60 + sTime[1]) * 60 + sTime[2]);

                const eTime = endTime.split(":").map((each) => Number(each));
                const eTimeSec = ((eTime[0] * 60 + eTime[1]) * 60 + eTime[2]);

                const dayCount = (endDay - startDay) !== 0 ? ((endDay - startDay) * 24 * 60 * 60) : 0;

                let restTime = 0;

                if (sTimeSec - eTimeSec > 60 || eTimeSec - sTimeSec > 60) {
                    if (sTimeSec >= eTimeSec) {
                        restTime = sTimeSec - eTimeSec;
                        console.log("From if :", restTime);
                    }
                    else {
                        restTime = (86400 - sTimeSec) - (86400 - eTimeSec);
                        restTime = dayCount + restTime;
                        console.log("From else:", restTime);
                    }
                    console.log(dayCount);
                    const result = dayCount !== 0 ? dayCount - restTime : restTime - dayCount;

                    convertDay(result);
                }
                else {
                    console.log("Invalid Input");
                }
                function convertDay(n) {
                    const day = parseInt(n / (24 * 3600));
                    n = n % (24 * 3600);

                    const hour = parseInt(n / 3600);
                    n = n % 3600;

                    const minute = parseInt(n / 60);
                    n = n % 60;
                    const second = n;

                    console.log(day + " dia(s)");
                    console.log(hour + " hora(s)");
                    console.log(minute + " minuto(s)")
                    console.log(second + " segundo(s)");
                }
                rl.close();
            });
        });
    });
});