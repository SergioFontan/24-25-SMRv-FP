/**
 * TIPOS DE DATOS
 * 
 * Vamos a trabajar (de momento) con tres tipos de datos
 * - number: representa numeros con/sin decimales
 * - string: representa cadenas de caracteres*
 * - boolean: representa do valores: true y false
 */

// Creo una variable llamada 'v1' con el contenido asignado 5
let v1 = 5;     // tipo number
let v2 = 5.5;   // tipo number

let v3 = 'hola';
let v4 = "Sergio";
let v5 = `palabra`;

// console.log(v1);
// console.log(v2);
// console.log(v3);
// console.log(v4);
// console.log(v5);

/**
 * Ejemplo 1.
 * Crea una variable llamda 'v6' y asigna el contenido 'v4'
 */
let v6 = v4;    // Asignamos el valor de v4 en v6
let v6b = 'v4'; // Asignamos el valor string 'v4' a v6b

/**
 * BUENAS PRACTICAS CON VARIABLES
 * - Los nombres de las variables tienen relacion con el 
 * contenido que llevan.
 * - Van en minuscula
 * 
 * BUENAS PRACTICAS CON CONSTANTES
 * - Van en mayuscula
 */
let edad = "Pepe";  // es correcto pero NO TIENE SENTIDO
let nombre = 21;    // es correcto pero NO TIENE SENTIDO


/**
 * OPERADORES MATEMATICOS
 * Realizan operaciones con numeros generalmente para 
 * guardarlos en otras variables.
 * Trabajaremos básicamente con 4:
 * - La suma:           simbolo +
 * - La resta:          simbolo -
 * - La multiplicacion: simbolo *
 * - La division:       simbolo /
 */

// console.log(4 + 1);
// console.log(5 - 3);
// console.log(7 * 3);
// console.log(9 / 3); // Espero resultado entero
// console.log(9 / 2); // Espero resultado con decimales
// console.log(9 / 0); // Espero resultado con Infinity

let numero1 = 6;
let numero2 = 7;
//             6    +    7
console.log(numero1 + numero2);

/**
 * OJO CUIDAO.
 * Cuando utilizamos el operador de la suma, debemos tener
 * claro que estamos sumando.
 * 
 * Si son dos numeros, me da un resultado de numero.
 * Si es string con otra cosa, se realiza una CONCATENACION.
 * 
 * Una CONCATENACION no es otra cosa que juntar los contenidos.
 */

let p1 = "Montaje";
let p2 = "mola";
let p3 = "mucho";
let espacio = " ";

console.log(p1 + espacio + p2 + espacio + p3);

/**
 * Ejercicios Hoja 1. Variables
 * Hechos en clase salvo el 6, que usa el módulo.
 * Quedará voluntario
 */

// Ej 1
let ej1a = 7;
let ej1b = 9;
let ej1resultado = ej1a + ej1b;
// Mostramos resultado en consola CONCATENANDO
/**
 * Problema: en el momento que hay un string
 * se acabaron los numeros, es decir, no
 * detecta MAS NUMEROS
 */
console.log("El resultado del ej1 es: " + ej1a + ej1b);     // Aqui deja de entender ej1a y ej1b como numeros porque antes tiene un STRING
console.log("7 x 9 = " + ej1resultado);                     // Aqui deja de entender ej1resultado como numero porque antes tiene un STRING

// Ej 2
let ej2a = 7;
let ej2b = 9;
// console.log(ej2a - ej2b);

// Ej 3
let ej3a = 7;
let ej3b = 9;
// console.log(ej3a * ej3b);

// Ej 4
let ej4a = 7;       // ¿Cuanto es 7 sobre 9 en porcentaje ¿?¿?
let ej4b = 9;       // Este es el 100%
// console.log(ej4a * 100 / ej4b);

// Ej 5
let ej5a = 7;
let ej5b = 9;
// console.log(ej5a / ej5b);

// Ej 6 OTRO DIA

// Ej 7
let ej7 = 3;
ej7 = ej7 + 1;
console.log("El resultado del ej7 es: " + ej7);

// Ej 8
let base = 3;
let altura = 8;
let ej8resultado = (base * altura) / 2;
console.log(ej8resultado);

// Ej 9
let celsius = 5;
let farenheit = (celsius* 9 / 5) + 32 ;
console.log(celsius + "ºC = "+ farenheit + " ºF");

// Ej 10
let ej10a = 2;
let ej10b = 3;
let ej10c = 4;

let ej10resultado = (ej10a + ej10b + ej10c) / 3;
console.log("El promedio es: " + ej10resultado);
