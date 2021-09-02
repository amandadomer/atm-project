"use strict";

const atm = require("./atm");
    console.log(atm);

atm.validate;

function atmMenu (){
let menu = prompt ("Please choose from one of the following: '1. Get Balance'\n'2. Withdraw'\n'3.Deposit'\n'4. Exit'")
    switch (menu){
        case "1":
        atm.balance;
        atmMenu ();
        break;
    case "2":    
        atm.withdraw;
        atmMenu ();
        break;
    case "3":
        atm.deposit;
        atmMenu ();
        break;    
    case "4":
        break;
    default:
        console.log ("Invalid entry")
        menu;
    break;
    }
}                                    