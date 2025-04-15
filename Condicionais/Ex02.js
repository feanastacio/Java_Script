//Verificar se o usuário pode tirar carteira de motorista

var prompt = require('prompt-sync')();

let Idade = prompt("Ola, Digite sua idade?\n")

if (Idade >= 18) 
{
    console.log("Voce pode tirar a carteira🚗")
}
else if(Idade < 18)
{
console.log("Voce nao pode tirar a carteira😒")
}
else
{
console.log("Essa informaçao nao eh valida!🤔")
}