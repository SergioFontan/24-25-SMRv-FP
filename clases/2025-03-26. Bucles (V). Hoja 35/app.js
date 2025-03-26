/**
 * Ejercicio 01.
 */
let numeros01 = [3, 7, 2, 9, 5];

for(let i = 0; i < numeros01.length; i++){
    console.log(numeros01[i]);
}

/**
 * Ejercicio 02.
 */
let masGrande = 0;
let numeros02 = [10, 25, 7, 99, 64];
for(let i = 0; i < numeros02.length; i++){
    // Compruebo si el numero de la iteracion actual
    // es mas grande que el guardado en masGrande
    if(numeros02[i] > masGrande){
        masGrande = numeros02[i]; // Actualizo su valor
    }
}
console.log(masGrande);

/**
 * Ejercicio 03.
 */
let totalPares = 0;
let numeros03 = [4, 9, 12, 15, 18];
for(let i = 0; i < numeros03.length; i++){
    // Es par si al dividir entre 2 el resto es 0
    if(numeros03[i] % 2 === 0){
        // totalPares++;
        totalPares = totalPares + 1;
    }
}
console.log("Numeros pares: " + totalPares);

/**
 * Ejercicios 04.
 */
let sumaArray = 0;
let numeros04 = [5, 8, 3, 10];
for(let i = 0; i < numeros04.length; i++){
    // sumaArray = sumaArray + numeros04[i];
    sumaArray += numeros04[i];
}
console.log("La suma total es " + sumaArray);

/**
 * Ejercicios 05.
 */
// Coloco un booleano a true y cuando encuentre un valor
// negativo lo cambio a false
let totalNegativos = 0;
let numeros05 = [3, 7, -2, 9, -5];
for(let i = 0; i < numeros05.length; i++){
    // if(numeros05[i] < 0 && primerNegativo == true){
    //     console.log("El numero negativo es " + numeros05[i]);
    //     primerNegativo = false; // Como he encontrado un numero negativo, lo cambio a false
    // }
    if(numeros05[i] < 0){
        totalNegativos = totalNegativos + 1;
        if(totalNegativos == 1){
            console.log("El numero negativo es " + numeros05[i]);
        }
    }
}

/**
 * Ejercicio 06
 */
let numeros06 = [2, 5, 7, 10];
//              [4, 10, 14, 20];
for(let i = 0; i < numeros06.length; i++){
    console.log(numeros06[i] * 2);
    // numeros06[i] *= 2;
}
console.log(numeros06);

/**
 * Ejercicio 07.
 */
let numeros07 = [4, 11, 9, 21, 15];

for(let i = 0; i < numeros07.length; i++){
    if(numeros07[i] > 10){
        console.log(numeros07[i]);
    }
}

/**
 * Ejercicio 08.
 */
// let numeroEnArray = parseInt(prompt("Dame un numero"));
let numeroEnArray = 6;
let encontrado = false;
let numeros08 = [5, 8, 12, 3, 7, 5];
for(let i = 0; i < numeros08.length; i++){
    if(numeros08[i] === numeroEnArray){
        encontrado = true;
    }
}
// Comprobar si lo ha encontrado o no
if(encontrado == true){
    console.log("Lo ha encontrado");
}else{
    console.log("No lo ha encontrado");
}

/**
 * Ejercicio 09.
 */
let valor = 4;
let contador = 0;
let numeros09 = [6, 18, 22, 4, 10];
for(let i = 0; i < numeros09.length; i++){
    if(numeros09[i] > valor){
        contador++;
    }
}
console.log("hay un total de " + contador);

/**
 * Ejercicio 10
 */
let numeros10 = [1, 2, 3, 4, 5];
for(let i = numeros09.length - 1; i >= 0 ; i--){
    console.log(numeros10[i]);
}