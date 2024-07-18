#! /usr/bin/env node
import { differenceInSeconds } from "date-fns";
import inquirer from "inquirer";
const response = await inquirer.prompt([{
        type: "number",
        name: "userinput",
        message: "Please Enter the amount of seconds ",
        validate: (input) => {
            if (isNaN(input)) {
                return "Please Enter a valid number";
            }
            else if (input > 60) {
                return "second must be in 120";
            }
            else {
                return true;
            }
        }
    }]);
let input = response.userinput;
function startTime(val) {
    const intime = new Date().setSeconds(new Date().getSeconds() + val);
    const intervalTime = new Date(intime);
    setInterval((() => {
        const currentTime = new Date();
        const timeDiff = differenceInSeconds(intervalTime, currentTime);
        if (timeDiff <= 0) {
            console.log("Timer has Expired");
            process.exit();
        }
        const min = Math.floor((timeDiff % (3600 * 24)) / 3600);
        const sec = Math.floor(timeDiff % 60);
        console.log(`${min.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`);
    }), 1000);
}
startTime(input);
