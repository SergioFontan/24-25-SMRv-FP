# Ejercicios lectura de código.
El objetivo es interpretar las líneas de código e identificar el error presente en el código.

Pueden ser errores AND vs OR, errores en comparación, errores en asignación, error de comparación de distintos tipos (number, string, boolean), etc.

## Verificar si la edad o el permiso permiten el acceso

```javascript
let edad = 16;
let tienePermiso = true;
let acceso = edad >= 18 && tienePermiso; 
console.log("¿Tiene acceso? " + acceso);
```

## Comprobar si un número es par

```javascript
let numero = 7;
let esPar = numero % 2 = 0; 
console.log("¿El número es par? " + esPar);
```

## Determinar si se aplica descuento a un precio

```javascript
let precio = 150;
let descuento = precio >= 100 || precio = 120; 
console.log("¿Descuento aplicado?", descuento);
```

## Comparar dos exámenes para verificar si las puntuaciones son iguales

```javascript
let examen1 = 85;
let examen2 = "85"; 
let iguales = examen1 === examen2;
console.log("¿Las puntuaciones son iguales? " + iguales);
```

## Calcular el total de una compra incluyendo impuestos

```javascript
let base = 200;
let impuesto = 20;
let total = base + impuesto == 220; 
console.log("Total con impuestos: " + total);
```

## Verificar si una persona puede conducir según su edad

```javascript
let edad = 17;
let tieneLicencia = edad >= 18 && true; 
console.log("¿Puede conducir? " + tieneLicencia);
```

## Comparar si el nombre y el apellido son iguales

```javascript
let nombre = "Juan";
let apellido = 'juan'; 
let esIgual = nombre === apellido;
console.log("¿Nombre y apellido son iguales?", esIgual);
```

## Comprobar si el salario cumple con el salario mínimo

```javascript
let salario = 1000;
let salarioMinimo = 900;
let cumple = salario = salarioMinimo; 
console.log("¿Cumple con el salario mínimo? " + cumple);
```

## Determinar si se aplica descuento por ser menor o mayor de una cierta edad

```javascript
let edad = 65;
let descuento = edad <= 12 && edad >= 65; 
console.log("¿Aplica descuento? " + descuento);
```

## Comparar si el precio1 es mayor que el precio2

```javascript
let precio1 = 50;
let precio2 = 70;
let esMayor = precio1 = precio2; 
console.log("¿Precio1 es mayor que Precio2? " + esMayor);
```

## Verificar si una persona aprobó con una alta nota

```javascript
let aprobado = true;
let altaNota = false;
let resultado = aprobado || altaNota; 
console.log("¿Aprobado con alta nota? " + resultado);
```

## Comprobar si una persona aplica para descuento por ser mayor de edad

```javascript
let edad = 70;
let descuento = edad >= 65 == true;
console.log("¿Aplica descuento por edad? " + descuento);
```

## Verificar permiso de compra basado en edad y saldo

```javascript
let edad = 20;
let saldo = 300;
let permisoCompra = edad >= 18 && saldo >= 100; 
console.log("¿Tiene permiso de compra? " + permisoCompra);
```

## Comprobar si el peso es permitido según el límite

```javascript
let peso = 70;
let limite = "70";
let esPermitido = peso >= limite;
console.log("¿Peso permitido? " + esPermitido);
```

## Sumar puntos y verificar si cumplen con el total esperado

```javascript
let puntos1 = 40;
let puntos2 = 50;
let total = puntos1 + puntos2 == 90; 
console.log("Total de puntos: " + total);
```

## Evaluar si la edad está en el rango permitido para ingreso

```javascript
let edad = 12;
let permitido = edad >= 18 && edad <= 25; 
console.log("¿Puede ingresar? " + permitido);
```

## Verificar si una persona tiene acceso al club según edad y membresía

```javascript
let edad = 20;
let esMiembro = true;
let acceso = edad >= 18 && esMiembro == true; 
console.log("¿Acceso al club? " + acceso);
```

## Comparar si el saldo cumple con la cantidad mínima requerida

```javascript
let saldo = 100;
let cantidadMinima = "100";
let esIgual = saldo === cantidadMinima;
console.log("¿Saldo cumple con la cantidad mínima? " + esIgual);
```

## Calcular si el precio después del descuento es suficiente

```javascript
let precio = 120;
let descuento = 20;
let total = precio - descuento == 100; 
console.log("¿Precio con descuento suficiente? " + total);
```