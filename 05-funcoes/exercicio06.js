// 6. Crie uma função que aceite um array de números e retorne o maior deles.

let numeros = [10, 20, 30, 40, 50];

function maiorNumero(numeros) {
  let maiorElemento = 0;
  numeros.forEach(function (elemento) {
    if (elemento > maiorElemento) {
      maiorElemento = elemento;
    }
  });

  return maiorElemento;
}

console.log("O maior elemento é:", maiorNumero(numeros));
