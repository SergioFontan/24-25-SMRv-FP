// HOJA 37
/**
 * Ejercicio 14: Pedir un número al usuario indefinidamente hasta que sea impar
 * 
 * 1. Pido un numero al usuario
 * 2. Comprobar que es un numero (isNaN)
 * 3. Comprobar si es impar
 * 4. En caso de ser impar, cambio encontrado a true y asi termina el bucle
 * 5. En caso no sea impar, pido de nuevo un valor al usuario
 */
let encontrado = false;
// La condicion es usar la variable encontrado para comprobar si es o no es el numero solicitado
while(encontrado == false){
    // 1
    let numero = prompt("Introduce un numero impar");
    // 2
    /**
     * isNaN comprueba si un valor es un numero o no.
     * - Si devuelve TRUE quiere decir que NO ES UN NUMERO.
     * - Si no devuelve NaN quiere decir que SI ES UN NUMERO.
     */
    if(isNaN(numero) != true){
        // 3
        /**
         * Pra ver si es impar, lo divido entre 2 y veo el resto.
         * - Si el resto es 0, es par
         * - Si el resto es 1, es impar.
         * - No hay mas opciones
         */
        if(numero % 2 != 0){
            // Si he encontrado el impar, cambio encontrado a true para salir del bucle
            encontrado = true;
            alert("Has introducido correctamente el numero");
        }
    }
}

// HOJA 38
/**
 * Ejercicio 24: Pedir un número al usuario indefinidamente hasta que sea positivo 
 * e insertarlo en la primera posición vacía del array numeros04. Imprimir array tras inserción del dato.
 * 
 * PASOS A SEGUIR
 * 1. Pido el valor al usuario
 * 2. Compruebo si es un numero (isNaN)
 * 3. Compruebo que sea mayor a 0 porque tiene que ser positivo
 * 4. Recorro el array numeros04 buscando una posición null
 * 5. Cuando encuentre una null, inserto el numero
 * 
*/
let numeros04 = [11, 3, null, "5", 7, null];

// Creación de variable bandera (booleana)
let encontrado = false;
let positivo;
while(encontrado == false){
    // 1. 
    positivo = prompt("Introduce un numero positivo");

    // 2.
    if(isNaN(positivo) != true){
        // 3
        if(positivo > 0){
            // Cambio valor a true cuando el usuario inserta un valor mayor que 0 y con esto salgo del bucle
            encontrado = true;
        }
    }
}

let i = 0; // Variable (que en for esta definida pero en while no) que representa el numero de posición del array
let final = false; // Esta variable me indica si he llegado al final o no
/**
 * Si final es false quiere decir que NO HE LLEGADO AL FINAL DE MIS COMPROBACIONES
 * Si i es menor al numeros04.length quiere decir que no ha llegado al final de bucle
 */
// 4
while(final == false && i < numeros04.length){
    // 5
    if(numeros04[i] == null){
        numeros04[i] = positivo;
        final = true;
    }
    i++;
}
console.log(numeros04);

/**
 * Ejercicio 22: Comprobar si hay alguna posición vacía en el array. 
 * Detener el bucle al encontrar la primera y devolver el número de posición que está vacía.
 * 
 * PASOS
 * 1. Recorrer array numeros02
 * 2. Comprobar si el valor es null
 * 3. Si encuentro posición vacía, salgo del bucle.
 * 4. Si no encuentro posición vacía, continuo a la siguiente iteración
 */
let numeros02 = [1, 3, 5, null, 7];

// Variable bandera que contiene false si NO ESTA vacío y true si SI ESTA VACIO
let vacio = false;
// Variable numerica que representa la posición del array.
let i = 0;
// 1
while(vacio == false && i < numeros02.length){
    // 2
    if(numeros02[i] == null){
        vacio = true; // He encontrao una posicion vacía y entonces cambio el valor
        console.log(`La primera posición vacía es la número ${i}`);
    }
    i++; // Hago que la i cambie para evaluar la posición siguiente
}

/**
 * Ejercicios propuestos para While + Arrays:
 * Hoja 38:
 * - 21
 * - 24 (HECHO¿?¿?)
 * - 26 (ojo, al sumar valores se usa un acumulador y no contador)
 */

// Ejercicio 21
let numeros01 = [10, null, 45, 102, 80, 120];
let mayorQueCien = false;
let i = 0;
while(mayorQueCien == false && i < numeros01.length){
    if(numeros01[i] > 100){
        mayorQueCien = true;
        console.log(numeros01[i]);
        console.log(i)
    }
    i++;
}

// Ejercicio 26
let numeros06 = [2, 4, 5, 0, 7, 8];
let i = 0;
let ceroEncontrado = false;
let sumaAntesCero = 0;
while(ceroEncontrado == false && i < numeros06.length){
    if(numeros06[i] == 0){
        ceroEncontrado = true;
    }else{
        sumaAntesCero = sumaAntesCero + numeros06[i];
    }
    i++;
}

if(ceroEncontrado == false){
    console.log("No hay ningun cero");
}else{
    console.log(`La suma total antes del cero es ${sumaAntesCero}`);
}




