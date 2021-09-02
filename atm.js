"use strict";

const bankInfo = require("./account");
    console.log(bankInfo);

function getBalance () {
    console.log(bankInfo.balance);
}

function withdraw (){
    let userEntry = parseInt(prompt ("Enter the amount you want to withdraw"));
    account.balance = account.balance - userEntry;
        console.log ("Your new balance is $" + account.balance);
}

function deposit (){
    let userEntry = parseInt(prompt ("Enter the amount you want to deposit?"));
    account.balance = account.balance + userEntry;
        console.log ("Your new balance is $"+ account.balance);
}

function validatePin (){
    let pinEntered;
    while (pinEntered !== account.pin){
        pinEntered = prompt ("Please enter your PIN");
        console.log ("Incorrect PIN");
        if (pinEntered === account.pin){
            console.log ("Correct PIN");    
        }
    }
}

module.exports.balance = getBalance;
module.exports.withdraw = withdraw;
module.exports.deposit = deposit;
module.exports.validate = validatePin;
console.log(module);