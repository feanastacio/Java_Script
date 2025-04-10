// Dia da semana por número(Switch case)

var prompt = require('prompt-sync')();
let dia = Number(prompt("Digite um número do dia da semana:"));

switch(dia){
    case 1:
        console.log("Hoje é Domingo")
        break;
    case 2:
        console.log("Hoje é Segunda")
        break;
    case 3:
        console.log("Hoje é Terça")
        break;
    case 4:
        console.log("Hoje é Quarta")
        break;
    case 5:
        console.log("Hoje é Quinta")
        break;
    case 6:
        console.log("Hoje é Sexta")
        break;
    case 7:
        console.log("Hoje é Sabado")
        break;

    default:
        console.log("O dia não foi reconhecido")
}