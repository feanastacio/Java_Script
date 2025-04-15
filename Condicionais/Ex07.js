var prompt = require('prompt-sync')();

let Mes = Number(prompt("Ola, Digite seu mes:"));


switch (Mes) {
    case 1:
        console.log("Seu mes eh Janeiro");
        break;

    case 2:
        console.log("Seu mes eh Fevereiro");
        break;

    case 3:
        console.log("Seu mes eh Marco");
        break;

    case 4:
        console.log("Seu mes eh Abril");
        break;

    case 5:
        console.log("Seu mes eh Maio");
        break;
        
    case 6:
        console.log("Seu mes eh Junho");
        break;

    case 7:
        console.log("Seu mes eh Julho");
        break;
    case 8:
        console.log("Seu mes eh Agosto");
        break;
    case 9:
        console.log("Seu mes eh Setembro");
        break;
    case 10:
        console.log("Seu mes eh Outubro");
        break;
    case 11:
        console.log("Seu mes eh Novembro");
        break;
    case 12:
        console.log("Seu mes eh Dezembro");
        break;

    default:
        console.log("Informacao invalida!😞");
}