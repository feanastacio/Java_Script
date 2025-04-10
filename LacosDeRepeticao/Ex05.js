// Menu simples até o usuário sair(Use o do...While)

let prompt = require('prompt-sync')();
let num = 0;

do {
console.log(" ________________");
console.log("|                |");
console.log("|    1- Jogar    |");
console.log("|    2- Config   |");
console.log("|    0- Sair     |");
console.log("|________________|");

num = Number(prompt("Digite um numero: "))
   
} while (num !== 0);