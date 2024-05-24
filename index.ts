#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk"
console.log(chalk.bold.magenta(`<===> ${chalk.italic.red('Welcom to \ Ghulam Nasir\"Guest Verification Center')} <===>` ));
let myLoop = true
let myInvitedGuestList = ["faisal", "rizwan", "imran", "irfan", "fahad", "tanzeel", "moaviya", "mobasshir"];

while(myLoop){
    let userInput = await inquirer.prompt({
        type: "input",
        name: "userName",
        message: "Please Enter your Name"
    
    });
    let guestName = userInput.userName;
    let lowerGuestName = guestName.toLowerCase();

     if(myInvitedGuestList.includes(lowerGuestName)){
        console.log(`Welcome Mr. ${guestName}! Please, Make your self comfortable`);
        myLoop = false
    
        
    }else{
        
        console.log(`\nSorry, Mr. ${guestName}. your name is not on the guest list for today.\n`)

        let askNameAgain = await inquirer.prompt({
            type: "confirm",
            name: "otherName",
            message: "Do you have another name you go by? if so, we can check again",
            default: false
        })
        if(!askNameAgain.otherName){
            myLoop: false
            console.log(`\nWe appologise, but you are not the guest list. Please contact the event organizer.\n`);
            
        }
    }

        
    }
