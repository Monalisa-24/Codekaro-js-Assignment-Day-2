function larger(num1, num2){
    if(num1 > num2){
        console.log("num1 is largest. num1 : "+num1+" | num2 : "+num2);
    }else{
        console.log("num2 is largest. num1 : "+num1+" | num2 : "+num2);
    }
}

let num1 = prompt("Enter the first number : ");
let num2 = prompt("Enter the second number : ")

larger(num1, num2);
