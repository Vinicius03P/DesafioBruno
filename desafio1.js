var entrada1 = require("readline-sync");
var nome = entrada1.question("digite seu nome: ");
var salario = parseFloat(entrada1.question("digite seu salario atual: "));
var trabalho = parseFloat(entrada1.question("digite seus anos de trabalho na empresa: "));
if (trabalho < 3) {
    var soma = salario * 1.03;
    console.log("seu novo salario é: " + soma);
}
if (trabalho > 3 && trabalho < 10) {
    var soma1 = salario * 1.125;
    console.log("seu novo salario é: " + soma1);
}
if (trabalho > 10) {
    var soma2 = salario * 1.2;
    console.log("seu novo salario é: " + soma2);
}
