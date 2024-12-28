
# Condicionales en JavaScript (I)

## **¿Qué son los condicionales?**

Los **condicionales** en programación nos permiten tomar decisiones basadas en ciertas condiciones. 

Son como señales de tráfico: dependiendo de lo que ocurra, decidimos qué camino seguir. 

En JavaScript, los condicionales se usan para ejecutar diferentes partes de código según si una condición es **verdadera** (true) o **falsa** (false).

---

## **Tipos de condicionales en JavaScript**

### 1. **`if`**
El condicional más básico. Evalúa una condición y, si es verdadera, ejecuta un bloque de código.

**Sintaxis**:
```javascript
if (condición) {
    // Código que se ejecuta si la condición es verdadera
}
```

**Ejemplo**:
```javascript
let edad = 18;

if (edad >= 18) {
    console.log("Eres mayor de edad."); // Este mensaje aparece si la edad es 18 o mayor
}
```

---

### 2. **`if` y `else`**
Combina una acción si la condición es **verdadera** y otra si es **falsa**.

**Sintaxis**:
```javascript
if (condición) {
    // Código que se ejecuta si la condición es verdadera
} else {
    // Código que se ejecuta si la condición es falsa
}
```

**Ejemplo**:
```javascript
let temperatura = 25;

if (temperatura > 30) {
    console.log("Hace calor."); // Este mensaje aparece si la temperatura es mayor a 30
} else {
    console.log("Hace un clima agradable."); // Este mensaje aparece si la temperatura es 30 o menor
}
```

---

### 3. **`if`, `else if`, y `else`**
Usamos `else if` cuando hay **más de dos opciones** posibles.

**Sintaxis**:
```javascript
if (condición1) {
    // Código si condición1 es verdadera
} else if (condición2) {
    // Código si condición2 es verdadera
} else {
    // Código si ninguna condición anterior es verdadera
}
```

**Ejemplo**:
```javascript
let nota = 85;

if (nota >= 90) {
    console.log("Excelente");
} else if (nota >= 70) {
    console.log("Aprobado");
} else {
    console.log("Reprobado");
}
```

---

### 4. **`switch`**
Es útil cuando hay **muchas opciones** posibles y todas dependen del valor de una misma variable o expresión.

**Sintaxis**:
```javascript
switch (expresión) {
    case valor1:
        // Código si la expresión es igual a valor1
        break;
    case valor2:
        // Código si la expresión es igual a valor2
        break;
    default:
        // Código si la expresión no coincide con ningún caso
}
```

**Ejemplo**:
```javascript
let dia = "lunes";

switch (dia) {
    case "lunes":
        console.log("Es lunes, inicio de la semana.");
        break;
    case "viernes":
        console.log("Es viernes, casi fin de semana.");
        break;
    case "sábado":
    case "domingo":
        console.log("Es fin de semana.");
        break;
    default:
        console.log("Es un día normal.");
}
```

---

## **Operadores comunes en condicionales**

| Operador   | Significado                     | Ejemplo (`a = 5`, `b = 10`) |
|------------|---------------------------------|-----------------------------|
| `==`       | Igualdad de valores            | `a == 5` (true)            |
| `===`      | Igualdad de valores y tipos    | `a === "5"` (false)         |
| `!=`       | Diferente                      | `a != b` (true)            |
| `!==`      | Diferente en valor o tipo      | `a !== "5"` (true)         |
| `<`        | Menor que                      | `a < b` (true)             |
| `<=`       | Menor o igual que              | `a <= 5` (true)            |
| `>`        | Mayor que                      | `b > a` (true)             |
| `>=`       | Mayor o igual que              | `b >= 10` (true)           |

---

## **Cuándo usar cada tipo de condicional**

1. Usa `if` cuando solo necesitas una condición.
   - Ejemplo: ¿Es mayor de edad?
   
2. Usa `if-else` cuando hay dos caminos posibles.
   - Ejemplo: Si aprueba, felicítalo; si no, ofrécele apoyo.

3. Usa `if-else if-else` cuando tienes múltiples condiciones encadenadas.
   - Ejemplo: Clasificar notas en Excelente, Aprobado o Suspenso.

4. Usa `switch` cuando tienes varias opciones fijas basadas en un solo valor.
   - Ejemplo: ¿Qué día de la semana es hoy?

---

## **Errores comunes al usar condicionales**

1. **Olvidar las llaves `{}`:**
   - Aunque no siempre son obligatorias, es una buena práctica incluirlas para evitar errores al agregar más líneas al bloque.
   ```javascript
   if (x > 5)
       console.log("Mayor que 5");
       console.log("Esto siempre se ejecutará."); // Error
   ```

2. **No usar `===` en lugar de `==`:**
   - `==` compara solo el valor, mientras que `===` compara el valor y el tipo.
   ```javascript
   let numero = "5";
   if (numero == 5) console.log("Verdadero"); // Funciona
   if (numero === 5) console.log("Verdadero"); // No funciona
   ```

3. **Olvidar el `break` en `switch`:**
   - Si se omite, se ejecutarán todos los casos siguientes.
   ```javascript
   let dia = "lunes";
   switch (dia) {
       case "lunes":
           console.log("Es lunes.");
       case "martes":
           console.log("Es martes."); // También se ejecuta
   }
   ```

4. **Condiciones mal formuladas:**
   - Escribir `=` en lugar de `==` para comparar.
   ```javascript
   let x = 5;
   if (x = 10) console.log("Error"); // Asigna 10 a x en lugar de compararlo
   ```

5. **Demasiados condicionales anidados:**
   - Condicionales dentro de condicionales pueden hacer el código difícil de leer.

---


