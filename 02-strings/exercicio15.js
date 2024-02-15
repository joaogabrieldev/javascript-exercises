// 15. Substitua todas as vogais em uma string por um caractere específico.

function substituirVogais(str, substituicao) {
  // Usar expressão regular para substituir todas as vogais na string
  return str.replace(/[aeiouAEIOU]/g, substituicao);
}

var stringExemplo = "Aprendendo javascript com exercicios";
var stringSubstituida = substituirVogais(stringExemplo, "*");

console.log("String original: " + stringExemplo);
console.log("String com vogais substituídas: " + stringSubstituida);
