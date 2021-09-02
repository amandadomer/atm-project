"use strict";

const prompt = require('prompt-sync')();

const atm = require("./atm");

function runProgram(){
    atm.validatePin();
    atmMenu();
}

function atmMenu (){
    console.log("Please choose from one of the following:\n'1. Get Balance'\n'2. Withdraw'\n'3. Deposit'\n'4. Exit'")
    let menu = prompt () 
switch (menu){
        case "1":
        atm.balance();
        atmMenu();
        break;
    case "2":    
        atm.withdraw();
        atmMenu();
        break;
    case "3":
        atm.deposit();
        atmMenu();
        break;    
    case "4":
        break;
    default:
        console.log ("Invalid entry")
        menu;
    break;
    }
}                                    
runProgram ();