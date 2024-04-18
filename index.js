#! /usr/bin/env node
import inquirer from "inquirer";
console.log("\n\nCurrency converter.\n");
let currency_value = {
    PKR: 278.16,
    UAE: 3.67,
    INR: 83.64,
    USD: 1,
};
let currency = await inquirer.prompt([
    {
        type: "list",
        name: "convert_from",
        message: "Currency Converting From\n",
        choices: ["PKR", "USD", "UAE", "INR"],
    },
    {
        name: "convert_to",
        type: "list",
        message: "Currency Converting To\n",
        choices: ["PKR", "USD", "UAE", "INR"],
    },
    {
        name: "amount",
        type: "number",
        message: "Enter Amount To convert.\n",
    },
]);
console.log("\n\nTotal is", currency_value[currency.convert_to] /
    currency_value[currency.convert_from] *
    currency.amount);
