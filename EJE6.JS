// ---------------------------
  // EJERCICIO 6: Revertir un array sin reverse
  function invertirArray(array) {
    let invertido = [];
    for (let i = array.length - 1; i >= 0; i--) {
      invertido.push(array[i]);
    }
    return invertido;
  }
  const datosEj6 = [1, 2, 3, 4, 5];
  console.log("Ejercicio 6 - Invertido:", invertirArray(datosEj6));