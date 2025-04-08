// EJERCICIO 9: Primer múltiplo de 5
function primerMultiploDe5(array) {
    return array.find(num => num % 5 === 0);
  }
  const datosEj9 = [1, 3, 7, 10, 14];
  console.log("Ejercicio 9 - Primer múltiplo de 5:", primerMultiploDe5(datosEj9));