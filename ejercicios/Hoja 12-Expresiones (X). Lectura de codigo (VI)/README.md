# Ejercicios lectura de código.
El objetivo es interpretar las líneas de código y comprender la salida del console.log como resultado.

## Cálculo de Área y Verificación de Límite

```javascript
let base = 8;
let altura = 5;
let area = base * altura;
let limite = 40;
let superaLimite = area > limite;
console.log("Área del rectángulo: " + area);
console.log("¿Área supera el límite? " + superaLimite);
```

## Verificación de Disponibilidad y Rango de Precio

```javascript
let precio = 120;
let disponible = true;
let precioRazonable = precio < 150 && disponible;
console.log("Precio del producto: " + precio);
console.log("¿Disponible y a buen precio? " + precioRazonable);
```

## Comparación de Dos Números con Resultado

```javascript
let num1 = 45;
let num2 = 30;
let mayor = num1 > num2;
let menor = num1 < num2;
console.log("¿num1 es mayor que num2? " + mayor);
console.log("¿num1 es menor que num2? " + menor);
```

## Calcular Costo Total con Cargo por Servicio

```javascript
let costoBase = 200;
let cargoServicio = 20;
let totalConCargo = costoBase + cargoServicio;
let supera200 = totalConCargo > 200;
console.log("Costo con cargo: " + totalConCargo);
console.log("¿Costo supera los 200? " + supera200);
```

## Calcular Promedio de Tres Notas y Evaluar

```javascript
let nota1 = 70;
let nota2 = 85;
let nota3 = 90;
let promedio = (nota1 + nota2 + nota3) / 3;
let supera75 = promedio >= 75;
console.log("Promedio de notas: " + promedio);
console.log("¿Promedio igual o superior a 75? " + supera75);
```

## Verificación de Horario de Funcionamiento

```javascript
let horaApertura = 9;
let horaCierre = 18;
let horaActual = 12;
let abierto = horaActual >= horaApertura && horaActual < horaCierre;
console.log("Hora actual: " + horaActual);
console.log("¿Establecimiento abierto? " + abierto);
```

## Calcular Edad a partir de Año de Nacimiento

```javascript
let añoActual = 2023;
let añoNacimiento = 1995;
let edad = añoActual - añoNacimiento;
let esMayorEdad = edad >= 18;
console.log("Edad del usuario: " + edad);
console.log("¿Es mayor de edad?" + esMayorEdad);
```

## Evaluación de Velocidad y Distancia Recorrida

```javascript
let velocidad = 60; // en km/h
let tiempo = 2; // en horas
let distancia = velocidad * tiempo;
let supera50km = distancia >= 50;
console.log("Distancia recorrida: " + distancia + " km");
console.log("¿Distancia mayor o igual a 50 km? " + supera50km);
```

## Verificación de Puntos Acumulados y Recompensa

```javascript
let puntosAcumulados = 150;
let puntosNecesarios = 100;
let obtieneRecompensa = puntosAcumulados >= puntosNecesarios;
let mensajeRecompensa = "¿Cliente obtiene recompensa? " + obtieneRecompensa;
console.log("Puntos acumulados: " + puntosAcumulados);
console.log(mensajeRecompensa);
```

## Comparación de Altura para Entrada en Atracción

```javascript
let alturaMinima = 120;
let alturaUsuario = 130;
let accesoPermitido = alturaUsuario >= alturaMinima;
let mensajeAcceso = "¿Altura suficiente para entrar? " + accesoPermitido;
console.log("Altura del usuario:", alturaUsuario);
console.log(mensajeAcceso);
```

## Cálculo de Ganancia con Inversión y Tasa de Interés

```javascript
let inversion = 500;
let tasaInteres = 0.05;
let ganancia = inversion * tasaInteres;
let totalFinal = inversion + ganancia;
console.log("Ganancia obtenida: " + ganancia);
console.log("Monto total después de interés:" + totalFinal);
```
