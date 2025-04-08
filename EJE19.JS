// EJERCICIO 19: Imprimir la serie de Fibonacci hasta que un número supere 100

function fibonacciHasta100() {
    let a = 0;
    let b = 1;
  
    console.log("Ejercicio 19 - Serie de Fibonacci hasta que supere 100:");
  
    while (a <= 100) {
      console.log(a);
      [a, b] = [b, a + b]; // Intercambio de valores
    }
  }
  
  // ✅ Llamamos a la función
  fibonacciHasta100();
  