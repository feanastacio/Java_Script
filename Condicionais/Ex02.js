// Verificar se o usuário pode tirar carteira de motorista

var prompt = require('prompt-sync')();
let idade = Number(prompt("Olá digite sua idade:"));

if (idade >= 18) {
    console.log("Você pode fazer a cateira de motorista!")
} else if (idade <= 18){
    console.log("Infelizmente vai ter que esperar mais um pouco!")
} else {
    console.log("Essa resposta é inválida!")
}