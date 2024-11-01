# Ejercicios lectura de código.
El objetivo es interpretar las líneas de código y comprender la salida del console.log como resultado.

## Ejercicio 1

```javascript
let edad = 16;
let permiso = edad >= 18 && true;
console.log("¿Permiso otorgado? " + permiso); 
```

## Ejercicio 2

```javascript
let distancia = 300;
let tiempo = 2;
let velocidad = distancia / tiempo;
let dentroLimite = velocidad <= 120;
console.log("¿Velocidad dentro del límite? " + dentroLimite);
```


## Ejercicio 3

```javascript
let puntos = 45;
let extra = 10;
puntos = puntos + extra;
let cumple = puntos > 50 || puntos === 55;
console.log("¿Cumple con los requisitos? " + cumple);
```

## Ejercicio 4

```javascript
let nota1 = 80;
let nota2 = 75;
let revision = nota1 >= 70 && nota2 >= 70;
console.log("¿Pasó revisión? " + revision);
```

## Ejercicio 5

```javascript
let nombre = "Luis";
let tieneLicencia = false;
let mensaje = "Permiso de conducir para " + nombre + ": " + !tieneLicencia;
console.log(mensaje);
```

## Ejercicio 6

```javascript
let costo = 250;
let envioGratis = costo >= 200;
console.log("¿Envío gratis? " + envioGratis);
```

## Ejercicio 7

```javascript
let numero = 15;
numero += 5;
let enRango = numero >= 10 && numero <= 20;
console.log("¿Número en rango 10-20? " + enRango);
```

## Ejercicio 8

```javascript
let compra = 150;
let descuentoAplicado = compra > 100 || compra === 200;
console.log("¿Descuento aplicado? " + descuentoAplicado);
```

## Ejercicio 9

```javascript
let salario = 1200;
let aumento = 300;
let nuevoSalario = salario + aumento;
let dentroLimite = nuevoSalario <= 1500;
console.log("¿Salario dentro del límite? " + dentroLimite);
```

## Ejercicio 10

```javascript
let edadMinima = 18;
let edadUsuario = 21;
let acceso = edadUsuario >= edadMinima && true;
console.log("¿Acceso permitido? " + acceso);
```

## Ejercicio 11

```javascript
let puntajeInicial = 45;
let puntajeExtra = 30;
let puntajeTotal = puntajeInicial + puntajeExtra;
let cumpleObjetivo = puntajeTotal >= 70;
console.log("¿Cumple con el objetivo? " + cumpleObjetivo);
```

## Ejercicio 12

```javascript
let compra = 70;
let adicional = 30;
let totalCompra = compra + adicional;
let puedeComprar = totalCompra >= 100 || compra >= 50;
console.log("¿Puede hacer la compra? " + puedeComprar);
```

## Ejercicio 13

```javascript
let examen1 = 85;
let examen2 = 75;
let aprobado = examen1 >= 60 && examen2 >= 60;
console.log("¿Aprobó ambos exámenes? " + aprobado);
```