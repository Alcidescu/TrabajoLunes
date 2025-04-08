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