let calificaciones = [3, -2, 7, -2, -1, 9, -7, 5, 6, 2, -2, 0, 9, -5, 2, -3];

/**
 * COSAS A TENER EN CUENTA
 * - La cabecera del FOR es casi siempre la misma:
 * for(let i = 0; i < NOMBREARRAY.length; i++)
 * - Debo elegir la estrategia:
 *      1. Contar cosas: 
 *          - Creo variable inicializada en 0
 *          - Sumo uno cada vez que se cumple algo.
 *      2. Acumular cosas:
 *          - Creo variable inicializada en 0 si lo que acumulo es sumando o en 1 si es multiplicando
 *          - Actualizar su valor com la operacion necesaria
 */

/**
 * Ejercicio 01. 
 * Suma todos los valores que sean pares
 */
let totalPares = 0;
for(let i = 0; i < calificaciones.length; i++){
    if(calificaciones[i] % 2 == 0){
        totalPares = totalPares + calificaciones[i];
    }
}
console.log(`La suma total de los numeros pares es: ${totalPares}`);

/**
 * Ejercicio 02.
 * Cuenta las calificaciones que sean aprobadas (entre 5 y 10)
 */
let cuantasAprobadas = 0;
for(let i = 0; i < calificaciones.length; i++){
    if(calificaciones[i] >= 5 && calificaciones[i] <= 10){
        cuantasAprobadas++;
        // cuantasAprobadas = cuantasAprobadas + 1;
    }
}
console.log(`Hay un total de ${cuantasAprobadas} calificaciones aprobadas`);

/**
 * Ejercicio 03.
 * Cuenta las calificaciones menores a 3 pero que sean positivas
 */
let cuantas = 0;
for(let i = 0; i < calificaciones.length; i++){
    if(calificaciones[i] > 0 && calificaciones[i] < 3){
        cuantas++;
        // cuantas = cuantas + 1;
    }
}
console.log(`Hay un total de ${cuantas} calificaciones mayores a 0 y menores a 3`);


let numeros = [10, null, 45, 102, 80, 120];

/**
 * Ejercicio 04.
 * Crea un programa que compruebe el numero de posiciones vacías y que imprima el segundo número par.
 * 
 * OBJETIVOS
 * - Los vacíos los cuento TODOS y pongo console.log al final.
 * - Los pares imprimo MIENTRAS contadorPar sea MENOR que 2 y luego no imprimo
 */
let contadorVacias = 0;
let contadorPar = 0;
for(let i = 0; i < numeros.length; i++){
    if(numeros[i] == null){
        contadorVacias++;
    }
    if(numeros[i] % 2 == 0){
        contadorPar++;
        if(contadorPar <= 2){
            console.log(numeros[i]);
        }
    }
}
console.log(`Hay ${contadorVacias} posiciones vacías`);

/**
 * Ejercicio 05.
 * Crea un programa que sume todos los números mayores 100 y que cuente el número de impares
 */
let totalMayoresCien = 0;
let contadorImpares = 0;
for(let i = 0; i < numeros.length; i++){
    if(numeros[i] > 100){
        totalMayoresCien = totalMayoresCien + numeros[i];
    }
    if(numeros[i] % 2 == 1){
        contadorImpares++;
    }
}
console.log(`La suma de los mayores que 100 es ${totalMayoresCien}`);
console.log(`Hay un total de ${contadorImpares} números impares`);

/**
 * Ejercicio 06.
 * Crea un programa que muestra el porcentaje de números mayores a 70 del array 
 * y que cuente cuantos son menores que 30
 */
let contadorMayoresSetenta = 0;
let totalMenoresTreinta = 0;
for(let i = 0; i < numeros.length; i++){
    if(numeros[i] < 30){
        totalMenoresTreinta++;
    }
    if(numeros[i] > 70){
        contadorMayoresSetenta++;
    }
}
console.log(`Hay un total de ${totalMenoresTreinta} números mayores que 30`);
let porcentaje = (contadorMayoresSetenta*100)/numeros.length;
console.log(`Hay un ${porcentaje}% de números mayores a 70`);
