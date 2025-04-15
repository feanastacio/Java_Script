var prompt = require('prompt-sync')();
let num = 0;

do{
console.log("-------------------------");
console.log("|                        |");
console.log("|  1- Entrar             |");
console.log("|  2- Logar              |");
console.log("|  3- Sair               |");
console.log("--------------------------");

num = Number(prompt("Digite um numero :"))

}while(num!==0)
