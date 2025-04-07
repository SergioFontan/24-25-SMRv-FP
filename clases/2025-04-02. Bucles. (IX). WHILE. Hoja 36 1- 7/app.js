/**
 * Ejercicio 01
 */
let numero = 1;
while(numero <= 10){
    console.log(numero);
    numero++;
}

/**
 * Ejercicio 02
 */
let total = 0;
let num = 1;
const NUMERO_MAXIMO = 50;
while(total <= NUMERO_MAXIMO){
    total = total + num;
    num++;
}
console.log(`Total es ${total}`);

/**
 * Ejercicio 03
 */
let numeroUsuario = parseInt(prompt("Introduce un numero mayor a 100"));
const MAXIMO = 100;
while(numeroUsuario <= MAXIMO){
    numeroUsuario = parseInt(prompt("ERROR. Asegurate de introducir un numero mayor a 100"));
}

/**
 * Ejercicio 04
 */
let total04 = 1;
let num04 = 1;
const NUMERO_MAXIMO_EJ04 = 1000;
while(total04 <= NUMERO_MAXIMO_EJ04){
    total04 = total04 * num04;
    num04++;
}
console.log(`Total es ${total04}`);

/**
 * Ejercicio 05
 */
const TOTAL_NUMEROS_CONTAR = 
    parseInt(prompt("Dime cuantos numeros vas a contar"));
let totalPositivos = 0;
let contador = 1;
if(TOTAL_NUMEROS_CONTAR > 0){
    while(contador <= TOTAL_NUMEROS_CONTAR){
        let n = parseInt(prompt(`Comprobación ${contador}:
            Introduce un numero`));
        if(n > 0){
            totalPositivos++;
        }
        contador++;
    }
    console.log(`Hay un total de ${totalPositivos} numeros positivos`);
}else{
    console.log("Has escogido un valor incorrecto");
}

/**
 * Ejercicio 06
 */
let password = prompt("Introduce contraseña numerica");
while(isNaN(password) == true){
    password = prompt("ERROR. No es un numero");
}

/**
 * Ejercicio 07
 */
