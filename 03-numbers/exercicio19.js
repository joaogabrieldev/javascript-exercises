// 19. Implemente uma função que retorne verdadeiro se um número for positivo, falso caso contrário.

function verificarPositivo(numero) {
  return numero > 0 ? "positivo" : numero === 0 ? "zero" : "negativo";
}

console.log(verificarPositivo(-2109));
