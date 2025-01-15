# Proyecto 01: Gestión de un Equipo de Fútbol

Un equipo de fútbol necesita organizar sus jugadores antes de un partido. 

El equipo está dividido en cuatro tipos de jugadores: **porteros**, **defensas**, **mediocampistas** y **delanteros**. 

Cada tipo tiene un máximo de jugadores disponibles por posición. 

Cada posición puede tener un nombre de jugador o estar vacía (representado por `null`).

El programa debe permitir al usuario realizar las siguientes acciones:

1. **Crear el equipo inicial**: Definir cuatro arrays, uno para cada tipo de jugador con un máximo de jugadores disponibles. El contenido de cada posición debe ser un nombre o `null`:
    - `porteros`: 2 jugadores
    - `defensas`: 3 jugadores
    - `mediocampistas`: 4 jugadores
    - `delanteros`: 2 jugadores
   
2. **Insertar un jugador**:
   - Elegir el tipo de jugador (`porteros`, `defensas`, `mediocampistas` o `delanteros`).
   - Elegir la posición en la que desea insertar al jugador.
   - Validar que:
     - La posición existe.
     - El nombre del jugador ingresado tiene una longitud mayor a 0.
     - La posición seleccionada esté vacía (`null`).
   - Si las validaciones se cumplen, insertar el nombre del jugador en la posición seleccionada. 
   - Si las validaciones no se cumplen, enviar un mensaje de error al usuario.

3. **Eliminar un jugador**:
   - Elegir el tipo de jugador (`porteros`, `defensas`, `mediocampistas` o `delanteros`).
   - Elegir la posición en la que desea eliminar al jugador.
   - Validar que:
     - La posición existe.
     - La posición no esté vacía (`null`).
   - Si las validaciones se cumplen, eliminar el jugador reemplazándolo con `null`.
   - Si las validaciones no se cumplen, mostrar mensaje de error:


4. **Mostrar el estado del equipo** antes y después de cada operación.

---
