// Make a program that prints the sequence like the following example.

// Input
// This problem doesn't have input.

// Output
// Print the sequence like the example below.

// I = 0 J = 1
// I = 0 J = 2
// I = 0 J = 3

// I = 0.2 J = 1.2
// I = 0.2 J = 2.2
// I = 0.2 J = 3.2
// .....
// I = 2 J =?
// I = 2 J =?
// I = 2 J =?

for (let m = 0; m <= 2; m = Number((m + 0.2).toFixed(1))) {
    for (let n = 1; n <= 3; n++) {
        if (m === 0) {
            let j = 0;
            j = j + n;
            console.log("I=" + m + " " + "J=" + j);
        }
        else {
            let j = 0;
            j = j + n + m;
            console.log("I=" + m + " " + "J=" + j);
        }
    }
}
