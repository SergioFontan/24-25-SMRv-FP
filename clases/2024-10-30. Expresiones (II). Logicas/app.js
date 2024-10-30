let a = 5;
let b = 8;
console.log(a > 4);             // true
console.log(a > 9);             // false
console.log(a > 4 && a > 9);    // false
console.log(a > 4 && b > 7);    // true

console.log(a > 4 || b > 7);    // true

let edad = 18;              // Variable con valor numerico 18
let invitacion = false;     // Variable con valor booleano false

//            false         false
console.log(edad > 18 && invitacion == true); // false

//             true             false
console.log(edad >= 18 || invitacion == true); // true

console.log(edad >= 18);    // true
console.log(!(edad >= 18)); // false


/**
 * HOJA 5
 */
// Ejercicio 1.
// Solicita dos números al usuario y verifica si su suma es mayor que 100 y menor que 200. Muestra el resultado por consola
let num1 = 4;
let num2 = 9;
let suma = num1 + num2; // Suma vale 13
console.log(suma > 100 && suma < 200); // false AND true ---> false
console.log((num1 + num2) > 100 && (num1 + num2) < 200); // opcion 2. Mismo resultado pero MAS LARGO Y DIFICIL DE LEER

// Ejercicio 2.
// Solicita un número al usuario y verifica si es impar o si es mayor que 10. Muestra el resultado por consola.
let num3 = 7;
console.log(num3 % 2 == 1 || num3 > 10); // true OR false ---> true