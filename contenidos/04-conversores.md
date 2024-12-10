
# Conversores de Tipo en JavaScript

## **¿Qué son los conversores de tipo?**

En programación, los datos pueden ser de diferentes tipos, como texto (cadenas), números, booleanos, etc. 

A veces, necesitamos convertir un tipo de dato en otro. Los **conversores de tipo en JavaScript** son herramientas que nos permiten realizar estas conversiones de manera sencilla.

Por ejemplo, podemos convertir una cadena como `"123"` en un número, o verificar si algo es un número válido.

---

## **Funciones principales para conversión de tipo**

### 1. **`parseInt`**
Convierte un texto (cadena) en un número entero.

**Sintaxis**:
```javascript
parseInt(cadena, base);
```

- `cadena`: El texto que queremos convertir.
- `base` (opcional): El sistema numérico (por ejemplo, 10 para decimal).

**Usos comunes**:
- Extraer números enteros de cadenas de texto.
- Interpretar números en diferentes bases (binario, octal, hexadecimal).

**Ejemplo correcto**:
```javascript
let numero = parseInt("123");
console.log(numero); // 123 (como número)
```

**Ejemplo con base**:
```javascript
let binario = parseInt("1010", 2); // Interpreta como número binario
console.log(binario); // 10
```

**Ejemplo incorrecto**:
```javascript
let invalido = parseInt("abc");
console.log(invalido); // NaN (No es un número válido)
```

**Caso especial**:
```javascript
let resultado = parseInt("123abc");
console.log(resultado); // 123 (se detiene en el primer carácter no numérico)
```

---

### 2. **`parseFloat`**
Convierte un texto en un número decimal.

**Sintaxis**:
```javascript
parseFloat(cadena);
```

**Usos comunes**:
- Extraer números decimales de cadenas de texto.

**Ejemplo correcto**:
```javascript
let decimal = parseFloat("123.45");
console.log(decimal); // 123.45
```

**Ejemplo incorrecto**:
```javascript
let invalido = parseFloat("abc");
console.log(invalido); // NaN
```

**Caso especial**:
```javascript
let resultado = parseFloat("123.45abc");
console.log(resultado); // 123.45 (se detiene en el primer carácter no numérico)
```

---

### 3. **`Number`**
Convierte un texto en un número (entero o decimal). Es más estricto que `parseInt` y `parseFloat`, ya que no permite espacios ni caracteres no numéricos.

**Sintaxis**:
```javascript
Number(cadena);
```

**Usos comunes**:
- Convertir cadenas completas que representan números (sin caracteres adicionales).

**Ejemplo correcto**:
```javascript
let numero = Number("123.45");
console.log(numero); // 123.45
```

**Ejemplo incorrecto**:
```javascript
let invalido = Number("123abc");
console.log(invalido); // NaN
```

**Caso especial**:
```javascript
let espacios = Number("   123   ");
console.log(espacios); // 123 (ignora los espacios)
```

---

### 4. **`isNaN`**
Verifica si un valor **no es un número**. Devuelve `true` si el valor no puede interpretarse como un número.

**Sintaxis**:
```javascript
isNaN(valor);
```

**Usos comunes**:
- Validar entradas del usuario.
- Verificar resultados de conversiones.

**Ejemplo correcto**:
```javascript
console.log(isNaN("abc")); // true (no es un número)
console.log(isNaN(123));   // false (es un número)
```

**Ejemplo incorrecto**:
```javascript
console.log(isNaN("123")); // false (es un número válido como cadena)
```

**Caso especial**:
```javascript
console.log(isNaN(NaN)); // true
console.log(isNaN(undefined)); // true
```

---

### 5. **`String`**
Convierte cualquier dato en una cadena de texto.

**Sintaxis**:
```javascript
String(valor);
```

**Usos comunes**:
- Convertir datos a texto para mostrarlos al usuario.

**Ejemplo correcto**:
```javascript
let texto = String(123);
console.log(texto); // "123"
console.log(typeof texto); // "string"
```

**Ejemplo incorrecto**:
No aplica, ya que `String` siempre devuelve una cadena.

**Caso especial**:
```javascript
console.log(String(null)); // "null"
console.log(String(undefined)); // "undefined"
```

---

### 6. **`toString`**
Convierte un dato en una cadena, pero debe ser llamado sobre el dato. Es similar a `String`.

**Sintaxis**:
```javascript
valor.toString();
```

**Usos comunes**:
- Convertir números u objetos a texto para ser procesados.

**Ejemplo correcto**:
```javascript
let numero = 123;
let texto = numero.toString();
console.log(texto); // "123"
```

**Ejemplo incorrecto**:
```javascript
let nulo = null;
console.log(nulo.toString()); // Error: No se puede llamar a toString de null
```

---

### 7. **`Boolean`**
Convierte cualquier dato en un valor booleano (`true` o `false`).

**Sintaxis**:
```javascript
Boolean(valor);
```

**Usos comunes**:
- Verificar si un valor "existe" (es decir, no es nulo, vacío, o falso).

**Ejemplo correcto**:
```javascript
console.log(Boolean(1));    // true
console.log(Boolean("abc"));// true
```

**Ejemplo incorrecto**:
No aplica directamente, pero es importante entender los valores "falsos".

**Caso especial**:
```javascript
console.log(Boolean(0));    // false
console.log(Boolean(""));   // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
```

---

### 8. **`typeof`**
Aunque no convierte, permite verificar el tipo de un valor. Es útil para entender qué tipo de dato estamos manejando.

**Sintaxis**:
```javascript
typeof valor;
```

**Usos comunes**:
- Verificar el tipo de una variable antes de usarla.

**Ejemplo correcto**:
```javascript
console.log(typeof 123);        // "number"
console.log(typeof "Hola");     // "string"
console.log(typeof true);       // "boolean"
console.log(typeof undefined);  // "undefined"
```

**Caso especial**:
```javascript
console.log(typeof null); // "object" (comportamiento histórico)
```

---

## **Errores comunes al usar conversores**

1. **Olvidar que `parseInt` ignora decimales**:
   ```javascript
   let numero = parseInt("123.45");
   console.log(numero); // 123 (ignora el ".45")
   ```

2. **Usar `Number` con texto no numérico**:
   ```javascript
   let numero = Number("123abc");
   console.log(numero); // NaN
   ```

3. **No validar el resultado de `parseInt` o `parseFloat`**:
   ```javascript
   let numero = parseInt("abc");
   if (isNaN(numero)) {
       console.log("El valor no es un número válido.");
   }
   ```

4. **Confundir `String` con `toString`**:
   ```javascript
   let numero = 123;
   console.log(numero.toString()); // "123"
   console.log(String(numero));    // "123"
   ```

5. **No considerar `Boolean` en valores "falsos"**:
   ```javascript
   console.log(Boolean(0));  // false
   console.log(Boolean("")); // false
   ```

---
