#! /usr/bin/env node

                    // WORD COUNTER

// npx wordcount_15325

// Modules
import inquirer from "inquirer";
import chalk from "chalk";

// Code
const counter = await inquirer.prompt(
    [
        {
            name: "words",
            message: chalk.yellow("Enter a phrase to count the words:")+" ",
            type: "input"
        }
    ]
)

const wordCount = counter.words.trim().split(" ");

console.log(chalk.greenBright(`Number of words in given phrase is ${wordCount.length}.`));