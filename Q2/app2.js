function factorial(number){
    let fact = 1;
    if(number == 0 || number == 1){
        console.log(number+"! = 1");
    }else{
        for(let i=2; i<=number; i++){
            fact *= i;
        }
        console.log(number+"! = "+fact);
    }
}


let number = prompt("Enter a number to calculate factorial : ");
factorial(number);