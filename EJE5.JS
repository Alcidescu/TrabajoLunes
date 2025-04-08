// ---------------------------
  // EJERCICIO 5: Buscar un elemento
  function buscarElemento(array, nombre) {
    return array.indexOf(nombre);
  }
  const datosEj5 = ["Ana", "Luis", "Pedro", "Sofía"];
  console.log("Ejercicio 5 - Posición de 'Pedro':", buscarElemento(datosEj5, "Pedro"));