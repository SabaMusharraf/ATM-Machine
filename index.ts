import inquirer from "inquirer";

let myBalance = 5000;
let myPin = 1234;

let pinAns = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "Enter your Pin Code"
    }
])
if(pinAns.pin === myPin){
    console.log("Correct Pin Code, Login Successfully");

let operationAns = await inquirer.prompt([
    {
        name: "operation",
        type: "list",
        message: "Choose an operation",
        choices: ["Withdraw Amount", "Check Balance"]
    }
])
if(operationAns.operation === "Withdraw Amount"){
    let amountAns = await inquirer.prompt([
        {
            name: "amount",
            type: "number",
            message: "Enter your amount to withdraw"
        }
    ])
    if(amountAns < myBalance ){
        console.log("Insufficient Balance");
    }
    else{
        myBalance -= amountAns.amount;
        console.log(`${amountAns.amount} is successfully withdraw`);
        console.log(`Your remaining account balance is ${myBalance}`);
    }
}
else if(operationAns.operation === "Check Balance"){
    console.log(`Your Account Balance is ${myBalance}`);
}
}
else{
    console.log("you entered wrong pin code, try again");
}
