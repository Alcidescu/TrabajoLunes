// EJERCICIO 17: Contador de intentos (login)
const readline17 = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  function login() {
    const claveCorrecta = "SENATI";
    let intentos = 0;
  
    function pedirClave() {
      if (intentos >= 3) {
        console.log("❌ Demasiados intentos. Acceso denegado.");
        readline17.close();
        return;
      }
  
      readline17.question("Ejercicio 17 - Ingresa tu clave: ", clave => {
        if (clave === claveCorrecta) {
          console.log("✅ Login exitoso");
          readline17.close();
        } else {
          console.log("❌ Clave incorrecta");
          intentos++;
          pedirClave();
        }
      });
    }
  
    pedirClave();
  }
  
  login(); // ✅ No olvides llamar la función
  