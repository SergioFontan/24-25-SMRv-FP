# Ejercicios lectura de código.
El objetivo es interpretar las líneas de código y detectar posibles problemas lógicos o sintácticos que impidan obtener el resultado deseado.

## Ejercicio 1: Verificación de requisitos para inscripción en curso avanzado

Para inscribirse en el curso avanzado, un estudiante necesita haber completado el curso básico y tener al menos 5 puntos de experiencia. 

```javascript
let cursoBasicoCompletado = "true";
let experiencia = 5;
let puedeInscribirse = cursoBasicoCompletado && experiencia >= 5;
console.log("¿Puede inscribirse en el curso avanzado? " + puedeInscribirse);
```

## Ejercicio 2: Cálculo de precio final con descuento y envío gratuito

Este sistema calcula el precio final de una compra aplicando un descuento y añade envío gratuito si el total supera $100. 

```javascript
let precioProducto = 80;
let descuento = 20;
let envioGratis = (precioProducto - descuento) > 100 == true;
let precioFinal = precioProducto - descuento + envioGratis;
console.log("¿El precio final incluye envío gratuito? " + envioGratis);
console.log("Precio final con descuento y envío: " + precioFinal);
```

## Ejercicio 3: Validación de acceso según edad y suscripción activa

Un sitio restringe el acceso a usuarios mayores de 21 años que tengan una suscripción activa. Revisa el código para que se respete esta condición de acceso.

```javascript
let edad = "22";
let suscripcionActiva = false;
let accesoPermitido = edad > 21 && suscripcionActiva == "true";
console.log("¿Tiene acceso al sitio? " + accesoPermitido);
```

## Ejercicio 4: Comparación de rendimiento en pruebas

Este sistema evalúa los puntajes de tres pruebas para determinar si la primera es mayor que la segunda y la segunda es mayor que la tercera.

```javascript
let prueba1 = 85;
let prueba2 = "80";
let prueba3 = 78;
let enOrden = prueba1 > prueba2 > prueba3;
console.log("¿Los puntajes están en orden descendente? " + enOrden);
```

## Ejercicio 5: Control de stock mínimo y alerta de pedido

Un inventario activa una alerta si el stock de productos es menor que el mínimo requerido o si el stock es 0. 

```javascript
let stock = 5;
let stockMinimo = "10";
let alertaPedido = stock <= stockMinimo || stock = 0;
console.log("¿Es necesario hacer un pedido? " + alertaPedido);
```

## Ejercicio 6: Cálculo de sueldo semanal con horas extra

El sistema calcula el sueldo semanal de un empleado en función de las horas trabajadas y las horas extra.

```javascript
let horasTrabajadas = 40;
let horasExtra = 5;
let pagoPorHora = 15;
let pagoExtra = pagoPorHora * 1.5;
let sueldoSemanal = horasTrabajadas * pagoPorHora + horasExtra * pagoExtra == 700;
console.log("Sueldo semanal calculado: " + sueldoSemanal);
```

## Ejercicio 7: Comparación de temperaturas para una alarma

Este sistema activa una alarma si la temperatura actual es mayor o igual a la temperatura máxima permitida o si es menor o igual a la temperatura mínima permitida. 

```javascript
let temperaturaActual = 28;
let temperaturaMinima = 15;
let temperaturaMaxima = "30";
let activarAlarma = temperaturaActual >= temperaturaMaxima && temperaturaActual <= temperaturaMinima;
console.log("¿Se activa la alarma? " + activarAlarma);
```

## Ejercicio 8: Cálculo de puntos de recompensa y estado VIP

Los clientes obtienen puntos de recompensa por cada compra. Al alcanzar 100 puntos, se activa su estado VIP. 

```javascript
let puntos = 95;
let compraActual = 10;
let estadoVIP = puntos + compraActual >= 100 == true;
puntos = puntos + compraActual;
console.log("¿El cliente es VIP? " + estadoVIP);
console.log("Puntos acumulados: " + puntos);
```

## Ejercicio 9: Validación de edad y país para evento internacional

Para asistir a un evento internacional, se requiere ser mayor de edad y ser de un país en la lista permitida.

```javascript
let edadUsuario = 18;
let pais = "Mexico";
let paisPermitido = pais == "Argentina" || "Chile" || "Peru";
let accesoEvento = edadUsuario >= 18 || paisPermitido;
console.log("¿Puede asistir al evento internacional? " + accesoEvento);
```

