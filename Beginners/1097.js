// Make a program that prints the sequence like the following exemple.

// Input
// This problem doesn't have input.

// Output
// Print the sequence like the example below.

// I = 1 J = 7
// I = 1 J = 6
// I = 1 J = 5
// I = 3 J = 9
// I = 3 J = 8
// I = 3 J = 7
// ...
// I = 9 J = 15
// I = 9 J = 14
// I = 9 J = 13

let j = 8;
for (let m = 1; m <= 9; m = m + 2) {
    for (let n = 0; n <= 2; n++) {
        if (m === 1) {
            j = j - 1;
            console.log("I=" + m + " " + "J=" + j);
        }
        else if (m === 3) {
            if (n == 0) {
                j = j + 5;
            }
            j = j - 1;
            console.log("I=" + m + " " + "J=" + j);
        }
        else if (m === 5) {
            if (n == 0) {
                j = j + 5;
            }
            j = j - 1;
            console.log("I=" + m + " " + "J=" + j);
        }
        else if (m === 7) {
            if (n == 0) {
                j = j + 5;
            }
            j = j - 1;
            console.log("I=" + m + " " + "J=" + j);
        }
        else {
            if (n == 0) {
                j = j + 5;
            }
            j = j - 1;
            console.log("I=" + m + " " + "J=" + j);
        };
    };
};