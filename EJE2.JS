 // ---------------------------
  // EJERCICIO 2: Número mayor y menor
  function obtenerMayorYMenor(array) {
    let mayor = array[0];
    let menor = array[0];
    for (let i = 1; i < array.length; i++) {
      if (array[i] > mayor) mayor = array[i];
      if (array[i] < menor) menor = array[i];
    }
    return { mayor, menor };
  }
  const datosEj2 = [25, 7, 89, 3, 42, 12];
  const resultado2 = obtenerMayorYMenor(datosEj2);
  console.log("Ejercicio 2 - Mayor:", resultado2.mayor);
  console.log("Ejercicio 2 - Menor:", resultado2.menor);