// 20. Verifique se uma string contém apenas números.

function verificarNumeros(str) {
  if (/^\d+$/.test(str)) {
    return "Essa string possui apenas numeros";
  } else {
    return "Essa string não possui apenas numeros";
  }
}

let string = "1234JoaoGabriel";
console.log(verificarNumeros(string));
