// 6. Criar um array com 4 números e multiplicar cada número por 2, exibindo o resultado.

let numeros = [20, 30, 40, 50];

numeros.forEach(function (elemento, indice, arrayOriginal) {
  arrayOriginal[indice] = elemento * 2;
});

console.log(numeros);
