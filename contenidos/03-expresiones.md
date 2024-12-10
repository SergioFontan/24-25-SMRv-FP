
# Expresiones en JavaScript

## **¿Qué son las expresiones?**

En JavaScript, una **expresión** es cualquier combinación de valores, variables y operadores que el navegador puede evaluar y devolver un resultado. 

Las expresiones son la base de muchas acciones en JavaScript, ya que nos permiten tomar decisiones y realizar cálculos.

Por ejemplo:
```javascript
2 + 2 // Esto es una expresión que devuelve 4
```

---

## **¿Qué tipos de expresiones existen?**

Las expresiones pueden devolver diferentes tipos de datos. 

Para los contenidos que vamos a ver, nos interesan principalmente las **expresiones lógicas** que devuelven `true` o `false`.

---

## **Expresiones lógicas**

### **¿Qué son las expresiones lógicas?**
Son expresiones que evalúan si algo es verdadero (`true`) o falso (`false`). 

Estas expresiones son fundamentales para los condicionales y dependen de los operadores de comparación y los operadores lógicos.

### **Operadores de comparación**
Se usan para comparar valores. Devuelven `true` si la comparación es correcta, o `false` si no lo es.

| Operador | Significado                  | Ejemplo (`a = 5`, `b = 10`) |
|----------|------------------------------|-----------------------------|
| `==`     | Igualdad de valores          | `a == 5` (true)            |
| `===`    | Igualdad de valores y tipos  | `a === "5"` (false)        |
| `!=`     | Diferente en valor           | `a != b` (true)            |
| `!==`    | Diferente en valor o tipo    | `a !== "5"` (true)         |
| `<`      | Menor que                    | `a < b` (true)             |
| `<=`     | Menor o igual que            | `a <= 5` (true)            |
| `>`      | Mayor que                    | `b > a` (true)             |
| `>=`     | Mayor o igual que            | `b >= 10` (true)           |

### **Ejemplo de expresiones con operadores de comparación**
```javascript
let edad = 18;

console.log(edad >= 18); // true (la edad es 18 o mayor)
console.log(edad < 18);  // false (la edad no es menor que 18)
```

---

## **Operadores lógicos**

### **¿Qué son los operadores lógicos?**
Los operadores lógicos se usan para combinar expresiones y crear condiciones más complejas.

| Operador | Nombre     | Ejemplo (`a = true`, `b = false`) | Resultado      |
|----------|------------|-----------------------------------|----------------|
| `&&`     | AND (y)    | `a && b`                         | false          |
| `||`     | OR (o)     | `a || b`                         | true           |
| `!`      | NOT (no)   | `!a`                             | false          |

### **Ejemplo de uso de operadores lógicos**
```javascript
let edad = 20;
let tieneLicencia = true;

console.log(edad >= 18 && tieneLicencia); // true (es mayor de edad y tiene licencia)
console.log(edad >= 18 || tieneLicencia); // true (cumple al menos una condición)
console.log(!tieneLicencia);             // false (porque sí tiene licencia)
```

---

## **Cómo evaluar expresiones en JavaScript**

Podemos evaluar expresiones directamente en la consola del navegador. Para hacerlo:
1. Abre la consola del navegador (usando `F12` o clic derecho > "Inspeccionar").
2. Escribe una expresión y presiona Enter.
3. El navegador mostrará el resultado.

**Ejemplo práctico en consola**:
```javascript
2 + 2
// Resultado: 4

5 > 3 && 10 < 20
// Resultado: true
```

---

## **Errores comunes al usar expresiones**

1. **Confundir `=` con `==` o `===`:**
   - `=` se usa para asignar valores, no para comparar.
   ```javascript
   let numero = 5;
   console.log(numero == 5); // true
   console.log(numero = 5);  // Asigna 5 a la variable, no compara
   ```

2. **No entender la diferencia entre `==` y `===`:**
   - `==` compara valores, mientras que `===` compara valores y tipos.
   ```javascript
   console.log(5 == "5");  // true (valores iguales)
   console.log(5 === "5"); // false (tipos diferentes)
   ```

3. **Olvidar las prioridades de los operadores:**
   - Los operadores lógicos tienen prioridad entre sí. Usa paréntesis para mayor claridad.
   ```javascript
   console.log(true || false && false);   // true (AND se evalúa primero)
   console.log((true || false) && false); // false (cambiamos la prioridad)
   ```

4. **Malinterpretar valores "falsos":**
   - En JavaScript, algunos valores se consideran `false` automáticamente:
     - `0`
     - `""` (cadena vacía)
     - `null`
     - `undefined`
     - `NaN`

   ```javascript
   console.log(Boolean(0));  // false
   console.log(Boolean("")); // false
   ```

---

## **Cuándo usar expresiones**

Las expresiones se utilizan principalmente para:
1. **Condicionales**:
   - Evaluar si una acción debe ejecutarse o no.
   ```javascript
   if (edad >= 18) {
       console.log("Eres mayor de edad.");
   }
   ```

2. **Validar datos**:
   - Comprobar si una entrada del usuario cumple con ciertos requisitos.
   ```javascript
   let contraseña = "12345";
   console.log(contraseña.length >= 8); // false (la contraseña es demasiado corta)
   ```

3. **Decisiones complejas**:
   - Combinar varias condiciones con operadores lógicos.
   ```javascript
   if (usuarioLogueado && tienePermiso) {
       console.log("Acceso concedido.");
   }
   ```

---
