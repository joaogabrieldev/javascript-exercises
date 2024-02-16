// 4. Criar um array com 3 números e calcular a soma deles.

let numeros = [17, 23, 35];
const soma = numeros.reduce((acumulador, elemento) => acumulador + elemento, 0);
console.log(`Resultado da soma de todos os elementos do array: ${soma}`);

// O método reduce() itera sobre cada elemento do array e acumula um valor, que é o resultado da operação realizada em cada elemento.
// acumulador é o valor acumulado ate o momento, e 0 é o valor inicial do acumulador
// elemento é o elemento atual sendo processado
