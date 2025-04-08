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
  
  adivinarNumero(); // ✅ Asegúrate de tener esto ACTIVO
  