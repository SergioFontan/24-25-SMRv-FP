/**
 * Establecemos los valores constantes que utilizaremos luego.
 * Como objetivo ayuda a leer mejor el código.
 */
const HABITACION_ESTANDAR = 100;
const HABITACON_EJECUTIVA = 150;
const HABITACION_PRESIDENCIAL = 300;
const NUMERO_MINIMO = 1;
const NUMERO_MAXIMO = 5;

// Solicito al usuario el tipo de habitación
let tipo = prompt("¿Que tipo de habitación? Estándar, Ejecutiva o Presidencial");

// Variable que almacena el numero de noches (NUMERO ENTERO)
let noches = 0;

// Variable que almacena el coste total del hotel 
let coste = 0;

switch (tipo) {
    case "Estándar":
        noches = parseInt(prompt("¿Cuantas noches?"));
        if(noches >= NUMERO_MINIMO && noches <= NUMERO_MAXIMO){
            // Correcto, puedo operar
            coste = noches * HABITACION_ESTANDAR;
            alert(`El coste total es de ${coste}`);
        }else if(noches > NUMERO_MAXIMO){
            alert("ERROR: supera el limite permitido");
        }else{
            alert("ERROR: valor no identificado");
        }
        break;

    case "Ejecutiva":
        // COMPLETAR
        break;

    case "Presidencial":
        // COMPLETAR
        break;

    default:
        break;
}