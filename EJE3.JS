// ---------------------------
  // EJERCICIO 3: Contar elementos pares
  function contarPares(array) {
    let contador = 0;
    for (let i = 0; i < array.length; i++) {
      if (array[i] % 2 === 0) contador++;
    }
    return contador;
  }
  const datosEj3 = [1, 2, 3, 4, 5, 6];
  console.log("Ejercicio 3 - Pares:", contarPares(datosEj3));