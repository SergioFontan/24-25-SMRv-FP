# Ejercicios lectura de código.
El objetivo es interpretar las líneas de código y comprender la salida del console.log como resultado.

## Cálculo de Puntuación y Comparación de Rango

```javascript
let puntuacion1 = 70;
let puntuacion2 = 85;
let total = puntuacion1 + puntuacion2;
let media = total / 2;
let enRango = media >= 60 && media <= 80;
console.log("Puntuación total: " + total);
console.log("¿Media dentro de 60-80?" + enRango);
```

## Calcular Área y Perímetro de un Rectángulo

```javascript
let largo = 15;
let ancho = 10;
let area = largo * ancho;
let perimetro = 2 * (largo + ancho);
console.log("Área del rectángulo:" + area);
console.log("Perímetro del rectángulo:" + perimetro);
```

## Comparación de Edad y Permiso en Evento

```javascript
let edad = 17;
let permisoPadres = true;
let acceso = edad >= 18 || permisoPadres;
let mensajeAcceso = "¿Acceso al evento? " + acceso;
console.log("Edad del usuario:" + edad);
console.log(mensajeAcceso);
```

## Verificar Divisibilidad de Dos Números

```javascript
let numero = 24;
let esDivisiblePor3 = numero % 3 === 0;
let esDivisiblePor4 = numero % 4 === 0;
let divisibleAmbos = esDivisiblePor3 && esDivisiblePor4;
console.log("¿Divisible entre 3?" + esDivisiblePor3);
console.log("¿Divisible entre 3 y 4?" + divisibleAmbos);
```

## Calcular el Precio Final con Impuestos y Descuentos

```javascript
let precioBase = 200;
let impuesto = precioBase * 0.18;
let descuento = 15;
let precioFinal = precioBase + impuesto - descuento;
console.log("Precio con impuestos:" + (precioBase + impuesto));
console.log("Precio final con descuento:" + precioFinal);
```

## Comparación de Velocidad Máxima y Velocidad del Vehículo

```javascript
let velocidadMaxima = 120;
let velocidadVehiculo = 110;
let sobrepasa = velocidadVehiculo > velocidadMaxima;
let dentroLimite = velocidadVehiculo <= velocidadMaxima;
console.log("¿Vehículo sobrepasa el límite? " + sobrepasa);
console.log("¿Vehículo dentro del límite? " + dentroLimite);
```

## Evaluación de Rango de Temperatura para Actividad

```javascript
let temperaturaActual = 25;
let tempMinima = 18;
let tempMaxima = 30;
let dentroRango = temperaturaActual >= tempMinima && temperaturaActual <= tempMaxima;
console.log("Temperatura actual: " + temperaturaActual);
console.log("¿Dentro del rango ideal? " + dentroRango);
```

## Comparación de Dos Puntajes y Media

```javascript
let puntaje1 = 75;
let puntaje2 = 85;
let mediaPuntajes = (puntaje1 + puntaje2) / 2;
let igualPuntajes = puntaje1 === puntaje2;
console.log("Media de puntajes: " + mediaPuntajes);
console.log("¿Puntajes iguales? " + igualPuntajes);
```

## Evaluación de Edad para Descuento Familiar

```javascript
let edadPadre = 40;
let edadHijo = 15;
let descuentoFamiliar = edadPadre >= 35 && edadHijo < 18;
let mensajeDescuento = "¿Califica para descuento familiar? " + descuentoFamiliar;
console.log("Edad del padre: " + edadPadre);
console.log(mensajeDescuento);
```

## Calcular Costo Total con Cargo Extra

```javascript
let costoInicial = 80;
let cargoExtra = 15;
let costoTotal = costoInicial + cargoExtra;
let mensajeCosto = "Costo total con cargos: $" + costoTotal;
console.log("Costo inicial: " + costoInicial);
console.log(mensajeCosto);
```

## Verificar si Número es Par y Multiplicación con Rango

```javascript
let numero = 10;
let esPar = numero % 2 === 0;
let multiploCinco = numero % 5 === 0;
let resultadoMultiploPar = esPar && multiploCinco;
console.log("¿El número es par? " + esPar);
console.log("¿Es múltiplo de 5 y par? " + resultadoMultiploPar);
```