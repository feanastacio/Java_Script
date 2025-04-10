// Verificar se um número é positivo, negativo ou zero.

var prompt = require('prompt-sync')();
let n = Number(prompt("Digite um número:"));

if (n < 0) {
    console.log("O seu número é negativo")
} else if (n == 0) {
    console.log("O seu número é 0")
} else if (n > 0) {
    console.log("Seu número é positivo")
} else {
    console.log("Informação inválida")
}