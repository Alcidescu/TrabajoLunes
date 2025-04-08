// EJERCICIO 13: Cuenta regresiva desde un número ingresado por el usuario

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function cuentaRegresiva(desde) {
  console.log(`\nEjercicio 13 - Cuenta regresiva desde ${desde} hasta 0:`);
  while (desde >= 0) {
    console.log(desde);
    desde--;
  }
  rl.close(); // cerramos la terminal
}

// Pedimos al usuario que ingrese un número
rl.question("Ingresa un número para iniciar la cuenta regresiva: ", respuesta => {
  const numero = parseInt(respuesta);
  if (!isNaN(numero) && numero >= 0) {
    cuentaRegresiva(numero);
  } else {
    console.log("Por favor ingresa un número válido (mayor o igual a 0).");
    rl.close();
  }
});
