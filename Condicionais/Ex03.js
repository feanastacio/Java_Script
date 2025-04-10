// Verificar se um número é par ou ímpar

var prompt = require('prompt-sync')();
let n = Number(prompt("Digite um número:"));

if (n %2 == 0) {
    console.log("Seu número é par")
} else {
    console.log("Seu número é ímpar")
}