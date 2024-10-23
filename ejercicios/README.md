# ¿Qué es una expresión en JavaScript?
Una expresión es cualquier fragmento de código que puede ser evaluado para producir un valor. 

Este valor puede ser un número, una cadena de texto, un booleano (true o false), o incluso algo más complejo como un objeto. 

En otras palabras, una expresión es algo que JavaScript puede evaluar para obtener un resultado.

## Tipos de expresiones
Hay diferentes tipos de expresiones en JavaScript, algunas de las más comunes son: aritmeticas, de concatenacion, de comparacion y logicas.

### **Tabla de Operadores Aritméticos**

| Operador | Descripción                      | Ejemplo        | Resultado       |
|----------|---------------------------------|----------------|-----------------|
| `+`      | Suma de dos números o concatenación de cadenas. | `5 + 3`         | `8`              |
| `-`      | Resta de dos números.            | `10 - 4`        | `6`              |
| `*`      | Multiplicación de dos números.   | `7 * 2`         | `14`             |
| `/`      | División de dos números.         | `20 / 5`        | `4`              |
| `%`      | Módulo (resto de la división).   | `10 % 3`        | `1`              |


### **Tabla concatenación: Suma vs. Concatenación**

| Operación                          | Descripción                                                                  | Ejemplo                    | Resultado         |
|-----------------------------------|------------------------------------------------------------------------------|----------------------------|-------------------|
| **Suma (numérica)**               | Se realiza cuando ambos operandos son números.                               | `5 + 10`                   | `15`              |
| **Concatenación (textual)**       | Se realiza cuando al menos un operando es una cadena de texto.               | `"Hola" + " Mundo"`        | `"Hola Mundo"`    |
| **Número + Cadena**               | El número se convierte en cadena y se concatenan.                            | `5 + " días"`              | `"5 días"`        |
| **Cadena + Número**               | La cadena permanece como cadena y el número se convierte a cadena para concatenar. | `"El resultado es " + 10`  | `"El resultado es 10"` |


### **Tabla de Operadores de Comparación**

| Operador | Descripción                                               | Ejemplo           | Resultado       |
|----------|-----------------------------------------------------------|-------------------|-----------------|
| `==`     | Igualdad (compara solo el valor, no el tipo).             | `5 == "5"`        | `true`           |
| `===`    | Estrictamente igual (compara el valor y el tipo).         | `5 === "5"`       | `false`          |
| `!=`     | Diferente (compara solo el valor, no el tipo).            | `5 != "5"`        | `false`          |
| `!==`    | Estrictamente diferente (compara el valor y el tipo).     | `5 !== "5"`       | `true`           |
| `>`      | Mayor que.                                                | `10 > 5`          | `true`           |
| `<`      | Menor que.                                                | `5 < 10`          | `true`           |
| `>=`     | Mayor o igual que.                                        | `10 >= 10`        | `true`           |
| `<=`     | Menor o igual que.                                        | `5 <= 10`         | `true`           |

### **Tabla de Operadores Lógicos**

| Operador | Descripción                       | Ejemplo                       | Resultado     |
|----------|----------------------------------|-------------------------------|---------------|
| `&&`     | AND lógico (devuelve `true` si ambas expresiones son verdaderas). | `(5 > 3) && (8 > 6)`           | `true`         |
| `||`     | OR lógico (devuelve `true` si al menos una de las expresiones es verdadera). | `(5 > 10) || (8 > 6)`          | `true`         |
| `!`      | NOT lógico (invierte el valor lógico). | `!(5 > 3)`                    | `false`        |


## ¿Para qué se usan las expresiones?
Las expresiones son la base de la lógica en la programación. Permiten que el código tome decisiones y realice cálculos. Son esenciales para:

- Tomar decisiones con if y else, basadas en condiciones.
- Realizar cálculos matemáticos y operaciones con datos.
- Combinar y evaluar cadenas de texto.
- Comparar valores y actuar en consecuencia.

