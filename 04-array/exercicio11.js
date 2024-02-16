// 11. Criar um array com números aleatórios e exibir o maior e o menor número.
let numbers = [];
const tamanhoArray = 10;

function gerarNumerosAleatorios(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (let i = 0; i < tamanhoArray; i++) {
  numbers.push(gerarNumerosAleatorios(1, 100));
}

let maxNumber = numbers[0];
for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > maxNumber) {
    maxNumber = numbers[i];
  }
}

let minNumber = numbers[0];
for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] < minNumber) {
    minNumber = numbers[i];
  }
}

console.log("Array gerado:", numbers);
console.log("Maior numero:", minNumber);
console.log("Menor numero:", maxNumber);
