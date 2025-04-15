let now = new Date();
let horaBrasil = now.toLocaleString("pt-BR", {timeZone: "America/Sao_Paulo"});
horaBrasil = now.toLocaleDateString("pt-BR", {timeZone: "America/Sao_Paulo"}); // Somente data
horaBrasil = now.toLocaleTimeString("pt-BR", {timeZone: "America/Sao_Paulo"}); // Somente a hora
console.log(horaBrasil);
console.log(now.getFullYear());
console.log(now.getDay());
console.log(now.getDate());
console.log(now.getMilliseconds());
console.log(now.getMonth());
