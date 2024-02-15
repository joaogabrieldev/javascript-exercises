// 8. Crie uma função que retorne um número aleatório em um intervalo específico.

function aleatorio(numero1, numero2) {
  let resultado = Math.random() * (numero2 - numero1) + numero1;

  return resultado.toFixed(0);
}

// Retornando um numero aleatorio entre 10 e 100
console.log(aleatorio(10, 100));
