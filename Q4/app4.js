function numberPalindrome(element){
    let rem,sum = 0;
    let e=element;
    while(e > 0){
        rem = parseInt(e % 10);
        sum=(sum*10)+rem;
        e= Math.floor(e/10);
    }

    if(element == sum){
        console.log("They are palindrome. element : "+element+" | sum : "+sum);
    }else{
        console.log("They aren't palindrome. element : "+element+" | sum : "+sum);
    }
}


function stringPalindrome(stringElement){
    const len = stringElement.length;
    let isPalindrome = true;

    for(let i=0; i<len/2; i++){
        if(stringElement[i] !== stringElement[len - 1 - i]){
            isPalindrome = false;
            break;
        }
    }

    if(isPalindrome){
        console.log(stringElement+" is Palindrome.");
    }else{
        console.log(stringElement+" is not Palindrome.");
    }
}


let element = prompt("Enter a number : ")
numberPalindrome(element);


let stringElement = prompt("Enter a string : ")
stringPalindrome(stringElement);