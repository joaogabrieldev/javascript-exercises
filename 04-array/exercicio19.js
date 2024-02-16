// 19. Criar um array com números e verificar se todos os números são positivos.

// Lista de numeros
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 10];

// Função que utiliza do metodo every que recebe uma condição e verifica se todos os numeros são positivos
function todosNumerosPositivos(array) {
  return array.every((num) => num > 0);
}

// armazenando o resultado da função na variavel resultado
let resuldado = todosNumerosPositivos(numeros);

// Mostrando a resposta no console
console.log(resuldado);
