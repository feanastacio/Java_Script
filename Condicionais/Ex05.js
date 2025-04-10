// Verificar se um aluno foi aprovado

var prompt = require('prompt-sync')();
let notaaluno = Number(prompt("Digite sua nota:"));
let media = 5;

if (notaaluno >= media) {
    console.log("O aluno foi aprovado")
} else {
    console.log("O aluno foi reprovado")
}
