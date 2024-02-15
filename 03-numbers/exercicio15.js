// 15. Calcule a porcentagem de um número em relação a outro.

function porcentagem(numero1, numero2) {
  let resultado = (numero1 / numero2) * 100;

  return `A porcentagem do numero ${numero1} em relação ao numero ${numero2} é de ${resultado.toFixed(
    2
  )}%`;
}

console.log(porcentagem(30, 234));
