function calculator(n1, n2){

    n1 = parseInt(n1);
    n2 = parseInt(n2);

    let add = n1+n2;
    let sub = n1-n2;
    let mul = n1*n2;
    let div = n1/n2;

    console.log("Result : \n-----------\nnumber1, number2 = "+n1+" , "+n2+"\nAdd : "+add+"\nSub : "+sub+"\nMul : "+mul+"\nDiv : "+div);
}

let n1 = prompt("Enter the first number : ");
let n2 = prompt("Enter the second number : ");

calculator(n1,n2);