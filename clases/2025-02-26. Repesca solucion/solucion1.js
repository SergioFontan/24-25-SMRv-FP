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
 * Podemos usar if-else if-else puesto que tenemos 4 caminos distintos (los dos últimos en el mismo bloque)
 */

// 3. Comprobamos que haya introducido algo (verificar que al menos es un caracter)
if(dni.length == 0){
    alert("ERROR: no has introducido datos");
}
// 4. Comprobamos que la longitud es incorrecta
else if (dni.length != 9){
    alert("ERROR: la longitud es incorrecta. Debe tener 8 dígitos y una letra.");
}
// 5. Si hemos llegado hasta aquí, la longitud es correcta.
// Miramos si está en alguna posición del array (tenemos 4 posiciones posibles)
else if(dni == empleados[0]){
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
// 6. Hemos comprobado todas las posiciones y sus contenidos y no está.
// Mandamos un mensaje de que no está en el array (aunque la longitud sí sea correcta)
else{
    alert(`El DNI ${dni} no corresponde a ningún empleado`);
}