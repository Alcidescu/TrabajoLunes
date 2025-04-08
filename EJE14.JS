// ---------------------------
// EJERCICIO 14: Validar entrada > 0

const readline14 = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  function validarEntrada() {
    function pedir() {
      readline14.question("Ejercicio 14 - Ingresa un número mayor que 0: ", res => {
        const num = parseInt(res);
        if (!isNaN(num) && num > 0) {
          console.log("✅ Número válido:", num);
          readline14.close();
        } else {
          console.log("❌ Inválido. Intenta de nuevo.");
          pedir(); // vuelve a preguntar
        }
      });
    }
    pedir();
  }
  
  // ✅ Llamar a la función para que se ejecute
  validarEntrada();
  