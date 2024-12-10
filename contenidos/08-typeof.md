
# typeof en JavaScript

La palabra clave `typeof` en JavaScript es un operador que se utiliza para determinar el tipo de un valor. 

Es una herramienta esencial para comprobar tipos en tiempo de ejecución y manejar valores dinámicos en JavaScript.

---

## **Qué es `typeof`:**

- Es un operador **unario** (se aplica a un solo operando) que devuelve una cadena con el tipo del operando que se evalúa.
- Puede ser útil para:
  - Validar tipos de datos.
  - Evitar errores por uso incorrecto de tipos.
  - Depuración de código.

---

## **Sintaxis:**

```javascript
typeof operand
```

### **Parámetros:**
- **`operand`**: Cualquier valor o variable cuyo tipo quieras determinar.

### **Retorno:**
- Devuelve una **cadena de texto** que describe el tipo del operando.

---

## **Tipos que devuelve `typeof`:**

| Tipo de valor               | Resultado de `typeof` |
|-----------------------------|------------------------|
| **Números**                 | `"number"`            |
| **Cadenas de texto**         | `"string"`            |
| **Booleanos**                | `"boolean"`           |
| **Undefined**                | `"undefined"`         |
| **Objetos** (incluido `null`) | `"object"`            |
| **Funciones**                | `"function"`          |
| **BigInt**                   | `"bigint"`            |
| **Símbolos** (`Symbol`)      | `"symbol"`            |

---

## **Ejemplos básicos:**

### **Con tipos primitivos:**
```javascript
console.log(typeof 42);          // "number"
console.log(typeof "Hola");      // "string"
console.log(typeof true);        // "boolean"
console.log(typeof undefined);   // "undefined"
console.log(typeof null);        // "object" (peculiaridad histórica)
console.log(typeof Symbol());    // "symbol"
console.log(typeof 10n);         // "bigint" (BigInt)
```

### **Con objetos y funciones:**
```javascript
console.log(typeof {});          // "object"
console.log(typeof []);          // "object" (los arrays son objetos)
console.log(typeof new Date());  // "object"
console.log(typeof function(){}); // "function"
```

---

## **Casos especiales de `typeof`:**

1. **`null` devuelve `"object"`:**
   - Este es un **error histórico** en el lenguaje. `null` no es un objeto, pero `typeof null` devuelve `"object"`. 
   - Para verificar específicamente `null`, usa:
     ```javascript
     value === null
     ```

2. **`typeof NaN`:**
   - Aunque `NaN` (Not-a-Number) representa un número inválido, `typeof` lo clasifica como `"number"`:
     ```javascript
     console.log(typeof NaN); // "number"
     ```

3. **Arrays y objetos:**
   - Ambos son devueltos como `"object"`. Para diferenciar un array de un objeto, usa:
     ```javascript
     Array.isArray(value);
     ```

4. **Funciones:**
   - Las funciones se distinguen porque `typeof` devuelve `"function"`.
     ```javascript
     console.log(typeof function(){}); // "function"
     ```

5. **`typeof` con variables no declaradas:**
   - Si intentas usar `typeof` en una variable que no ha sido declarada, no genera un error, sino que devuelve `"undefined"`:
     ```javascript
     console.log(typeof noDeclarada); // "undefined"
     ```

---

## **Usos comunes:**

### 1. **Validar entradas de usuario:**
```javascript
function esNumero(valor) {
    return typeof valor === "number" && !isNaN(valor);
}

console.log(esNumero(42));        // true
console.log(esNumero("42"));      // false
```

### 2. **Evitar errores con valores indefinidos:**
```javascript
function verificarVariable(variable) {
    if (typeof variable === "undefined") {
        console.log("La variable no está definida.");
    } else {
        console.log("La variable está definida.");
    }
}
```

### 3. **Comprobar si algo es una función:**
```javascript
function esFuncion(valor) {
    return typeof valor === "function";
}

console.log(esFuncion(() => {})); // true
console.log(esFuncion(42));       // false
```

### 4. **Verificar tipos personalizados con objetos:**
```javascript
function esObjeto(valor) {
    return typeof valor === "object" && valor !== null && !Array.isArray(valor);
}
```

---

## **Buenas prácticas:**

1. **Distinguir entre `null` y objetos:**
   ```javascript
   if (value === null) {
       console.log("Es null.");
   } else if (typeof value === "object") {
       console.log("Es un objeto.");
   }
   ```

2. **Evitar depender de `typeof` para arrays:**
   - Usa `Array.isArray` en lugar de `typeof`.

3. **Verifica funciones antes de ejecutarlas:**
   ```javascript
   if (typeof callback === "function") {
       callback();
   }
   ```

4. **Combina `typeof` con otras verificaciones para casos complejos:**
   - Por ejemplo, para identificar tipos como `BigInt` o `Symbol`.

---

## **Resumen:**

- `typeof` es un operador simple pero esencial para determinar el tipo de un valor en JavaScript.
- Maneja correctamente la mayoría de los tipos, pero tiene peculiaridades con valores como `null` y arrays.
- Complementa otras técnicas de verificación, como `Array.isArray`, `instanceof` y comparaciones directas (`===`).

