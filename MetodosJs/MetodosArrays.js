// --------------------------------------------

// .length() => tamanho
// let frutas = ["Maçã", "Banana", "Kiwi", "Carambola", "Morango", "Ameixa", 
//     "Abacate", "Jabuticaba", "Romã", "Seriguela", "Embu", "Caqui", 
//     "Uva verde", "Uva roxa"];

// console.log(frutas.length);

// let numeros = [20,5,3];
// console.log(numeros.length);

// --------------------------------------------

// .reverse() => reverte o nosso array
// let numeros = [70, 100, 120, 1000];
// numeros.reverse();

// console.log(numeros);
// --------------------------------------------

// let nomes = ["Valdemir", "Anna", "Edson", "Carolina", "Clarissa"];
// // .push() => Adiciona no final 
// nomes.push("Carolina");

// // .unshift() => Adiciona no inicio
// nomes.unshift("Anna");

// // .pop() => Remover no final 
// nomes.pop(); //console.log(nomes.pop(""));

// // .splice() => Adiciona ou remove elementos do array
// // console.log(nomes.splice(1,4))

// // .shift() => Remove no inicio
// nomes.shift();
// console.log(nomes);
// --------------------------------------------

// .incluides() =>  Se existe no array, se existir eke ira retornar
// let nomesPets = ["Julie", "Meg", "Mel", "Tom", "Lola",
//     "Kiara", "Laila"];

// console.log(nomesPets.includes("Tom")); //true or false
// --------------------------------------------

// let valores = [16, 35, 21, 14, 27, 8];
// let maiores = valores.filter(num => num > 30); //Verificação para ver quais num são maiores que 30

// console.log(maiores);
// --------------------------------------------

// .map() => Definição: Método usado em arrays que permite transformar 
// elementos do array original em novos valores, criando um novo array, 
// sem modificar o oriinal.

// lista de nomes de alunos e notas
    // let alunos = [
    //     {nome:"Isadora", nota: 2},
    //     {nome:"Benedita", nota: 7},
    //     {nome:"Roberta", nota: 8},
    //     {nome:"Emilly", nota: 3}
    // ];

    // // Lista de nomes
    // let alunoNomes = alunos.map(aluno => aluno.nome);
    // // Lista de notas
    // let alunoNota = alunos.map(aluno => aluno.nota);

    // console.log(alunoNomes); // Exibir só nome
    // console.log(alunoNota); // Exibir só nota
    // console.log(alunos); // Exibir ambos

    // // Função:
    // let alunoNomes2 = alunos.map(function(aluno){
    //     return aluno.nome;
    // })
    // console.log(alunoNomes2);

// 2- Criar um array com mensagens personalizadas
// let nomes = ["Caio", "David", "Ryan", "Vinicius"];
// // Olá Caio

// let mensagem = nomes.map(itemDoArrayNomes => `Oi, ${itemDoArrayNomes}`);
// console.log(mensagem); 

// 3- Pegar apenas os primeiros caracteres de nomes 
// let nomes = ["LUcas", "Vitor", "Emilly", "JOao"];
// let inicialNomes = nomes.map(Element => Element [0]);
// console.log(inicialNomes);

// 4- Emails: vinipolimenor@gmail.com, emillyzinhafeliz@gmail.com kauezinhodograu@gmail.com

let Emails = [
    "vinipolimenor@gmail.com", "emillyzinhafeliz@hotmail.com", "kauezinhodograu@outlook.com" ]
    let dominios = Emails.map(Element => Element.split("@")[1]); // EXibir o tipo de email
    dominios = Emails.map(Element => Element.split("@")[0]); // Exibir nome 
    dominios = Emails.map(Element => Element.split("@")); // Exibir ambos
    console.log(dominios);  
// --------------------------------------------


    