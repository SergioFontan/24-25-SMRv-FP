let calificacion;
let correcto = false;
const ERROR_RANGO = "ERROR: rango incorrecto";
const ERRRO_TIPO = "ERROR: no se ha introducido un número";
while(correcto == false){
    calificacion = prompt("Introduce una calificación");
    console.log(isNaN(calificacion));
    if(isNaN(calificacion) != true){
        calificacion = parseFloat(calificacion);
        if(calificacion < 10 && calificacion >= 0){
            correcto = true;
        }else{
            alert(ERROR_RANGO);
        }
    }
    else{
        alert(ERRRO_TIPO);
    }
}