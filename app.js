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
  // EJERCICIO 5: Buscar un elemento
function buscarElemento(array, nombre) {
    return array.indexOf(nombre);
  }
  const datosEj5 = ["Ana", "Luis", "Pedro", "Sofía"];
  console.log("Ejercicio 5 - Posición de 'Pedro':", buscarElemento(datosEj5, "Pedro"));
  
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
  
  // ---------------------------
  // EJERCICIO 7: Convertir a mayúsculas
  function convertirAMayusculas(nombres) {
    return nombres.map(nombre => nombre.toUpperCase());
  }
  const datosEj7 = ["Alcides", "Gino", "Fernando"];
  console.log("Ejercicio 7 - Mayúsculas:", convertirAMayusculas(datosEj7));
  
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
  // ---------------------------
  // EJERCICIO 9: Primer múltiplo de 5
  function primerMultiploDe5(array) {
    return array.find(num => num % 5 === 0);
  }
  const datosEj9 = [1, 3, 7, 10, 14];
  console.log("Ejercicio 9 - Primer múltiplo de 5:", primerMultiploDe5(datosEj9));


  // ---------------------------
// EJERCICIO 10: Tabla de multiplicar
function tablaMultiplicar(numero) {
    console.log(`Ejercicio 10 - Tabla del ${numero}:`);
    for (let i = 1; i <= 10; i++) {
      console.log(`${numero} x ${i} = ${numero * i}`);
    }
  }
  tablaMultiplicar(7);

  // ---------------------------
// EJERCICIO 11: Fibonacci de 10 números
function fibonacci10() {
    let a = 0, b = 1;
    console.log("Ejercicio 11 - Fibonacci (10 números):");
    for (let i = 0; i < 10; i++) {
      console.log(a);
      [a, b] = [b, a + b];
    }
  }
  fibonacci10();
  
  // ---------------------------

  // EJERCICIO 12: Adivinar número (requiere readline)
const readline12 = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
  });
  function adivinarNumero() {
    const secreto = Math.floor(Math.random() * 10) + 1;
    function preguntar() {
      readline12.question("Ejercicio 12 - Adivina el número (1-10): ", respuesta => {
        const numero = parseInt(respuesta);
        if (numero === secreto) {
          console.log("¡Correcto!");
          readline12.close();
        } else {
          console.log("Incorrecto, intenta de nuevo.");
          preguntar();
        }
      });
    }
    preguntar();
  }
  // adivinarNumero(); // Descomenta para probar
  