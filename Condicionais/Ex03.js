// Verificar se o usuário pode tirar carteira de motorista
var prompt = require('prompt-sync')();

let Numero = Number(prompt("Ola, Digite seu numero?\n"))

if (Numero %2 == 0) 
{
    console.log("Seu numero eh par!");
}else
{
console.log("Seu numero eh impar!")
}