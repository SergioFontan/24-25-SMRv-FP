# Ejercicios lectura de código.
El objetivo es interpretar las líneas de código y detectar posibles problemas lógicos o sintácticos que impidan obtener el resultado deseado.

## Ejercicio 1: Aprobación con mérito

Este sistema evalúa si una persona aprobó con una calificación destacada. Asegúrate de que el sistema reconozca correctamente cuando alguien ha logrado una calificación destacable.

```javascript
let aprobado = true;
let altaNota = false;
let resultado = aprobado || altaNota; 
console.log("¿Aprobado con alta nota? " + resultado);
```

## Ejercicio 2: Descuento para personas mayores

Aquí se aplica un descuento especial a personas mayores de 65 años. 

```javascript
let edad = 70;
let descuento = edad >= 65 == true;
console.log("¿Aplica descuento por edad? " + descuento);
```

## Ejercicio 3: Permiso de compra basado en edad y saldo

Un comprador debe cumplir con ciertos requisitos de edad y saldo para completar una compra.

```javascript
let edad = 20;
let saldo = 300;
let permisoCompra = edad >= 18 && saldo >= 100; 
console.log("¿Tiene permiso de compra? " + permisoCompra);
```

## Ejercicio 4: Cumplimiento de peso límite

Aquí se verifica si un peso específico cumple con un límite establecido. 

```javascript
let peso = 70;
let limite = "70";
let esPermitido = peso >= limite;
console.log("¿Peso permitido? " + esPermitido);
```

## Ejercicio 5: Suma de puntos en una competencia

Se suman los puntos obtenidos por un participante para ver si alcanzan el total esperado. 

```javascript
let puntos1 = 40;
let puntos2 = 50;
let total = puntos1 + puntos2 == 90; 
console.log("Total de puntos: " + total);
```

## Ejercicio 6: Rango de edad para ingreso

Se requiere verificar si una persona está en el rango de edad (entre 19 y 25 años) permitido para ingresar a un evento. 

```javascript
let edad = 12;
let permitido = edad >= 18 && edad <= 25; 
console.log("¿Puede ingresar? " + permitido);
```

## Ejercicio 7: Acceso al club

Para acceder a este club, se necesita ser mayor de edad y contar con membresía activa. 

```javascript
let edad = 20;
let esMiembro = true;
let acceso = edad >= 18 && esMiembro == true; 
console.log("¿Acceso al club? " + acceso);
```

## Ejercicio 8: Revisión de saldo mínimo

Aquí se verifica si un saldo cumple con una cantidad mínima requerida. 

```javascript
let saldo = 100;
let cantidadMinima = "100";
let esIgual = saldo === cantidadMinima;
console.log("¿Saldo cumple con la cantidad mínima? " + esIgual);
```

## Ejercicio 9: Descuento aplicado al precio de un producto

El sistema calcula el precio de un producto después de aplicar un descuento. 

```javascript
let precio = 120;
let descuento = 20;
let total = precio - descuento == 100; 
console.log("¿Precio con descuento suficiente? " + total);
```
