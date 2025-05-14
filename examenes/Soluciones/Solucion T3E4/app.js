let estudiantes = ["Lucas", "Sofía", "Mateo", "Valeria", "Leo", 
    "Camila", "Diego", "Lucía", "Hugo", "Elena"];

// Variables auxiliares
let encontrado = false;
let i = 0;

// Constantes con mensajes de retorno
const MENSAJE_ENCONTRADO = "Se ha encontrado en la posición ";
const MENSAJE_NO_ENCONTRADO = "No se ha encontrado el nombre solicitado";

// Solicitud del nombre
let nombre = prompt("Introduce un nombre de estudiante");

// Comprobación de contenido
while(encontrado == false && i < estudiantes.length){
    if(nombre == estudiantes[i]){
        entontrado = true;
    }
    i++;
}

// Devolución de mensaje
if(encontrado == false){
    alert(MENSAJE_NO_ENCONTRADO);
}else{
    alert(MENSAJE_ENCONTRADO + i - 1);
}