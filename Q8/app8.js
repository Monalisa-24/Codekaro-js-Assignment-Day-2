function perfectNumber(number){
    let sum = 0;
    let n = number;

    console.log("Divisors of "+number+" is : ");
    for(let i=1; i<=(n/2); i++){
        if(n%i == 0){
            sum = sum + i;
        }
        console.log(i+" ");
    }
    if(sum == number){
        console.log(n+" is a perfect number.");
    }else{
        console.log(n+" is not a perfect number.");
    }

}

let number = prompt("Enter the number : ");
perfectNumber(number);