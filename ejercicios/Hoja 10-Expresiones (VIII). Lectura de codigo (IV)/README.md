# Ejercicios lectura de código.
El objetivo es interpretar las líneas de código y comprender la salida del console.log como resultado.

## Ajuste de Variables y Operador AND

```javascript
let edad = 16;
let permiso = edad >= 18 && true;
console.log("¿Permiso otorgado?", permiso); 
```

## Calcular Total con Descuento.

```javascript
let precio = 50;
let cantidad = 8;
let descuento = cantidad > 5 && 5;
let total = precio * cantidad - descuento;
console.log("Total con posible descuento:", total);
```

## Multiplicación y Evaluación con OR

```javascript
let puntos = 45;
let extra = 10;
puntos = puntos + extra;
let cumple = puntos > 50 || puntos === 55;
console.log("¿Cumple con los requisitos?", cumple);
```

## Resta y AND para Estado de Revisión

```javascript
let nota1 = 80;
let nota2 = 75;
let revision = nota1 >= 70 && nota2 >= 70;
console.log("¿Pasó revisión?", revision);
```

## Concatenación de Texto y Números con OR

```javascript
let nombre = "Luis";
let tieneLicencia = false;
let mensaje = "Permiso de conducir para " + nombre + ": " + !tieneLicencia;
console.log(mensaje);
```

## Cálculo de Costo y Evaluación de Envío Gratis

```javascript
let costo = 250;
let envioGratis = costo >= 200;
console.log("¿Envío gratis? " + envioGratis);
```

## Verificar Rango con AND y Ajuste de Valor

```javascript
let numero = 15;
numero += 5;
let enRango = numero >= 10 && numero <= 20;
console.log("¿Número en rango 10-20? " + enRango);
```

## Evaluación de Descuento Aplicado Usando OR

```javascript
let compra = 150;
let descuentoAplicado = compra > 100 || compra === 200;
console.log("¿Descuento aplicado? " + descuentoAplicado);
```

## Calcular Aumento de Salario y Verificar Límite

```javascript
let salario = 1200;
let aumento = 300;
let nuevoSalario = salario + aumento;
let dentroLimite = nuevoSalario <= 1500;
console.log("¿Salario dentro del límite? " + dentroLimite);
```

## Verificación de Edad para Evento con AND

```javascript
let edadMinima = 18;
let edadUsuario = 21;
let acceso = edadUsuario >= edadMinima && true;
console.log("¿Acceso permitido? " + acceso);
```

## Suma y Verificación de Objetivo

```javascript
let puntajeInicial = 45;
let puntajeExtra = 30;
let puntajeTotal = puntajeInicial + puntajeExtra;
let cumpleObjetivo = puntajeTotal >= 70;
console.log("¿Cumple con el objetivo? " + cumpleObjetivo);
```

## Evaluación de Compra con OR y Concatenación

```javascript
let compra = 70;
let adicional = 30;
let totalCompra = compra + adicional;
let puedeComprar = totalCompra >= 100 || compra >= 50;
console.log("¿Puede hacer la compra? " + puedeComprar);
```

## Evaluar Si Aprobó Ambos Exámenes

```javascript
let examen1 = 85;
let examen2 = 75;
let aprobado = examen1 >= 60 && examen2 >= 60;
console.log("¿Aprobó ambos exámenes? " + aprobado);
```

## Cálculo de Velocidad y Verificación con AND

```javascript
let distancia = 300;
let tiempo = 2;
let velocidad = distancia / tiempo;
let dentroLimite = velocidad <= 120;
console.log("¿Velocidad dentro del límite? " + dentroLimite);
```