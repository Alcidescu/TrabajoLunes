// ---------------------------
  // EJERCICIO 8: Sumar solo positivos
  function sumarPositivos(array) {
    let suma = 0;
    for (let i = 0; i < array.length; i++) {
      if (array[i] > 0) suma += array[i];
    }
    return suma;
  }
  const datosEj8 = [5, -3, 7, -1, 10];
  console.log("Ejercicio 8 - Suma positivos:", sumarPositivos(datosEj8));
  // ---------------------------
  // ---------------------------
  // ---------------------------