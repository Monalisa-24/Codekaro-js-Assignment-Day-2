function vowelCount(string){
    let len = string.length;
    let count=0;

    for(let i=0; i<len; i++){
        if(string[i] == 'a' || string[i] == 'e' || string[i] == 'i' || string[i] == 'o' || string[i] == 'u'|| string[i] == 'A' || string[i] == 'E' || string[i] == 'I' || string[i] == 'O' || string[i] == 'U'){
            count = count+1;
        }
    }
    console.log("Given string : "+string);
    console.log("Vowels count = "+count);
}


let string = prompt("Enter a string : ");
vowelCount(string);