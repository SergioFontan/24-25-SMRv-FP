// hoja 34 Ej 1
/**
 * DOS opciones para resolverlo.
 * En la primera opción usamos la variable interna i para escribir
 * En la segunda opción me creo un número que va aumentando en cada iteración
 */
// OPCION A
for (let i = 0; i < 10; i++) {
    console.log(i+1);
}

// OPCION B
let numero = 1;
for (let i = 0; i < 10; i++) {
    console.log(numero);
    numero++;
}

// Hoja 34 Ej2
/**
 * DOS opciones para resolverlo.
 * - Uso la variable interna para imprimir (tendría que ponerlo al reves)
 * - Uso una variable externa para imprimir.
 */
// OPCION A
for(let i = 10; i > 0; i--){
    console.log(i);
}

// OPCION B
let numero = 10;
for(let i = 0; i < 10; i++){
    console.log(numero);
    numero--;
}


// Hoja 34. Ej 3
// OPCION A. Necesito comprobar que sea par
for(let i = 2; i <= 20; i++){
    // Si es divisible entre 2 es par, asi que el resto es 0
    if(i % 2 == 0){
        console.log(i);
    }
    else{
        console.log("Numero impar");
    }
}

// OPCION B. Avanzo de 2 en 2 porque se que son pares. Ahorro la mitad del trabajo
for(let i = 2; i <= 20; i = i + 2){
    console.log(i);
}

// Hoja 34. Ej 4
let total = 0;
for(let i = 1; i <= 10; i++){
    console.log(`ANTES DE SUMAR total es ${total}`);
    total = total + i;
    console.log(`DESPUES DE SUMAR total es ${total}`)
}
console.log(total);

// Ejercicio 5
for(let i = 0; i <= 10; i++){
    console.log(`5 x ${i} = ${ 5 * i }`);
}

// Ejercicio 06
/**
 * INICIO en 0
 * FINALIZO en 15
 * AUMENTO: 
 * -    puedo hacerlo de 2 en 2 sabiendo que cada dos avances es un impar
 * -    puedo hacerlo de 1 en 1 y comprobar si el numero es impar
 */
// OPCION 1
let contador = 0;
for(let i = 1; i <= 15; i = i + 2){
    console.log(i);
    contador = contador + 1;
    // contador++;
}
console.log(`Hay un total de ${contador} numeros impares`);

// OPCION 2
let contador = 0;
for(let i = 0; i <= 15 ; i++){
    // Comprobar si el resto es 1 (entonces es impar).
    if(i % 2 != 0){
        contador++;
        console.log(i);
    }
}
console.log(`Hay un total de ${contador} numeros impares`);

// Hoja 34 Ej07
/**
 * DOS opciones para resolverlo.
 * - Uso la variable interna para imprimir (tendría que ponerlo al reves)
 * - Uso una variable externa para imprimir.
 */
// OPCION A
for(let i = 10; i > 0; i--){
    console.log(i);
}

// OPCION B
let numero = 10;
for(let i = 0; i < 10; i++){
    console.log(numero);
    numero--;
}

// Hoja 34 Ej08

// 1. Creo la variable donde se aumula el resultado
let resultado = 1;

// // 2. Realizo el for teniendo en cuenta inicio, fin, aumento y tarea (acumular)
for(let i = 1; i <= 5; i++){
    resultado = resultado * i;
}
console.log(resultado);

// EJERCICIO 09
for(let i = 0; i < 10; i++){
    console.log("Hola mundo");
}


// EJERCICIO 10
/**
 * Necesitamos encontrar el PRIMER NUMERO divisible por 7.
 * Necesitamos una solucion para que SOLO imprima una vez
 * Usaremos FOR aunque no sea el más apropiado
 */
let encontrado = false;

for(let i = 1; i <= 200; i++){
    // Divisible por 7
    if(i % 7 == 0 && encontrado == false && i > 10){
        console.log(i);
        encontrado = true;
    }
}


