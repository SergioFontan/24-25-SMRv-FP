/**
 * Ejemplo.
 * Pide una nota al usuario y comprueba
 * que esta en un rango correcto
 */

let nota = parseFloat(prompt("Dame una nota"));

if(nota <= 10 && nota >= 0){
    console.log("La nota esta en el rango correcto");
    alert("La nota esta en el rango correcto");
}

// if(!(nota > 10) && !(nota < 0)){
//     console.log("La nota esta dentro de rango");
//     alert("La nota esta en el rango correcto");
// }