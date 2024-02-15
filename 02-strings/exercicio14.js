// 14. Verifique se uma string é um palíndromo.

function verificarPalindromo(string) {
  // Remover espaços e converter para minúsculas para evitar problemas de sensibilidade a maiúsculas e minúsculas
  string = string.toLowerCase().replace(/\s/g, "");

  // Comparar a string original com sua forma invertida
  return string === string.split("").reverse().join("");
}

var stringExemplo = "arara";
if (verificarPalindromo(stringExemplo)) {
  console.log("A string é um palíndromo.");
} else {
  console.log("A string não é um palíndromo.");
}
