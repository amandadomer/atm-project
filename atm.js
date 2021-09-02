"use strict";

const prompt = require('prompt-sync')();

const account = require("./account");

function getBalance () {
    console.log("Your current balance is: $" + account.balance);
}

function withdraw (){
    let userEntry = parseInt(prompt ("Enter the amount you want to withdraw: $"));
    account.balance = account.balance - userEntry;
        console.log ("Your new balance is: $" + account.balance);
}

function deposit (){
    let userEntry = parseInt(prompt ("Enter the amount you want to deposit: $"));
    account.balance = account.balance + userEntry;
        console.log ("Your new balance is: $" + account.balance);
}

function validatePin (){
    let pinEntered;
    while (pinEntered !== account.pin){
        pinEntered = parseInt(prompt ("Please enter your PIN: "));
        if (pinEntered === account.pin){
        }
        else{
            console.log("Incorrect PIN");
        }
    }
}

module.exports.balance = getBalance;
module.exports.withdraw = withdraw;
module.exports.deposit = deposit;
module.exports.validatePin = validatePin;
console.log(module);