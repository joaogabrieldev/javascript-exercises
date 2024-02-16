// 20. Criar um array com 6 números e substituir os 3 primeiros números pelos números 1, 2 e 3, respectivamente.

let numeros = [10, 20, 30, 40, 50, 60];

// metodo splice que pode deletar ou substituir mais de um elemento em um array
// 0 = inicio
// 3 = quantidade
// Os ultimos 3 arg são os elementos a serem inseridos
numeros.splice(0, 3, 1, 2, 3);

console.log(numeros);
