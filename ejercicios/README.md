# ¿Qué es una expresión en JavaScript?
Una expresión es cualquier fragmento de código que puede ser evaluado para producir un valor. Este valor puede ser un número, una cadena de texto, un booleano (true o false), o incluso algo más complejo como un objeto. En otras palabras, una expresión es algo que JavaScript puede evaluar para obtener un resultado.

Ejemplos básicos:
- 5 + 3 es una expresión que produce el valor 8.
- "Hola" + " Mundo" es una expresión que produce el valor "Hola Mundo".
- 10 > 5 es una expresión que produce el valor true.

## Tipos de expresiones
Hay diferentes tipos de expresiones en JavaScript, algunas de las más comunes son:

Expresiones aritméticas: Realizan operaciones matemáticas y devuelven un valor numérico.

Ejemplos:
- 3 + 2 (resultado: 5)
- 10 / 2 (resultado: 5)
- 7 * 3 (resultado: 21)

### Expresiones de concatenación: Combinan cadenas de texto para formar una nueva cadena.

Ejemplo:
- "Hola" + " Mundo" (resultado: "Hola Mundo")

### Expresiones de comparación: Evalúan si dos valores son iguales, diferentes, mayores, menores, etc., y devuelven un valor booleano (true o false).

Ejemplos:
- 5 > 3 (resultado: true)
- 8 == 10 (resultado: false)
- "casa" !== "auto" (resultado: true)

### Expresiones lógicas: Utilizan operadores lógicos (&& para "y", || para "o", ! para "no") para combinar comparaciones y evaluar condiciones más complejas.

Ejemplos:
- (5 > 3) && (10 < 20) (resultado: true)
- (10 === 5) || (8 > 3) (resultado: true)
- !(5 < 2) (resultado: true)

## ¿Para qué se usan las expresiones?
Las expresiones son la base de la lógica en la programación. Permiten que el código tome decisiones y realice cálculos. Son esenciales para:

- Tomar decisiones con if y else, basadas en condiciones.
- Realizar cálculos matemáticos y operaciones con datos.
- Combinar y evaluar cadenas de texto.
- Comparar valores y actuar en consecuencia.

## Operadores comunes en expresiones
Para construir expresiones en JavaScript, se utilizan operadores. Algunos operadores comunes son:

- Operadores aritméticos: +, -, *, /, %
    Ejemplo: 10 % 2 devuelve 0 (ya que 10 es divisible entre 2)

- Operadores de comparación: ==, !=, >, <, >=, <=
    Ejemplo: 8 >= 5 devuelve true

- Operadores lógicos: &&, ||, !
    Ejemplo: (5 < 10) && (10 > 3) devuelve true