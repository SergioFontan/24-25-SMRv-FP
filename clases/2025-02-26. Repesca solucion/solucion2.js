// 1. Crear el array con los dni de los empleados
let empleados = [null, "02345778R", "02223867T", null];

// 2. Pedimos al usuario un DNI mediante prompt
let dni = prompt('Introduce un DNI de un empleado.');

/**
 * Posibilidades del DNI
 * - No hay datos introducidos
 * - La longitud no es correcta
 * - La longitud es correcta y existe dentro del array empleados. Devuelvo el número de posición
 * - La longitud es correcta y no existe dentro del array empleados
 * 
 * Podemos usar SWITCH para comprobar tamaño de datos
 * Despuésif-else if-else puesto que tenemos 4 caminos distintos (los dos últimos en el mismo bloque)
 */

// 3. Comprobamos el tamaño del dato introducido por el usuario
switch (dni.length) {
    // 0 caracteres, no ha introducido nada
    case 0:
        alert("ERROR: no has introducido datos");
        break;
    // 9 caracteres, tamaño correcto. Procedemos a comprobar los contenidos de las posiciones
    case 9:
        if(dni == empleados[0]){
            alert(`El DNI ${dni} está en la posición 0`);
        }
        else if(dni == empleados[1]){
            alert(`El DNI ${dni} está en la posición 1`);
        }
        else if(dni == empleados[2]){
            alert(`El DNI ${dni} está en la posición 2`);
        }
        else if(dni == empleados[3]){
            alert(`El DNI ${dni} está en la posición 3`);
        }
        // Hemos comprobado todas las posiciones y sus contenidos y no está.
        // Mandamos un mensaje de que no está en el array (aunque la longitud sí sea correcta)
        else{
            alert(`El DNI ${dni} no corresponde a ningún empleado`);
        }
        break;
    default:
        alert("ERROR: la longitud es incorrecta. Debe tener 8 dígitos y una letra.");
        break;
}
