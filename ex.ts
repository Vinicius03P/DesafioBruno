const entrada = require("readline-sync");

let num: number = parseFloat(entrada.question("digite um numero: "));
let num1: number = parseFloat(entrada.question("digite um numero: "));
let num2: number = parseFloat(entrada.question("digite um numero: "));



if(num> num1 && num>num2 && num1<num && num1<num2){
    console.log(num + " e o maior numero e " + num1 +" e o menor");
}
if(num> num1 && num>num2 && num2<num && num2<num1){
    console.log(num + " e o maior numero e " + num2 +" e o menor");
}



if(num1>num && num1>num2 && num<num1 && num<num2){
    console.log(num1 + " e o maior numero e " + num + " e o menor");
}
if(num1>num && num1>num2 && num2<num1 && num2<num){
    console.log(num1 + " e o maior numero e " + num2 + " e o menor");
}



if(num2>num && num2>num1 && num<num1 && num<num2){
    console.log(num2 + " e o maior numero e " + num + " e o menor")
}
if(num2>num && num2>num1 && num1<num && num1<num2){
    console.log(num2 + " e o maior numero e " + num1 + " e o menor")
}