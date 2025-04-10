// Mostrar tabuada de um número(Use o for)

var prompt = require('prompt-sync')();
let num = Number(prompt("Digite um número: "));

for (let i = 1; i <= 10; i++) {
    console.log(num + "x" + i + " = " + (num *i));
}