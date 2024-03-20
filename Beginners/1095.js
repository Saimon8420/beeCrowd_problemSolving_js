// Make a program that prints the sequence like the following example.

// Input
// This problem doesn't have input.

// Output
// Print the sequence like the example below.

// I = 1 J = 60
// I = 4 J = 55
// I = 7 J = 50
// ...
// I =? J = 0

let i = 1, j = 60;
console.log(`I=${i} J=${j}`);
for (let x = j; x >= 1; x = x - 5) {
    i = i + 3;
    j = j - 5;
    console.log(`I=${i} J=${j}`);
}