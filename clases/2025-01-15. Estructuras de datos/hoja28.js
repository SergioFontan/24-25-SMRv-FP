/**
 * Ejercicio 01
 */
//                  tareas[0]               tareas[1]               tareas[2]                 tareas[3]
// let tareas = ["Estudiar programación", "Ejercicios de redes", "Estudiar para el examen", "Recoger la habitación"];
// // 1a. Pedir la tarea al usuario
// let tareaUsuario = prompt("Ingresa una tarea");
// // 1b. Insertar la tarea al final del array
// tareas[4] = tareaUsuario;
// // 2. Eliminar la primera tarea
// tareas[0] = null; // null es equivalente a NADA, SIN CONTENIDO
// // 3. Mostrar tareas
// console.log(tareas);

/**
 * Ejercicio 02.
 */
// Array inicial con los productos
let productos = ["ordenador", "pantalla", "teclado", "ratón"];
// 1. Preguntar al usuario
let operacion = prompt(`¿Deseas agregar o eliminar producto?
    0 - Agregar
    1 - Eliminar`);
switch (operacion) {
    case "0":
        alert("VAMOS A AGREGAR");
        // Pregunto que quiere agregar
        let producto = prompt("Introduce el producto que quieres agregar");
        // Lo agrego al final (no me especifica el enunciado)
        productos[productos.length] = producto;
        // Imprimo resultado para comprobar que está correcto
        // 3. mostrar inventario final
        console.log(productos);
        break;
    case "1":
        alert("VAMOS A ELIMINAR");
        let productoEliminar = prompt(`Elige el producto que vas a eliminar:
            0 - ${productos[0]}
            1 - ${productos[1]}
            2 - ${productos[2]}
            3 - ${productos[3]}`);

        switch (productoEliminar) {
            case "0":
                productos[0] = null;
                break;
            case "1":
                productos[1] = null;
                break;
            case "2":
                productos[2] = null;
                break;
            case "3":
                productos[3] = null;
                break;
            default:
                alert("Producto no disponible");
                break;
        }
        // 3. mostrar inventario final
        console.log(productos);
        break;
    default:
        alert("Operacion no disponible");
        break;
}