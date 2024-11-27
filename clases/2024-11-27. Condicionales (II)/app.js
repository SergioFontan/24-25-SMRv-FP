// Hoja 19. 

// Ejercicio 01.
// let origen = prompt("Dime la moneda origen");         // Moneda de origen (euro, dolar, yen...)
// let destino = prompt("Dime la moneda destino");       // Moneda de destino (euro, dolar, yen...)

// const euroADolar = 1.06; // Esto se usa si quiero cambiar de euro a dolar
// const dolarAEuro = 0.95; // Esto se usa si quiero cambir de dolar a euro

// // Si el origen es euro y el destino es dolar, entonces uso euroADolar
// if(origen == "euro" && destino == "dolar"){
//     let valor = parseFloat(prompt("Introduce el valor")); // Valor que va a ser cambiado
//     console.log(euroADolar * valor);
// }

// if(origen == "dolar" && destino == "euro"){
//     let valor = parseFloat(prompt("Introduce el valor")); // Valor que va a ser cambiado
//     console.log(dolarAEuro * valor);
// }

// // Este caso es en el que el origen y el destino es el mismo ya sea siempre dolar o siempre euro
// if((origen == "euro" && destino == "euro") || (origen == "dolar" && destino == "dolar")){
//     alert("Te has equivocado al poner origen y destino como lo mismo");
// }

// Ejercicio 02.
let nota1 = parseFloat(prompt("Introduce una nota del 0 al 10"));  
let nota2 = parseFloat(prompt("Introduce una nota del 0 al 10"));  
let nota3 = parseFloat(prompt("Introduce una nota del 0 al 10"));  

console.log("La primera nota es: " + nota1);
console.log("La segunda nota es: " + nota2);
console.log("La tercera nota es: " + nota3);

// Verificar que esta entre 0 y 10 la calificacion
if((nota1 >= 0 && nota1 <= 10) && (nota2 >= 0 && nota2 <= 10) && (nota3 >= 0 && nota3 <= 10)){
    let resultado = (nota1 + nota2 + nota3) / 3;
    console.log("El promedio es " + resultado);
}

// Verificamos si nota1 esta fuera de rango
if(nota1 < 0 || nota1 > 10){
    alert("Nota 1 esta fuera de rango");
}

// Verificamos si nota2 esta fuera de rango
if(nota2 < 0 || nota2 > 10){
    alert("Nota 2 esta fuera de rango");
}

// Verificamos si nota3 esta fuera de rango
if(nota3 < 0 || nota3 > 10){
    alert("Nota 3 esta fuera de rango");
}