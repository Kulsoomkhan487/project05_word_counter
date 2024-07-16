#! /usr/bin/env node 

import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.cyanBright.bold("\n \t\t Welcome to my word counter App"));
console.log("=".repeat(60));


let answer = await inquirer.prompt([{
  name: "UserName",
  type: "input",
  message: "Enter your Name",
},
  {
    name: "Sentence",
    type: "input",
    message: "Enter a Sentence",
  }
])

// Trimming the sentence and splitting it into words based on "spaces"

let words = answer.Sentence.trim().split(" ")
console.log("=".repeat(60));
console.log(chalk.cyanBright.bold("Sentence Words:"));
console.log(words);

console.log(chalk.bold(`\n - word count: ${chalk.bold.red(words.length)}`));
console.log("=".repeat(60));
console.log(chalk.cyanBright.bold(`\n \t\t Thanks ${answer.UserName} for using my Word Counter App`));






