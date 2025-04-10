// Verificar se uma senha digitada está correta

var prompt = require('prompt-sync')();
let senha = prompt("Digite sua senha:");
let senhacerta = 123321;

if (senha == senhacerta) {
    console.log("Senha correta")
} else {
    console.log("Senha incorreta")
}