// 13. Criar dois arrays, um com números pares e outro com números ímpares, e depois unir em um único array.

let numerosPares = [2, 4, 6, 8, 10, 12, 14, 16, 18];
let numerosImpares = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];

// Juntando os arrays
let numeros = numerosImpares.concat(numerosPares);

// Colocando em ordem
numeros.sort(function (a, b) {
  return a - b;
});

//Imprimindo na tela
console.log(numeros);
