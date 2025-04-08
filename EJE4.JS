// ---------------------------
  // EJERCICIO 4: Ordenar array sin sort
  function ordenarArray(array) {
    let copia = [...array];
    for (let i = 0; i < copia.length; i++) {
      for (let j = i + 1; j < copia.length; j++) {
        if (copia[i] > copia[j]) {
          [copia[i], copia[j]] = [copia[j], copia[i]];
        }
      }
    }
    return copia;
  }
  const datosEj4 = [5, 2, 9, 1, 7];
  console.log("Ejercicio 4 - Ordenado:", ordenarArray(datosEj4));
  
  // ---------------------------