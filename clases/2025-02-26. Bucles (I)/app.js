let nombres = ["Pepe", null, "Ana", null, "Juan", null, "Laura"];

// Ej1. Pinta el contenido de todas las posiciones del array nombres
// NOTA: usar length para establecer final de bucle

// Bucle que recorre el array de nombres
// for (let i = 0; i < nombres.length; i++) {
//     console.log(nombres[i]);
// }

//Ej2. Pinta el contenido de todas las posiciones NO VACIAS del array nombres
for (let i = 0; i < nombres.length; i++) {
    if(nombres[i] != null){
        console.log(nombres[i]);
    }
}

if(nombres[0] != null){
    console.log(nombres[0]);
}
if(nombres[1] != null){
    console.log(nombres[1]);
}
if(nombres[2] != null){
    console.log(nombres[2]);
}
if(nombres[3] != null){
    console.log(nombres[3]);
}
if(nombres[4] != null){
    console.log(nombres[4]);
}
if(nombres[5] != null){
    console.log(nombres[5]);
}
if(nombres[6] != null){
    console.log(nombres[6]);
}