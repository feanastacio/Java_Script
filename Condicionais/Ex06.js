//f. Dia da semana por número(Switch case)

var prompt = require('prompt-sync')();

let Dia = Number(prompt("Digite um dia da semana:"));

switch (Dia) {
    case 1:
        console.log("O dia escolhido foi domingo");
        break;

    case 2:
        console.log("O dia escolhido foi segunda");
        break;

    case 3:
        console.log("O dia escolhido foi terca");
        break;

    case 4:
        console.log("O dia escolhido foi quarta");
        break;

    case 5:
        console.log("O dia escolhido foi quinta");
    case 6:
        console.log("O dia escolhido foi sexta");
        break;

    case 7:
        console.log("O dia escolhido foi sabado");
        break;

    default:
        console.log("Informacao invalida!😞");
}