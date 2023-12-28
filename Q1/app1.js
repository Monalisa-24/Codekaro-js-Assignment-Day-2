function numberChecking(number){
    if(number > 0){
        console.log(number + " is a positive number.");
    }else if(number == 0){
        console.log("It's equal to 0.");
    }else{
        console.log(number + " is a negative number.");
    }
}


let number = prompt("Welcome! Please enter a number : ");
numberChecking(number);



