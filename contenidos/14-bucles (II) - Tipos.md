## Variable de control
Es una variable que: 
✅ Se usa dentro de un bucle (como for o while).
✅ Su valor cambia en cada repetición.
✅ Controla cuántas veces se ejecuta un conjunto de instrucciones.

## Bucle `for`
El bucle `for` se usa cuando **sabemos de antemano cuántas veces queremos repetir una acción**.

### **Sintaxis:**
```javascript
for (inicialización; condición; actualización) {
    // Código que se ejecuta en cada repetición
}
```
### **Explicación de la sintaxis:**
- **Inicialización:** Se ejecuta una sola vez al comienzo del bucle. Generalmente, se usa para declarar y asignar un valor inicial a una variable de control.
- **Condición:** Se evalúa antes de cada iteración. Si es `true`, se ejecuta el bloque de código dentro del bucle. Si es `false`, el bucle termina.
- **Actualización:** Se ejecuta al final de cada iteración para modificar la variable de control y evitar un bucle infinito.

### **Ejemplo de uso:**
```javascript
for (let i = 0; i < 5; i++) {
    console.log("Iteración número " + i);
}
```
Este código imprimirá en la consola los números del 0 al 4.

---

## Bucle `while`
El bucle `while` se usa cuando **no sabemos exactamente cuántas veces se repetirá la acción**, pero tenemos una **condición que debe cumplirse** para seguir iterando.

### **Sintaxis:**
```javascript
while (condición) {
    // Código que se ejecuta mientras la condición sea verdadera
}
```
### **Explicación de la sintaxis:**
- **Condición:** Se evalúa antes de cada iteración. Si es `true`, el código dentro del bucle se ejecuta. Si es `false`, el bucle termina.
- **No hay una inicialización ni actualización dentro de la estructura**, por lo que deben manejarse dentro del bloque si es necesario.

### **Ejemplo de uso:**
```javascript
let contador = 0;
while (contador < 5) {
    console.log("Iteración número " + contador);
    contador++;
}
```
Este código imprimirá los números del 0 al 4, como en el ejemplo de `for`.

---

## Cuándo usar `for` o `while`
- Usa `for` cuando **conoces el número exacto de iteraciones** desde el inicio.
- Usa `while` cuando **no sabes cuántas veces se repetirá** la acción, pero tienes una condición que debe cumplirse para detener el bucle.
