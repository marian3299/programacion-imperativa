let num1 = 78;
let num2 = 43;
let num3 = 14;

// Crea un algoritmo que te permita identificar
// el numero mayor. Utiliza condicionales como el
// if, else, o else if.

// Escribe tu código debajo de estas lineas,
// y observa los resultados por la consola.
// especificamente para este conjunto de datos
// deberias ver por consola el numero 78,
// adicional, cambia los valores de num1, num2 y num3
// para verificar que tu algoritmo funcione con
// cualquiera 3 valores.

let mayor = num1;
if (mayor < num1) {
  mayor = num1;
} else if (mayor < num2) {
  mayor = num2;
} else if (mayor < num3) {
  mayor = num3;
}

console.log(mayor);