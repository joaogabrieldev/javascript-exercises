// 10. Criar um array com 7 números e exibir apenas os números maiores que 5.
let numeros = [1, 2, 3, 4, 5, 6, 7];
let resultado = [];

numeros.forEach((numero) => {
  if (numero > 5) {
    resultado.push(numero);
  }
});

console.log(resultado);
