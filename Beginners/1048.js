// The company ABC decided to give a salary increase to its employees, according to the following table:

// Salary----------------------Readjustment Rate
// 0 - 400.00 ----------------------15 %
// 400.01 - 800.00------------------12 %
// 800.01 - 1200.00-----------------10 %
// 1200.01 - 2000.00-----------------7 %
// Above 2000.00---------------------4 %

// Read the employee's salary, calculate and print the new employee's salary, as well the money earned and the increase percentual obtained by the employee, with corresponding messages in Portuguese, as the below example.
// Input
// The input contains only a floating - point number, with 2 digits after the decimal point.

// Output
// Print 3 messages followed by the corresponding numbers(see example) informing the new salary, the among of money earned(both must be shown with 2 decimal places) and the percentual obtained by the employee.Note:
// Novo salario:  means "New Salary"
// Reajuste ganho: means "Money earned"
// Em percentual: means "In percentage"

const { stdin, stdout } = require("process");
const readline = require("readline");
let rl = readline.createInterface({
    input: stdin,
    output: stdout,
})

rl.question("", (input) => {
    input = parseFloat(Number(input).toFixed(2));
    const result = calculate(input);
    function calculate(input) {
        let newSalary = 0;
        let increase = 0;
        let percent = 0;
        if (input >= 0 && input <= 400.00) {
            percent = 15;
            increase = parseFloat((input * percent) / 100).toFixed(2);
            newSalary = parseFloat(input + parseFloat(increase)).toFixed(2);
            return { percent, increase, newSalary }
        }
        if (input >= 400.01 && input <= 800.00) {
            percent = 12;
            increase = parseFloat((input * percent) / 100).toFixed(2);
            newSalary = parseFloat(input + parseFloat(increase)).toFixed(2);
            return { percent, increase, newSalary }
        }
        if (input >= 800.01 && input <= 1200.00) {
            percent = 10;
            increase = parseFloat((input * percent) / 100).toFixed(2);
            newSalary = parseFloat(input + parseFloat(increase)).toFixed(2);
            return { percent, increase, newSalary }
        }
        if (input >= 1200.01 && input <= 2000.00) {
            percent = 7;
            increase = parseFloat((input * percent) / 100).toFixed(2);
            newSalary = parseFloat(input + parseFloat(increase)).toFixed(2);
            return { percent, increase, newSalary }
        }
        if (input >= 2000.01) {
            percent = 4;
            increase = parseFloat((input * percent) / 100).toFixed(2);
            newSalary = parseFloat(input + parseFloat(increase)).toFixed(2);
            return { percent, increase, newSalary }
        }
    }

    console.log(`Novo salario: ${result?.newSalary}`);
    console.log(`Reajuste ganho: ${result?.increase}`);
    console.log(`Em percentual: ${result?.percent} %`);

    rl.close();
});