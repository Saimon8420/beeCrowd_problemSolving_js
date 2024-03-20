// Make a program that prints the sequence like the following exemple.

//  Input
// This problem doesn't have input.

// Output
// Print the sequence like the example below.

// I = 1 J = 7
// I = 1 J = 6
// I = 1 J = 5
// I = 3 J = 7
// I = 3 J = 6
// I = 3 J = 5
// ...
// I = 9 J = 7
// I = 9 J = 6
// I = 9 J = 5

let i = -1, j = 7;

for (x = 1; x <= 9; x++) {
    if (i < 9) {
        i = i + 2;
        for (z = 0; z <= 2; z++) {
            console.log("I" + "=" + i + " " + "J" + "=" + (j - z));
        }
    }
}