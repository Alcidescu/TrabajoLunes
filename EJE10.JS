// EJERCICIO 10: Tabla de multiplicar con input por terminal

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function tablaMultiplicar(numero) {
  console.log(`\nEjercicio 10 - Tabla del ${numero}:`);
  for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
  }
  rl.close(); // Cierra la interfaz después de mostrar la tabla
}

// Preguntar al usuario
rl.question("Ingresa un número para mostrar su tabla de multiplicar: ", respuesta => {
  const numero = parseInt(respuesta);
  if (!isNaN(numero)) {
    tablaMultiplicar(numero);
  } else {
    console.log("Por favor ingresa un número válido.");
    rl.close();
  }
});
