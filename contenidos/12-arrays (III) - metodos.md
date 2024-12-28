
# Métodos de Arrays: Manipulación del Primer y Último Elemento

Los arrays en JavaScript tienen métodos que permiten agregar, eliminar o modificar elementos en posiciones específicas. 

A continuación, exploraremos los métodos que trabajan con el **primer** y el **último elemento** de un array:

---

## **1. Agregar al Final: `push()`**
El método `push()` agrega uno o más elementos al **final** del array.

### **Sintaxis:**
```javascript
array.push(elemento1, elemento2, ...);
```

### **Ejemplo:**
```javascript
let frutas = ["manzana", "pera"];
frutas.push("uva"); // Agrega "uva" al final
console.log(frutas); // ["manzana", "pera", "uva"]
```

---

## **2. Eliminar del Final: `pop()`**
El método `pop()` elimina el **último elemento** del array y devuelve el elemento eliminado.

### **Sintaxis:**
```javascript
let elementoEliminado = array.pop();
```

### **Ejemplo:**
```javascript
let frutas = ["manzana", "pera", "uva"];
let ultimaFruta = frutas.pop(); // Elimina "uva"
console.log(frutas); // ["manzana", "pera"]
console.log(ultimaFruta); // "uva"
```

---

## **3. Agregar al Inicio: `unshift()`**
El método `unshift()` agrega uno o más elementos al **inicio** del array.

### **Sintaxis:**
```javascript
array.unshift(elemento1, elemento2, ...);
```

### **Ejemplo:**
```javascript
let frutas = ["manzana", "pera"];
frutas.unshift("fresa"); // Agrega "fresa" al inicio
console.log(frutas); // ["fresa", "manzana", "pera"]
```

---

## **4. Eliminar del Inicio: `shift()`**
El método `shift()` elimina el **primer elemento** del array y devuelve el elemento eliminado.

### **Sintaxis:**
```javascript
let elementoEliminado = array.shift();
```

### **Ejemplo:**
```javascript
let frutas = ["manzana", "pera", "uva"];
let primeraFruta = frutas.shift(); // Elimina "manzana"
console.log(frutas); // ["pera", "uva"]
console.log(primeraFruta); // "manzana"
```

---

## **5. Ejemplo Combinado**
Imaginemos que queremos simular una fila de personas en una tienda donde:
1. Se agrega una persona al final de la fila (`push`).
2. Se atiende a la persona al frente de la fila (`shift`).

```javascript
let fila = ["Juan", "Ana", "Pedro"];

// Una nueva persona llega
fila.push("María");
console.log(fila); // ["Juan", "Ana", "Pedro", "María"]

// Se atiende a la primera persona
let atendido = fila.shift();
console.log(atendido); // "Juan"
console.log(fila); // ["Ana", "Pedro", "María"]
```

---

## **Resumen de Métodos**

| **Método**      | **Acción**                                   | **Ejemplo Resultado**                    |
|------------------|---------------------------------------------|------------------------------------------|
| `push()`         | Agrega al final                            | `["manzana", "pera"] → ["manzana", "pera", "uva"]` |
| `pop()`          | Elimina el último elemento                 | `["manzana", "pera", "uva"] → ["manzana", "pera"]` |
| `unshift()`      | Agrega al inicio                           | `["manzana", "pera"] → ["fresa", "manzana", "pera"]` |
| `shift()`        | Elimina el primer elemento                 | `["manzana", "pera", "uva"] → ["pera", "uva"]` |

---
