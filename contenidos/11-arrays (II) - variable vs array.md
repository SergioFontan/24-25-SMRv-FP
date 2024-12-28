
# Identificación: ¿Cuándo usar una variable y cuándo un array?

## **Variables: Almacenan un solo valor**
- Una variable es útil cuando necesitas almacenar un **único dato** que puedes identificar claramente.
- Es ideal para valores que no tienen relación con otros valores similares o no se agrupan lógicamente.

### **Ejemplos de cuándo usar una variable**
1. Guardar la edad de una persona:
   ```javascript
   let edad = 25;
   ```
2. Guardar el nombre de un usuario:
   ```javascript
   let nombre = "Juan";
   ```
3. Guardar la temperatura actual:
   ```javascript
   let temperatura = 22;
   ```

---

## **Arrays: Almacenan múltiples valores**
- Un array es útil cuando necesitas trabajar con un conjunto de valores relacionados o múltiples datos del mismo tipo.
- Es ideal cuando los datos están organizados como una colección, como una lista de elementos.

### **Ejemplos de cuándo usar un array**
1. Guardar los nombres de varios usuarios:
   ```javascript
   let nombres = ["Juan", "Ana", "Pedro"];
   ```
2. Guardar las temperaturas de una semana:
   ```javascript
   let temperaturas = [20, 22, 19, 23, 21, 24, 20];
   ```
3. Guardar los precios de productos en una tienda:
   ```javascript
   let precios = [5.99, 9.99, 14.99];
   ```

---

## **¿Cuándo usar una variable y cuándo un array?**
La elección depende del contexto:
1. **Usa una variable** si solo necesitas un valor único, por ejemplo, la edad de una persona o el resultado de una operación.
2. **Usa un array** si necesitas almacenar varios valores relacionados, como los nombres de todos los estudiantes en una clase.

### **Preguntas clave para decidir:**
1. ¿Cuántos valores necesito almacenar?
   - **Uno**: Variable.
   - **Varios**: Array.
2. ¿Los valores están relacionados entre sí o forman parte de una colección?
   - **No relacionados**: Variable.
   - **Relacionados o colección**: Array.

---

## **Ejemplo Comparativo**
**Caso: Guardar las calificaciones de los estudiantes en un examen.**
- Si es solo la calificación de un estudiante:
  ```javascript
  let calificacion = 95;
  ```
- Si son las calificaciones de varios estudiantes:
  ```javascript
  let calificaciones = [95, 88, 72, 85];
  ```

**Caso: Guardar el nombre de un producto.**
- Si es solo un producto:
  ```javascript
  let producto = "Laptop";
  ```
- Si son varios productos:
  ```javascript
  let productos = ["Laptop", "Mouse", "Teclado"];
  ```

---