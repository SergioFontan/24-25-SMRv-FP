let numeros = [3, -2, 7, -2, -1, 9, -7, 5, 6, 2, -2, 0, 9, -5, 2, -3];

/**
 * Tarea 1: imprimir los 3 primeros NEGATIVOS
 * ¿Estrategia?
 *      1. Crear variable inicializada en 0 porque tiene en cuenta cuantos negativos me encuentro
 *      2. Esta variable aumenta en 1 cada vez que en cuentro uno negativo.
 *      3. Cuando totalNegativos llega a 3, deja de imprimir pantalla (pero sigue sumando)
 * 
 * Tarea 2: cuantos son positivos
 * ¿Estrategia?
 *      1. Crear variable inicializada en 0 para sumar cada vez que haya un numero > 0
 *      2. Cuanto hay un numero > 0 sumo 1 a totalPositivos
 */
let totalPositivos = 0;
let totalNegativos = 0;

for(let i = 0; i < numeros.length; i++){
    if(numeros[i] > 0){
        totalPositivos++;
        // totalPositivos = totalPositivos + 1;
    }else{
        totalNegativos++;
        if(totalNegativos <= 3){
            console.log(`Numero negativo: ${numeros[i]}`);
        }
    }
}
console.log(`Hay un total de ${totalPositivos} numeros positivos`);