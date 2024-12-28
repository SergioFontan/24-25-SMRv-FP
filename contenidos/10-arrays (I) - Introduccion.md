
# Introducción a Arrays

## 1. ¿Qué es un array?
Un **array** es una estructura de datos que almacena múltiples valores en una sola variable. 
 
Los valores están organizados en un **orden específico** y cada uno tiene una **posición (índice)**.

**Ejemplo:**
```javascript
let colores = ["rojo", "verde", "azul"];
// Índices:    [0]      [1]       [2]
```

---

## 2. Cómo crear un array
Puedes crear un array de varias formas:

- **Array literal:**
  ```javascript
  let numeros = [10, 20, 30];
  ```

- **Array vacío (y agregar valores después):**
  ```javascript
  let frutas = [];
  frutas[0] = "manzana";
  frutas[1] = "pera";
  ```

---

## 3. Acceder a elementos
Usa el índice del elemento (empezando desde 0) para acceder a sus valores.
```javascript
let colores = ["rojo", "verde", "azul"];
console.log(colores[0]); // "rojo"
console.log(colores[2]); // "azul"
```

---

## 4. Modificar elementos
Puedes modificar cualquier elemento directamente usando su índice.
```javascript
let numeros = [10, 20, 30];
numeros[1] = 50; // Cambia el valor en la posición 1
console.log(numeros); // [10, 50, 30]
```

---

## 5. Propiedad `.length`
La propiedad `.length` devuelve el número de elementos en un array.
```javascript
let frutas = ["manzana", "pera", "uva"];
console.log(frutas.length); // 3
```

---

## Ejercicios Prácticos

### **1. Crear arrays**
1. Crea un array llamado `animales` que contenga tres nombres de animales.
2. Crea un array vacío llamado `miLista` y agrega tres valores (uno en cada posición).

### **2. Acceder a elementos**
Dado el siguiente array:
```javascript
let numeros = [5, 10, 15, 20];
```
1. Accede al primer elemento y al último.

### **3. Modificar elementos**
Usando este array:
```javascript
let colores = ["rojo", "verde", "azul"];
```
1. Cambia el segundo elemento a `"amarillo"` y verifica el nuevo array.

### **4. Comprobar la longitud**
1. Declara un array llamado `dias` con los nombres de los días de la semana.
2. Imprime cuántos elementos tiene.

---

## Material de Soporte

### Ejemplo combinado con condicionales
Verifica si el primer elemento de un array es igual a cierto valor:
```javascript
let frutas = ["manzana", "pera", "uva"];
if (frutas[0] === "manzana") {
    console.log("La primera fruta es una manzana.");
}
```

---

## Posibles Errores Comunes al Trabajar con Arrays

### **1. Acceder a índices inexistentes**

Acceder a un índice fuera del rango del array devolverá `undefined` en lugar de un error explícito.

**Ejemplo:**

```javascript
let colores = ["rojo", "verde", "azul"];
console.log(colores[3]); // undefined
```

---

### **2. Sobrescribir accidentalmente el array completo**

Asignar directamente un nuevo valor a la variable del array puede sobrescribirlo, perdiendo todos los datos previos.

**Ejemplo:**

```javascript
let numeros = [1, 2, 3];
numeros = 10; // Error: el array se convierte en un número
```

---

### **3. Mezclar tipos de datos en un array**

Los arrays en JavaScript pueden almacenar diferentes tipos de datos, pero esto puede generar confusión o errores en operaciones específicas.

**Ejemplo:**

```javascript
let datos = [10, "texto", true];
console.log(datos[0] + datos[1]); // Resultado inesperado: "10texto"
```

**Evitar el error:**
Asegúrate de que el array contenga valores del mismo tipo si realizarás operaciones homogéneas.

---

### **4. Uso incorrecto de la propiedad `.length`**

Intentar acceder a un índice igual o mayor a la longitud del array es un error común.

**Ejemplo:**

```javascript
let frutas = ["manzana", "pera"];
console.log(frutas[frutas.length]); // undefined
```

**Evitar el error:**
Recuerda que el último índice válido siempre es `array.length - 1`:

```javascript
console.log(frutas[frutas.length - 1]); // "pera"
```

---

### **5. No inicializar correctamente un array vacío**

Tratar de acceder a índices de un array que aún no ha sido inicializado o está vacío.

**Ejemplo:**

```javascript
let miArray = [];
console.log(miArray[0]); // undefined
```

**Evitar el error:**
Verifica si el array tiene elementos antes de acceder:

```javascript
if (miArray.length > 0) {
    console.log(miArray[0]);
} else {
    console.log("El array está vacío.");
}
```

---

### **6. Olvidar que los índices empiezan desde 0**

Un error frecuente es tratar de acceder al "primer" elemento como si fuera índice 1.

**Ejemplo:**

```javascript
let colores = ["rojo", "verde", "azul"];
console.log(colores[1]); // "verde", no "rojo"
```

**Evitar el error:**
Recuerda que los índices de arrays comienzan desde 0.
