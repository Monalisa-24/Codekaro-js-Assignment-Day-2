function fibonacciSeries(term){
    let a=0, b=1, c;

    console.log("Fibonacci Series : "+term+"th term : \n-----------------------------------\n");
    for(let i =1  ; i<=term; i++){
        console.log(a);
        c=a+b;
        a=b;
        b=c;
    }
}

let term = parseInt(prompt("Enter the terms : "));
fibonacciSeries(term);