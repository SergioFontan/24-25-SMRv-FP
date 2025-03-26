# Bucle While 

## 1. Explicación General del Bucle while

El bucle **while** es una estructura de control que permite ejecutar repetidamente un bloque de código mientras se cumpla una condición dada. La sintaxis básica es:

```javascript
while (condición) {
  // Bloque de código a ejecutar mientras la condición sea verdadera
}
```

- **Condición:** Es una expresión booleana que se evalúa antes de cada iteración del bucle. Si la condición es `true`, se ejecuta el bloque de código; si es `false`, el bucle termina.
- **Bloque de Código:** Es el conjunto de instrucciones que se repiten mientras la condición se mantenga verdadera.

**Objetivo:**  
El bucle **while** se utiliza cuando no se conoce de antemano el número exacto de iteraciones, sino que depende de la evaluación dinámica de una condición. 

Esto lo hace muy útil para situaciones en las que se quiere iterar hasta que se alcance un objetivo.

---

## 2. Herramientas y Estrategias en el Uso de **while**

Cuando se utiliza un bucle **while**, es importante controlar la ejecución para evitar bucles infinitos. Dos estrategias comunes son:

### a) Uso de un Contador

Un **contador** es una variable que se incrementa o decrementa en cada iteración.

**Ejemplo de Contador:**

```javascript
let contador = 0;
while (contador < 5) {
  console.log("Iteración número:" + contador);
  contador++;
}
```

### b) Uso de una Bandera

Una **bandera** (o flag) es una variable booleana que indica si se ha cumplido una condición.

**Ejemplo de Bandera:**

```javascript
let encontrado = false;
let numero = 1;

while (!encontrado) {
  if (numero > 10 && numero % 2 === 0) {
    console.log("Número encontrado:" + numero);
    encontrado = true;
  }
  numero++;
}
```

---

## 3. Resumen de la Sintaxis y Ejemplos

### Sintaxis Básica:

```javascript
while (condición) {
  // Código a ejecutar
}
```

### Ejemplo con Contador:

```javascript
let contador = 0;
while (contador < 3) {
  console.log("Iteración", contador);
  contador++;
}
```

### Ejemplo con Bandera:

```javascript
let encontrado = false;
let valor = 1;
while (!encontrado) {
  if (valor === 10) { 
    console.log("Valor encontrado:", valor);
    encontrado = true;
  }
  valor++;
}
```