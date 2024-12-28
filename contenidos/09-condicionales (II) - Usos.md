
# Condicionales en JavaScript (II): Identificación de Casos

## Introducción: Decisiones Condicionales
Existen diferentes estructuras de condicionales dependiendo de:

1. Si la condición evalúa **valores específicos**.
2. Si la condición evalúa **rangos de valores**.
3. Si hay **múltiples condiciones encadenadas**.

## Explicación de las Estructuras
1. **`if`:** Para evaluar una sola condición o un caso específico.
2. **`if-else`:** Cuando hay dos resultados posibles.
3. **`if-else-if`:** Para evaluar múltiples condiciones, especialmente rangos o situaciones jerárquicas.
4. **`switch`:** Ideal para comparar un valor contra múltiples valores fijos.

---

## Casos Prácticos con Ejemplos

### **1. Usar `if`**
- **Situación:** Solo quieres evaluar una condición simple.
- **Ejemplo práctico:** 
  - **Mundo real:** "Si hay luz verde, cruza el semáforo."
  - **Código:**
    ```javascript
    let semaforo = "verde";
    if (semaforo === "verde") {
        console.log("Cruza el semáforo");
    }
    ```

### **2. Usar `if-else`**
- **Situación:** Hay dos opciones mutuamente excluyentes.
- **Ejemplo práctico:** 
  - **Mundo real:** "Si tienes más de 18 años, puedes entrar al cine; si no, no puedes entrar."
  - **Código:**
    ```javascript
    let edad = 20;
    if (edad >= 18) {
        console.log("Puedes entrar al cine");
    } else {
        console.log("No puedes entrar al cine");
    }
    ```

### **3. Usar `if-else-if`**
- **Situación:** Hay múltiples condiciones a evaluar en orden (usualmente rangos).
- **Ejemplo práctico:** 
  - **Mundo real:** "Si tu nota es menor a 50, estás reprobado; si es entre 50 y 75, necesitas mejorar; si es mayor a 75, aprobaste."
  - **Código:**
    ```javascript
    let nota = 80;
    if (nota < 50) {
        console.log("Reprobado");
    } else if (nota >= 50 && nota <= 75) {
        console.log("Necesitas mejorar");
    } else if (nota > 75) {
        console.log("Aprobaste");
    }
    ```

### **4. Usar `switch`**
- **Situación:** Estás comparando un valor contra varios valores específicos.
- **Ejemplo práctico:** 
  - **Mundo real:** "Dependiendo del día de la semana, muestra un mensaje diferente."
  - **Código:**
    ```javascript
    let dia = "lunes";
    switch (dia) {
        case "lunes":
            console.log("Inicio de la semana");
            break;
        case "miércoles":
            console.log("Mitad de la semana");
            break;
        case "viernes":
            console.log("Fin de la semana");
            break;
        default:
            console.log("Día normal");
    }
    ```

---

## Cómo Elegir la Estructura Correcta

### **1. Evalúas valores fijos o rangos:**
   - Si evalúas valores **fijos**, usa `switch`.
   - Si evalúas **rangos**, usa `if-else-if`.

### **2. ¿Cuántas condiciones hay?**
   - Una sola condición → Usa `if`.
   - Dos condiciones mutuamente excluyentes → Usa `if-else`.
   - Más de dos condiciones → Usa `if-else-if` o `switch`.

### **3. ¿Son los valores exclusivos o comparten lógica?**
   - **Exclusivos:** Usa `switch`.
   - **Comparten lógica (ej. rangos):** Usa `if-else-if`.

---

## Ejercicio de Identificación
**Instrucción:** Determina cuál estructura condicional usarías en cada situación y justifica por qué. No hay que hacer código.

1. Tienes que verificar la calificación de un estudiante y asignarle una letra (A, B, C, D, F) según su puntaje:
   - Respuesta esperada: `if-else-if`, porque estás evaluando rangos.

2. Tienes que determinar si un número es positivo, negativo o cero:
   - Respuesta esperada: `if-else-if`, porque evalúas varias opciones jerárquicas.

3. Tienes que mostrar un mensaje diferente según el rol del usuario (admin, editor, visitante):
   - Respuesta esperada: `switch`, porque comparas valores fijos.

4. Tienes que verificar si un usuario ingresó su contraseña correctamente:
   - Respuesta esperada: `if`, porque solo evalúas una condición.

---


