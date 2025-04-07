let numeros = [3, -2, 7, -2, -1, 9, -7, 5, 6, 2, -2, 0, 9, -5, 2, -3];

/**
 * Tarea 1: imprimir los 3 primeros NEGATIVOS
 * ¿Estrategia?
 *      1. Crear variable inicializada en 0 porque tiene en cuenta cuantos negativos me encuentro
 *      2. Esta variable aumenta en 1 cada vez que en cuentro uno negativo.
 *      3. Cuando totalNegativos llega a 3, deja de realizar iteraciones
 * 
 */
let totalNegativos = 0;
let i = 0;
while(totalNegativos < 3){
    if(numeros[i] < 0){
        // console.log(`Numero negativo: ${numeros[i]}`);
        totalNegativos++;
    }
    console.log(`Estamos en la iteracion ${i} con el numero ${numeros[i]}`);
    i++;
}

/**
 * Ejercicio 01.
 * Comprueba si en el array numeros esta contenido el numero 6
 */
let encontrado = false; // Creamos esta variable en false porque antes de empezar NO HEMOS ENCONTRADO EL 6 (NO HEMOS NI BUSCADO)
let j = 0; // Esta variable aumenta en 1 todo el rato para ir avanzando las posiciones del array y comprobar si esta el 6
const FINAL_NUMEROS = numeros.length;
while(encontrado == false && j < FINAL_NUMEROS){
    if(numeros[j] == 16){
        console.log(`Lo he encontrado en la posición numero ${j}`);
        encontrado = true;
    }
    j++;
}

