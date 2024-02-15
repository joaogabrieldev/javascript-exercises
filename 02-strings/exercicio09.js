// 9. Extraia a última palavra de uma frase.

let frase = "Eu estou estudando javascript";
let palavras = frase.split(" ");

console.log(palavras[palavras.length - 1]); // Metodo 01
console.log(palavras.pop()); // Metodo 02
