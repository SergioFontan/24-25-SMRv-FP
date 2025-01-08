// Solicito al usuario el destino
let destino = prompt("Selecciona destino: Local, Nacional, Internacional");
/**
 * Creamos tres constantes con loa valores (QUE NO CAMBIAN)
 * de las tarifas posibles.
 */
const TARIFA_LOCAL = 5;
const TARIFA_NACIONAL = 10;
const TARIFA_INTERNACIONAL = 20;
const PESO_MINIMO = 0.1;
const PESO_MAXIMO = 50;

// Establecemos el peso en cero de manera predeteminada.
let peso = 0;
// Establecemos el coste en cero de manera prederminada (luego se actualiza).
let coste = 0;
// Evaluo el destino recibido.
switch (destino) {
    case "Local":
        // Solicito al usuario que peso tiene el paquete a destino local
        peso = parseFloat(prompt("¿Que peso tiene el paquete?"));

        // Evaluo que esté en el rango permitido.
        if(peso > PESO_MAXIMO){
            alert("ERROR: peso supera los límites");
        }else if(peso >= PESO_MINIMO && peso <= PESO_MAXIMO){
            // Rango correcto. Puedo operar.
            coste = peso * TARIFA_LOCAL;
            alert(`Se ha enviado un paquete de tipo LOCAL con un peso de ${peso} y coste de ${coste}`);
        }else{
            alert("ERROR: valor incorrecto");
        }

        break;

    case "Nacional":
        // Solicito al usuario que peso tiene el paquete a destino nacional
        peso = parseFloat(prompt("¿Que peso tiene el paquete?"));

        // Evaluo que esté en el rango permitido.
        if(peso > PESO_MAXIMO){
            alert("ERROR: peso supera los límites");
        }else if(peso >= PESO_MINIMO && peso <= PESO_MAXIMO){
            // Rango correcto. Puedo operar.
            coste = peso * TARIFA_NACIONAL;
            alert(`Se ha enviado un paquete de tipo NACIONAL con un peso de ${peso} y coste de ${coste}`);
        }else{
            alert("ERROR: valor incorrecto");
        }
        break;

    case "Internacional":
        // Solicito al usuario que peso tiene el paquete a destino internacional
        peso = parseFloat(prompt("¿Que peso tiene el paquete?"));

        // Evaluo que esté en el rango permitido.
        if(peso > PESO_MAXIMO){
            alert("ERROR: peso supera los límites");
        }else if(peso >= PESO_MINIMO && peso <= PESO_MAXIMO){
            // Rango correcto. Puedo operar.
            coste = peso * TARIFA_INTERNACIONAL;
            alert(`Se ha enviado un paquete de tipo INTERNACIONAL con un peso de ${peso} y coste de ${coste}`);
        }else{
            alert("ERROR: valor incorrecto");
        }
        break;

    default:
        alert("ERROR: destino incorrecto");
        break;
}
