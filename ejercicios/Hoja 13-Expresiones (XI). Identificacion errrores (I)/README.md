# Ejercicios lectura de código.
El objetivo es interpretar las líneas de código y detectar posibles problemas lógicos o sintácticos que impidan obtener el resultado deseado.

## Ejercicio 1: Control de acceso en un evento exclusivo

Se necesita verificar si una persona tiene acceso a un evento especial, donde solo pueden entrar aquellos mayores de 18 años o quienes cuenten con un permiso especial. Observa el código y asegúrate de que el sistema esté permitiendo el acceso a quienes cumplen los requisitos.

```javascript
let edad = 16;
let tienePermiso = true;
let acceso = edad >= 18 && tienePermiso; 
console.log("¿Tiene acceso? " + acceso);
```

## Ejercicio 2: Clasificación de número par

Este sistema determina si un número es par o no. Observa el código para confirmar que realmente devuelva un resultado correcto cuando el número ingresado sea par.

```javascript
let numero = 7;
let esPar = numero % 2 = 0; 
console.log("¿El número es par? " + esPar);
```

## Ejercicio 3: Evaluación de descuento especial

Un negocio ofrece descuentos en algunos productos. Si el precio alcanza ciertos valores, se debe aplicar un descuento. Revisa el código y verifica que el descuento se aplique correctamente cuando el precio cumpla con las condiciones.

```javascript
let precio = 150;
let descuento = precio >= 100 || precio = 120; 
console.log("¿Descuento aplicado? " + descuento);
```

## Ejercicio 4: Resultados de examen

Después de presentar dos exámenes, un estudiante quiere saber si las puntuaciones obtenidas son idénticas. Observa el código para confirmar que detecte correctamente cuando ambas calificaciones son iguales.

```javascript
let examen1 = 85;
let examen2 = "85"; 
let iguales = examen1 === examen2;
console.log("¿Las puntuaciones son iguales? " + iguales);
```

## Ejercicio 5: Cálculo de una factura completa

Este sistema calcula el total de una compra añadiendo los impuestos a un monto base. Verifica que el código esté calculando el total correcto para la factura y que el resultado refleje lo esperado.

```javascript
let base = 200;
let impuesto = 20;
let total = base + impuesto == 220; 
console.log("Total con impuestos: " + total);
```

## Ejercicio 6: Habilidad para conducir

Aquí se determina si una persona tiene edad suficiente para conducir. Revisa el código para asegurarte de que refleje correctamente la edad mínima para poder manejar.

```javascript
let edad = 17;
let tieneLicencia = edad >= 18 && true; 
console.log("¿Puede conducir? " + tieneLicencia);
```

## Ejercicio 7: Comparación de nombre y apellido

El sistema verifica si el nombre y el apellido de una persona son idénticos. Confirma que el código sea capaz de distinguir con precisión entre las dos entradas.

```javascript
let nombre = "Juan";
let apellido = 'juan'; 
let esIgual = nombre === apellido;
console.log("¿Nombre y apellido son iguales?", esIgual);
```

## Ejercicio 8: Evaluación de salario mínimo

Aquí se verifica si un salario cumple con el estándar mínimo requerido. Asegúrate de que el código evalúe correctamente el cumplimiento del salario mínimo.

```javascript
let salario = 1000;
let salarioMinimo = 900;
let cumple = salario = salarioMinimo; 
console.log("¿Cumple con el salario mínimo? " + cumple);
```

## Ejercicio 9: Acceso a descuentos por edad

Este sistema aplica un descuento a ciertos grupos de edad, tanto a menores de 12 como a mayores de 65. Confirma que el código esté aplicando los descuentos correctamente según las edades definidas.

```javascript
let edad = 65;
let descuento = edad <= 12 && edad >= 65; 
console.log("¿Aplica descuento? " + descuento);
```

## Ejercicio 10: Comparación de precios

Se quiere comparar dos precios para saber si uno de ellos es mayor. Verifica que el sistema esté evaluando correctamente cuál es el mayor de los dos precios.

```javascript
let precio1 = 50;
let precio2 = 70;
let esMayor = precio1 = precio2; 
console.log("¿Precio1 es mayor que Precio2? " + esMayor);
```