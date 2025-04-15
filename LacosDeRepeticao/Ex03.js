let senhaCorreta = 12345;
let prompt = require('prompt-sync')();

let senhaInfomada = prompt("Digite a senha:")

while (senhaCorreta != senhaInfomada) 
{
    senhaInfomada = Number(prompt("A senha esta errada digite novamente:"))
    
}

