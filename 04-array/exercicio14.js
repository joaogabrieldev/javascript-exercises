// 14. Criar um array com 5 números e calcular a média deles.

let numeros = [10, 2, 2, 2, 2];

let media =
  numeros.reduce((acumulador, elemento) => acumulador + elemento, 0) /
  numeros.length;

console.log(media);
