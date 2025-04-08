// EJERCICIO 18: Sumar hasta ingresar 0

const readline18 = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  function sumaHastaCero() {
    let suma = 0;
  
    function pedir() {
      readline18.question("Ejercicio 18 - Ingresa un número (0 para salir): ", res => {
        const num = parseInt(res);
  
        if (isNaN(num)) {
          console.log("❌ Eso no es un número válido.");
          pedir(); // vuelve a preguntar
          return;
        }
  
        if (num === 0) {
          console.log("✅ Suma total:", suma);
          readline18.close();
        } else {
          suma += num;
          pedir(); // continúa sumando
        }
      });
    }
  
    pedir();
  }
  
  // ✅ Llamamos a la función
  sumaHastaCero();
  