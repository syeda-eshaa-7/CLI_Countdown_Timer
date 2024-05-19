import inquirer from 'inquirer';
import { differenceInSeconds } from "date-fns";
//              all the date and time objects            // 
// let date_obj = new Date()
// let date = ("0" + date_obj.getDate()).slice(-2)
// let month = ("0" +(  date_obj.getMonth()+1)).slice(-2)
// let year = date_obj.getFullYear()
// let hours = date_obj.getHours()
// let minutes = date_obj.getMinutes()
// let second = date_obj.getSeconds()
// console.log(`${year}-${month}-${date}`);
// console.log(`${year}-${month}-${date} ${hours}:${minutes}:${second}`);
// console.log(` ${hours}:${minutes}`);
// let date_now = Date .now()
// console.log(date_now);
// console.log(Math.floor(date_now / 1000) );
// let date_ob = new Date (date_now)
// let date2 = date_ob.getDate()
// let month2 = date_ob.getMonth()+1
// let full_year = date_ob.getFullYear()
// console.log(`${date2}-${month2}-${full_year}`);
// ***************countdown timer********************
let ans = await inquirer.prompt([
    {
        name: "userInput",
        type: "number",
        message: "Please enter a amount in seconds"
    }
]);
let input = ans.userInput;
function startTime(val) {
    const time = new Date().setSeconds(new Date().getSeconds() + val);
    const intervalTime = new Date(time);
    setInterval(() => {
        let currentTime = new Date();
        let diffTime = differenceInSeconds(intervalTime, currentTime);
        if (diffTime <= 0) {
            console.log(`timer has been expierd`);
            process.exit();
        }
        const minuts = Math.floor((diffTime % (3600 * 24) / 3600));
        const second = Math.floor(diffTime % 60);
        console.log(`${minuts.toString().padStart(2, "0")} : ${second}`);
    }, 1000);
}
startTime(input);
