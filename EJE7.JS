 // ---------------------------
  // EJERCICIO 7: Convertir a mayúsculas
  function convertirAMayusculas(nombres) {
    return nombres.map(nombre => nombre.toUpperCase());
  }
  const datosEj7 = ["Alcides", "Gino", "Fernando"];
  console.log("Ejercicio 7 - Mayúsculas:", convertirAMayusculas(datosEj7));