#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
//Initialize user balance and pin code.
let myBalance = 5000;
let myPin = 2412;
//Print Welcome message:
console.log(chalk.blue("\n \tWelcome To Rimi Coding - ATM Machine\n"));
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: chalk.yellow("Enter Your Pin Code:")
    }
]);
if (pinAnswer.pin === myPin) {
    console.log(chalk.green("\nYour Pin is Correct, Login Successfully!\n"));
    let operationAnswers = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "Select an operation:",
            choices: ["Withdraw Amount", "Check Balance"]
        }
    ]);
    if (operationAnswers.operation === "Withdraw Amount") {
        let withdrawAns = await inquirer.prompt([
            {
                name: "WithdrawMethod",
                type: "list",
                message: "Select a Withdrawal Method:",
                choices: ["Fast Cash", "Enter Amount"]
            }
        ]);
        if (withdrawAns.WithdrawMethod === "Fast Cash") {
            let fastCashAns = await inquirer.prompt([
                {
                    name: "fast Cash",
                    type: "list",
                    message: "Select Amount:",
                    choices: [500, 1000, 2000, 3000, 5000, 10000, 20000]
                }
            ]);
            if (fastCashAns.fastCash > myBalance) {
                console.log(chalk.red("Insufficient Balance"));
            }
            else {
                myBalance -= fastCashAns.FastCash;
                console.log(`${fastCashAns.astCash} withdraw Successfully`);
                console.log(`Your Remaining Balance is ${myBalance}`);
            }
        }
        else if (withdrawAns.WithdrawMethod === "Enter Amount") {
            let AmountAns = await inquirer.prompt([
                {
                    name: "amount",
                    type: "number",
                    message: "Enter the amount to withdraw:"
                }
            ]);
            if (AmountAns.amount > myBalance) {
                console.log(chalk.red("Insufficient Balance"));
            }
            else {
                myBalance -= AmountAns.amount;
                console.log(`${AmountAns.amount} Withdraw Successfully`);
                console.log(`Your Remaining Balance is ${myBalance}`);
            }
        }
    }
    else if (operationAnswers.operation === "Check Balance") {
        console.log(`Your Current Balance is ${myBalance}`);
    }
}
else {
    console.log(chalk.red("Pin is Incorrect, Please Try Again!"));
}
