// 7. Criar um array com números de 1 a 10 e remover todos os números pares.

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let numerosSemPares = numeros.filter((numero) => numero % 2 !== 0);

console.log(numerosSemPares);
