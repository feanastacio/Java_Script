// Verificar se um número é positivo, negativo ou zero.
var prompt = require('prompt-sync')();

let Numero = Number(prompt("Ola, Digite seu numero?\n"))

if (Numero == 0)
{
    console.log("Seu numero eh 0")
}else if(Numero < 0)
{
console.log("Seu numero eh negativo👎")
}else
{
console.log("Seu numero eh positivo👍")
}