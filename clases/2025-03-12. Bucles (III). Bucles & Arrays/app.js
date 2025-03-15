/**
 * Si utilizo un bucle para hacer operaciones REPETITIVAS sobre un array, debo conocer el inicio y el final.
 * - El inicio siempre es 0 porque la primera posicion de un array es 0.
 * - El final no se cual es porque cada array tiene una longitud o numero de elementos DIFERENTE.
 *      - La herramienta LENGTH sirve para saber CUANTOS elementos tiene el ARRAY, por tanto será el final
 */

let num =[18, 1, 5, 7, 2, 6, 4, 3, 12, 8, 7, 9, 28];
console.log(num);

// Ej1. Pinta los numeros del array num
for(let i = 0; i < num.length; i++){
    console.log(`En la posicion ${i} del array num está el valor ${num[i]}`);
}

// Ej2. Pinta los numeros multiplos de 3 dentro del array num
for(let i = 0; i < num.length; i++){
    // Compruebo que el contenido de la posicion i es multiplo de 3 cuando el resto es 0.
    if(num[i] % 3 == 0){
        console.log(`En la posicion ${i} del array num está el valor ${num[i]} que es multiplo de 3.`);
    }
}

// Ej3. Pinta los numeros que sean multiplos de 2 y de 3 (a la vez) del array num
for(let i = 0; i < num.length; i++){
    if(num[i] % 3 == 0 && num[i] % 2 == 0){
        console.log(`En la posicion ${i} del array num está el valor ${num[i]} que es multiplo de 2 y de 3.`);
    }
}

// Ej4. Suma todos los numeros del array num en la variable total.
let total = 0;
for(let i = 0; i < num.length; i++){
    total = total + num[i];
    // Tambien valdria       total+=num[i]   -----> Esta sería mejor solución que la descomentada
}

// Ej5. Suma todos los numeros pares del array num en la variable totalPares
let totalPares = 0;
for(let i = 0; i < num.length; i++){
    if(num[i] % 2 == 0){
        totalPares = totalPares + num[i];
        // Tambien valdria       totalPares+=num[i]   -----> Esta sería mejor solución que la descomentada
    }
}

// Ej6. Suma todos los numeros divisibles por 3 y 5 del array num en la variable totalTC.
let totalTC = 0;
for(let i = 0; i < num.length; i++){
    if(num[i] % 3 == 0 && num[i] % 5 == 0){
        totalTC = totalTC + num[i];
        // Tambien valdria       totalTC+=num[i]   -----> Esta sería mejor solución que la descomentada
    }
}

// Array con strings para trabajar con contenidos de caracteres y elementos vacíos (considerados como null)
let nombresProfesores = ["Sergio F", null, "Jose Angel", "Sergio I", null, "Angela", "Raul"];

// Ej7. Muestra los nombres de todos los profesores del array nombresProfesores.
for(let i = 0; i < nombresProfesores.length; i++){
    if(nombresProfesores[i] != null){
        console.log(`En la posicion ${i} del array nombresProfesores está el valor ${nombresProfesores[i]}.`);
    }
}

// Ej8. Muestra los nombres de los profesores que tengan más de 6 letras (usar length).
for(let i = 0; i < nombresProfesores.length; i++){
    if(nombresProfesores[i] != null){
        if(nombresProfesores[i].length > 6){
            console.log(`En la posicion ${i} del array nombresProfesores está el valor ${nombresProfesores[i]} y tiene mas de 6 caracteres.`);
        }
    }
}
// Ej9. Muestra cuántas (no cuales) posiciones están vacías en el array nombresProfesores
let contadorProfesores = 0;
for(let i = 0; i < nombresProfesores.length; i++){
    if(nombresProfesores[i] == null){
        contadorProfesores++;
    }
}
console.log(`Hay un total de ${contadorProfesores} posiciones vacías.`);
