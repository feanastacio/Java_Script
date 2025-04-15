var prompt = require('prompt-sync')();

let Senha = String(prompt("Ola, Digite sua senha:\n"))
let SenhaCerta = 12345;

if (Senha == SenhaCerta) {
    console.log("Sua senha esta correta👍");
} else {
    console.log("Sua senha esta errada👎");
}