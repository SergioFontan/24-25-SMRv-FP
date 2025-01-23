/**
 * Hoja 29
 */

// Ejercicio 01.

/**
 * Genero el array inicial con datos para poder trabajar
 */
// Posiciones            0                 1               2                3
let invitados = ["Jose Angel Polo", "Vicente Cano", "Sergio Fontán", "Sergio Ibañez"];

// Solicito nombre del invitado
let nombre = prompt("Introduce nombre del invitado");

/**
 * Pregunto en qué posición voy a guardar el nuevo nombre.
 * Al ser una estructura con 4 posibles posiciones, solo me vale del 0 al 4.
 * Se puede interpretar como sustituir un nombre de la lista por el nuevo.
 */
let posicion = prompt(`Introduce la posición donde deseas guardar el nuevo nombre:
    0 - ${invitados[0]}
    1 - ${invitados[1]}
    2 - ${invitados[2]}
    3 - ${invitados[3]}`);

/**
 * Al evaluar la posicion, debo tener en cuenta lo siguiente:
 * - Si ha elegido un numero del 0 al 3 (rango) me sirve
 * - Si no ha elegido un numero del 0 al 3 debo mostrar un error de elección 
 */ 
if(parseInt(posicion) > 3 || parseInt(posicion) < 0){
    alert("ERROR: opción no válida");
}else{
    // En este caso, cambio el valor
    invitados[parseInt(posicion)] = nombre;
}
// Muestro la lista actualizada
alert(`Lista actualizada de invitados:
    0 - ${invitados[0]}
    1 - ${invitados[1]}
    2 - ${invitados[2]}
    3 - ${invitados[3]}`);




// Ejercicio 02
/**
 * En este ejercicio no se me solicita modificar puntuacion anterior
 * sino pedir dos puntuaciones e insertarlas.
 * Este matiz hace que mi array tenga si o si 2 posiciones [primera, segunda]
 */

// Creo el array con valores en null para que existe pero NO tenga contenido.
// El contenido lo introduzco yo ahora
let puntuaciones = [null, null];

let p1 = parseFloat(prompt("Introduce PRIMERA puntuación"));

let p2 = parseFloat(prompt("Introduce SEGUNDA puntuación"));

let cambio = prompt(`¿Deseas cambiar la puntuación anterior ${p2}?
    0 - Si, cambiar puntuación
    1 - No cambio puntuación.
    `);

switch (cambio) {
    // Aquí ha elegido que sí, por lo que pregunto de nuevo para cambiar p2
    case "0":
        p2 = parseFloat(prompt("Introduce SEGUNDA puntuación DE NUEVO"));
        break;
    case "1":
        alert("No se modifica nada");
        break;
    default:
        alert("ERROR: no existe la opcion solicitada");
        break;
}

// Introduzco valores finales en el array
puntuaciones[0] = p1;
puntuaciones[1] = p2;

// Muestro resultado final
alert(`Las puntuaciones son: ${p1} y ${p2}`);


// Ejercicio 03
/**
 * Genero la lista de la compra. En este caso hay 6 espacios, de los cuales hay 2 vacíos (es correcto).
 * Al ser más largo, tengo más posiciones que comprobar.
 */
// posiciones   0       1       2       3       4               5
let lista = ["Yogurt", null, "Queso", null,"Jamón York", "Barra de pan"];

let articulo = prompt("Introduce un nuevo artículo en la lista");

let lugar = prompt(`Selecciona el lugar donde quieres guardarlo:
    0 - ${lista[0]}
    1 - VACIO
    2 - ${lista[2]}
    3 - VACIO
    4 - ${lista[4]}
    5 - ${lista[5]}`);

// Evalúo cuando las posiciones están entre 0 y 5.
// Al ser valores FIJOS (no rangos), uso switch

switch (lugar) {
    // Este caso es cuando sea cualquier número válido
    // Se puede colocar así porque la operación a realizar es la misma (optimizo espacio y líneas)
    case "0", "1", "2", "3", "4", "5":
        lista[lugar] = articulo;
        break;

    default:
        alert("ERROR: producto no disponible");
        break;
}

// Pregunto si quiere eliminar primer elemento
let eliminar = prompt(`¿Deseas eliminar el primer articulo?
    0 - Si, quiero eliminarlo
    1 - No, no quiero eliminarlo`);

// Evalúo si se elimina o no
switch (eliminar) {
    case "0":
        lista[0] = null;    
        break;
    case "1":
        alert("No se elimina nada");    
        break;
    default:
        alert("ERROR: opción elegida no válida");
        break;
}

alert(`La lista actualizada es la siguiente:
    ${lista[0]}
    ${lista[1]}
    ${lista[2]}
    ${lista[3]}
    ${lista[4]}
    ${lista[5]}`)