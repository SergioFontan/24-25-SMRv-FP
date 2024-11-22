/**
 * PARTE I. Ejercicios lectura de codigo
 */
// Ej1
let dia = 29;
let mes = "octubre";
console.log("Hoy es " + dia + " de " + mes); // Hoy es 29 de octubre

// Ej2
let esValido = false;
console.log(!esValido); // true

// Ej3
let altura = 180;  
let peso = 70;
let esAtleta = true;
console.log((altura >= 170 && peso < 80) || esAtleta); // true

// Ej4
let puntosExamen = 88;
let esRegular = true;
//                  true        &&   true     ||        false
console.log((puntosExamen >= 80 && esRegular) || puntosExamen === 100); // true

// Ej5
let distancia = 300;
let tiempo = 2;
let velocidad = distancia / tiempo; // 150
let dentroLimite = velocidad <= 120; // false
console.log("¿Velocidad dentro del limite? " + dentroLimite); 

//RESEPUESTA: ¿Velocidad dentro del limite? false

// Ej6
let nombre = "Luis";
let tieneLicencia  = false;
let mensaje = "Permiso de conducir para " + nombre + ": " + !tieneLicencia;
console.log(mensaje);

// RESPUESTA: Permiso de conducir para Luis: true

// Ej7
let numero = 15;
numero += 5; // numero = numero + 5; ---> actualmente tengo 20
let enRango = numero >= 10 && numero <= 20; // true
console.log("¿Numero en rango 10-20? " + enRango);

// RESPUESTA: ¿Numero en rango 10-20? true

// Ej8
let alturaMinima = 120;
let alturaUsuario = 130;
let accesoPermitido = alturaUsuario >= alturaMinima; // true
let mensajeAcceso = "¿Altura suficiente para entrar? " + accesoPermitido;
console.log("Altura del usuario: " + alturaUsuario);
console.log(mensajeAcceso);

// RESPUESTA: 
// Altura del usuario: 130
// ¿Altura suficiente para entrar? true

/*************************************************
 * PARTE II. Ejercicios identificacion de errores
 ************************************************/
// Ej1
let cursoBasicoCompletado = "true";
let experiencia = 5;
let puedeInscribirse = cursoBasicoCompletado && experiencia >= 5;
console.log("¿Puede inscribirse en el curso avanzado ?" + puedeInscribirse);

// RESPUESTA: en la linea 1 hay un booleano como un string

// Ej2
let precioProducto = 80;
let descuento = 20;
//                              60             > 100
let envioGratis = (precioProducto - descuento) > 100 == true;
let precioFinal = precioProducto - descuento + envioGratis;
console.log("¿El precio final incluye precio gratuito? " + envioGratis);
console.log("Precio final con descuento y envio: " + precioFinal);

// RESPUESTA: 
// en la linea 3 sobra == true puesto que ya obtiene resultado de la primera expresion
// en la linea 4 sobre envioGratis puesto que es un booleano qe no puede sumarse

// Ej3
let edad = "22";
let suscripcionActiva = false;
let accesoPermitido = edad > 21 && suscripcionActiva == "true";
console.log("¿Tiene acceso al sitio? " + accesoPermitido);

// RESPUESTA
// En la linea 1 hay un number como string
// En la linea 3 tenemos un booleano como string

// Ej4
let prueba1 = 85;
let prueba2 = "80";
let prueba3 = 78;
//        prueba1 > prueba2 && prueba 2 > prueba3
let enOrden = prueba1 > prueba2 > prueba3;
console.log("¿los puntuajes estan en orden descendente? " + enOrden);

// RESPUESTA
// En la linea 2 tenemos un number como string
// En la linea 3 tenemos comparaciones sin opearador logico AND

// Ej5
let stock = 5;
let stockMinimo = "10";
let alertaPedido = stock >= stockMinimo || stock = 0;
console.log("¿Es necesario hacer un pedido? "+ alertaPedido);

// RESPUESTA:
// En la linea 2 tenemos un number como string
// En la linea 3 se asigna valor 0 en vez de comparar (== ó === en vez de =).

// Ej6
let temperaturaActual = 28;
let temperaturaMinima = 15;
let temperaturaMaxima = "30";
let activarAlarma = temperaturaActual >= temperaturaMaxima && temperaturaActual <= temperaturaMinima;

// RESPUESTA
// En la linea 3 tenemos un number como string
// En la linea 4 tenemos un operador logico AND en vez de OR (leer enunciado)

/**
 * PARTE III. Ejercicios creación de código
 */

// EJ1
// Pide tres precios. Muestra true si el primer precio es menor al segundo
// y si el segundo precio es menor al tercero 

// Pido datos al usuario (OJO QUE ESTAN EN STRING)
let precio1 = prompt("Precio 1");
// let precio1 = parseFloar(prompt("Precio1"));
let precio2 = prompt("Precio 2");
let precio3 = prompt("Precio 3");

// Conversion de los datos pedidos a number
let precio1_number = parseFloat(precio1);
let precio2_number = parseFloat(precio2);
let precio3_number = parseFloat(precio3);

// Comprobacion en consola con operador logico (OJO USAR LOS DE TIPON NUMBER Y NO STRING)
console.log(precio1_number < precio2_number && precio2_number < precio3_number);

// EJ2
// Pide al usuario una distancia en metros y muestra en consola
// cuantos centimetros y milimetros
let distancia = prompt("Dame una distancia en metros");
let distancia_number = parseFloat(distancia);
console.log("La distancia de " + distancia_number + " en metros es:");
console.log(distancia_number * 100 + " centimetros y " + distancia_number * 1000 + " milimetros");

// EJ3
// Pide al usuario salario diario y cantidad de dias semanales que trabajo
// Muestra en consola salario mensual (sin dias festivos)
let salario = prompt("Dame salario");
let dias = prompt("Dame dias");

let salario_number = parseFloat(salario);
let dias_number = parseInt(dias);

console.log("El salario mensual es: " + (salario_number * dias_number * 4));
