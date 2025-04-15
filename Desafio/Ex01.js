//Crie um sistema que permita cadastrar nomes. Antes de adicionar,
//verifique se o nome já está na lista (ignore maiúsculas/minúsculas). Se
//não estiver, adicione o usuário.

var prompt = require('prompt-sync')();
let Lista = ["Fernanda","Anna", "Joao"]
let Nomes = prompt("Digite seu nome: ").toLowerCase();

if (Lista.includes(Nomes)) {
    console.log("Esse nome de usuário já está sendo ultilizado ");
} else {
    Lista.push(Nomes);
    console.log("Cadastro realizado com sucesso.");
}



