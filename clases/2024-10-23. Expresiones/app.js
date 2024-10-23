let v1 = 6;
let v2 = 7;
let v3 = 7;

/**
 * OPERADORES DE COMPARACION
 * >
 * >=
 * <
 * <=
 * ==       --> compara CONTENIDO
 * ===      --> compara CONTENIDO Y TIPO
 * !=       --> compara DISTINTO CONTENIDO
 * !==      --> compara DISTINTO CONTENIDO Y TIPO
 */

console.log(v1 > v2);       // false
console.log(v1 >= v2);      // false
console.log(v1 < v2);       // true
console.log(v1 <= v2);      // true
console.log(v1 == v2);      // false
console.log(v2 == v3);      // true
console.log(5 == (4+1));    // true
console.log('5' == (4+1));  // true
console.log(5 === '5');     // false

/**
 * HOJA 3 EJERCICIOS
 */
// Ejercicio 1.
let ej1a = 4;
let ej1b = 1;
console.log(ej1a > ej1b);

// Ejercicio 2.
let ej2a = 2;
let ej2b = 9;
console.log(ej2a == ej2b);

/**
 * NOTA: se podría hacer tambien con el === PEEEEEROOOOO
 * el  === compara tambien el tipo y en este caso sabemos
 * de primeras que el tipo es el mismo y es un numero.
 * Por tanto, con comparar contenido nos vale.
 */