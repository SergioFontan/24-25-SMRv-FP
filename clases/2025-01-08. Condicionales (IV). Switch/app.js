/**
 * Ejemplo.
 * Pedir el dia de la semana en letra al usuario y dar un mensaje por alert si coincide.
 * - lunes
 * - martes
 * - miercoles
 * ...
 * - domingo
 */
// let dia = prompt("¿Que día es hoy? (en letra)");
// switch (dia) {
//     case "lunes":
//         alert("ESTAMOS A LUNES");
//         break;
//     case "martes":
//         alert("ESTAMOS A martes");
//         break;
//     case "miercoles":
//         alert("ESTAMOS A miercoles");
//         break;
//     case "jueves":
//         alert("ESTAMOS A jueves");
//         break;
//     case "viernes":
//         alert("ESTAMOS A viernes");
//         break;
//     case "sabado":
//         alert("ESTAMOS A sabado");
//         break;
//     case "domingo":
//         alert("ESTAMOS A domingo");
//         break;
//     default:
//         alert("NO COINCIDE")
//         break;
// }

/**
 * Ejemplo 2.
 * Pide una calificacion al usuario.
 * En funcion de esta calificación dar su respuesta en letra.
 * 
 * entre 9 y 10 --> SB
 * entre 7 y 9  --> NT
 * entre 6 y 7  --> B
 * entre 5 y 6  --> S
 * entre 0 y 4  --> IN
 */
// let nota = parseInt(prompt("Introduce una nota"));
// switch (nota) {
//     case 10:
//         alert("Tienes un sobresaliente");
//         break;
//     case 9:
//         alert("Tienes un sobresaliente");
//         break;
//     case 9.5:
//         alert("Sobresliente tambien");
//         break;

//     default:
//         break;
// }

/**
 * HOJA 23. CONDICIONALES (V).
 * Ejercicio 2
 */

/**
 * PLANTEAMIENTO
 * 
1. Solicitar al usuario qué producto desea comprar.
Usamos el prompt para pedir el producto al usuario.
uso switch para evaluar los tres posibles productos (o error si no coincide).


2. Solicitar la cantidad deseada.
Prompt para pedir cantidad.
Convertir a numero.

3. Verificar que la cantidad esté en un rango permitido:
    - 1 a 10 unidades: Compra válida.
    - Más de 10 unidades: Rechazar la compra indicando que supera el límite.

    Como tengo que comparar rangos, utilizo la estructura IF.
    Tres posibles caminos:
    - Correcto (1 a 10)
    - No hay stock (mas de 10)
    - Error (cualquier otro caso)

4. Calcular el costo total en función del producto y la cantidad.
Multiplico el valor del producto por la cantidad (entre 1 y 10 recogida).

5. Mostrar un resumen de la compra.
Coloco un console.log o un alert o similar donde el usuario vea que ha comprado.
 */

let producto = prompt("¿Que producto deseas comprar? Teléfono móvil, Portátil, Tablet");
let cantidad = 0; // Variable que contiene la cantidad de producto.
let total = 0; // Variable que contiene el total a pagar (precio x cantidad)
switch (producto) {
    case "Teléfono móvil":
        cantidad = parseInt(prompt("¿Qué cantidad?"));
        if(cantidad > 10){
            alert("Stock insuficiente");
        }else if(cantidad >= 1 && cantidad <= 10){
            // Correcto
            // El teléfono vale 700
            total = cantidad * 700;
            alert(`Has comprado ${cantidad} de teléfonos moviles a 700€. El total es ${total}€`);
        }else{
            alert("ERROR: valor introducido sin sentido. Prueba otra vez.")
        }
        break;

    case "Portátil":
        cantidad = parseInt(prompt("¿Qué cantidad?"));
        if(cantidad > 10){
            alert("Stock insuficiente");
        }else if(cantidad >= 1 && cantidad <= 10){
            // Correcto
            // El portatil vale 1200
            total = cantidad * 1200;
            alert(`Has comprado ${cantidad} de portatiles a 1200€. El total es ${total}€`);
        }else{
            alert("ERROR: valor introducido sin sentido. Prueba otra vez.")
        }
        break;

    case "Tablet":
        cantidad = parseInt(prompt("¿Qué cantidad?"));
        if(cantidad > 10){
            alert("Stock insuficiente");
        }else if(cantidad >= 1 && cantidad <= 10){
            // Correcto
            // El tablet vale 500
            total = cantidad * 500;
            alert(`Has comprado ${cantidad} de tablets a 500€. El total es ${total}€`);
        }else{
            alert("ERROR: valor introducido sin sentido. Prueba otra vez.")
        }
        break;

    default:
        alert("No has elegido el producto correcto");
        break;
}