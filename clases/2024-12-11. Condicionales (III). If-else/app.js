/**
 * HOJA 21
 */

// Ej 02
// let edad1 = parseInt(prompt("Dame la edad 1"));
// let edad2 = parseInt(prompt("Dame la edad 2"));

// // Si la edad 1 es incorrecta, muestro mensaje
// if(edad1 < 0){
//     alert("La edad 1 no es correcta");
// }
// /**
//  * Si he llegado aqui es que la edad 1 es correcta.
//  * Compruebo ahora si la edad 2 es correcta
//  */
// else if(edad2 < 0){
//     alert("La edad 2 no es correcta");
// }
// /**
//  * Si he llegado hasta aqui es que la edad1 y la edad2 son correctas
//  * Procedo a comparar
//  */
// else{
//     if(edad1 > edad2){
//         alert("La edad1 es mayor");
//     }else if(edad2 > edad1){
//         alert("La edad2 es mayor");
//     }else{
//         alert("Son iguales");
//     }
// }


/**
 * SOLUCION ANTIGUA SOLO CON IF
 */
// if(edad1 < 0){
//     alert("La edad 1 esta mal");
// }
// if(edad2 < 0){
//     alert("La edad 2 esta mal");
// }
// if(edad1 >= 0 && edad2 >= 0){
//     alert("Todas estan bien");
// }


// Ej 04
let numero = prompt("Dame un numero ENTERO");
console.log(numero);

if(numero == ""){
    alert("NO HAS ESCRITO NADA");
}else if(isNaN(numero)){
    alert("No has puesto un numero");
}else{
    // Me quito el caso de 0 porque entendemos que no es par ni impar
    if(numero == 0){
        alert("Esto no vale");
    } 
    // Compruebo si es par (al hacer el modulo si da cero es que el resto es 0 y por tanto par)
    else if(numero % 2 == 0){
        alert("Es par");
    }
    // Colocamos else para decir EN OTRO CASO (no hay mas casos) es impar
    else{
        alert("Es impar");
    }
}


// Ej 06
// let numero = prompt("Dame un numero ENTERO");

// // LO PRIMERO ES SABER SI PUEDO OPERAR
// if(isNaN(numero)){
//     alert("Has introducido un valor incorrecto");
// }else{
//     if(numero > 0){
//         alert("Positivo");
//     }else if( numero < 0){
//         alert("Negativo");
//     }else {
//         alert("Es cero");
//     }
// }


// Ej 08 (lo dejamos planteado puesto que hay MUCHOS PEQUEÑOS CASOS)

// let numero1 = parseFloat(prompt("Dame un numero 1")); 
// let numero2 = parseFloat(prompt("Dame un numero 2")); 
// let numero3 = parseFloat(prompt("Dame un numero 3")); 

// // CASO A: el mas barato es el numero1
// if(numero1 < numero2 && numero1 < numero3){
//     alert("Numero 1 es el mas barato");
// }
// // CASO B: el mas barato es el numero2
// else if(numero2 < numero1 && numero2 < numero3){
//     alert("Numero 2 es el mas barato");
// } 
// // CASO C: (puedo evaluarlo o no puesto que los anteriores no se han cumplido)
// else {
//     alert("Numero 3 es el mas barato");
// } 

// console.log(isNaN(5));
// console.log(isNaN("5"));
// console.log(isNaN("5a"));
// console.log(parseInt("5a"));
// console.log(parseInt("512321321a"));