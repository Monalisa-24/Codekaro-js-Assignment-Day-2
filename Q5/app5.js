function primeSeries(lr, hr) {
    for(let i=lr; i<= hr; i++){
        let flag = 0;
        for(let j=2; j<i; j++){
            if(i%j == 0){
                flag = 1;
                break;
            }
        }
        if(i>1 && flag == 0){
            console.log(i);
        }
    } 
}

let lr = parseInt(prompt("Enter a  lowerRange: "));
let hr = parseInt(prompt("Enter a  higherRange: "));

console.log("The number between "+lr+" and "+ hr +": ");
primeSeries(lr, hr);



// -------------------------------------------------------------------------
// prime number checking

// function primeCheck(number) {
//     let n = parseInt(number);
//     let isPrime = true;

//     if (n < 0) {
//         console.log(number + " is a negative number.");
//     } else if (n > 1) {
//         for (let i = 2; i <= n/2; i++) {
//             if (n % i == 0) {
//                 console.log(number + " is not a prime number.");
//                 isPrime = false;
//                 break;
//             }
//         }
//         if (isPrime) {
//             console.log(number + " is a prime number.");
//         }
//     } else {
//         console.log("0, 1: they are neither prime nor non-prime.");
//     }
// }

// let number = prompt("Enter a number: ");
// primeCheck(number);


