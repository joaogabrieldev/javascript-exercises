// 8. Criar um array com 6 números e ordená-los em ordem decrescente.

let numeros = [30, 25, 38, 50, 129, 3];

numeros.sort(function (a, b) {
  return b - a;
});

console.log(numeros);

/* Neste exemplo, a função de comparação (a, b) => b - a é passada para o método sort(). Isso faz com que o array seja ordenado em ordem decrescente, subtraindo b de a. Se o resultado da subtração for negativo, b será colocado antes de a, resultando em uma ordem decrescente. Se for positivo, a será colocado antes de b, resultando em uma ordem crescente.
 */
