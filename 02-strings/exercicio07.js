// 7. Verifique se uma string contém a palavra "JavaScript".

let frase = "Javascript é a melhor linguagem de programação";
let palavra = "Python";

let resultado = frase.toLowerCase().includes(palavra.toLowerCase())
  ? `A palavra ${palavra} está dentro da frase`
  : `Não está na frase`;

console.log(resultado);
