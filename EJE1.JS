// ---------------------------
// EJERCICIO 1: Sumar elementos de un array
function sumarElementos(array) {
  let suma = 0;
  for (let i = 0; i < array.length; i++) {
    suma += array[i];
  }
  return suma;
}
const datosEj1 = [1, 2, 3, 5];
console.log("Ejercicio 1 - Suma:", sumarElementos(datosEj1));
