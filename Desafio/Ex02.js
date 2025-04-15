//Crie um array de objetos com produtos e precos. Exiba no console o nome e o preço com R$ formatado.

let objetos = [
    {produto: "Piranha", preco: 5.50},
    {produto: "Xícara", preco: 9.99},
    {produto: "Prato", preco: 21.99}
  ]
  
  let objetoNomes = objetos.map(objeto => objeto.produto);
  let objetoPreco = objetos.map(objeto => objeto.preco);
  
  console.log(objetoNomes); // Somente o nome do produto 
  console.log(objetoPreco); // Somente o preço do produto
  console.log(objetos); // Ambos