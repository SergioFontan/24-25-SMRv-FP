# Proyecto 02. Gestión de inventario de una biblioteca

Una biblioteca necesita gestionar el inventario de libros organizados en cuatro categorías: **Ficción**, **No Ficción**, **Revistas** y **Referencias**. 

Cada categoría tiene un máximo de espacios para libros:
    - **Ficción**: 3 libros
    - **No Ficción**: 1 libro
    - **Revistas**: 2 libros
    - **Referencias**: 2 libros 

Cada espacio puede contener el título de un libro o estar vacío (representado por `null`).

El programa debe permitir al usuario realizar las siguientes acciones:

1. **Crear el inventario inicial**: Definir cuatro arrays, uno para cada categoría de libros (`ficcion`, `noFiccion`, `revistas`, `referencias`), con sus posiciones correspondientes y con contenido con títulos o con `null`.

2. **Insertar un libro**:
   - Elegir la categoría de libros (`Ficción`, `No Ficción`, `Revistas` o `Referencias`).
   - Elegir la posición en la que desea insertar el título.
   - Validar que:
     - La posición existe.
     - El título ingresado tiene una longitud mayor a 0.
     - La posición seleccionada esté vacía (`null`).
   - Si las validaciones se cumplen, insertar el título en la posición seleccionada.
   - Si las validaciones no se cumplen, mostrar mensaje de error.

3. **Eliminar un libro**:
   - Elegir la categoría de libros (`Ficción`, `No Ficción`, `Revistas` o `Referencias`).
   - Elegir la posición en la que desea eliminar el título.
   - Validar que:
     - La posición existe.
     - La posición no esté vacía (`null`).
   - Si las validaciones se cumplen, eliminar el libro reemplazándolo con `null`.
   - Si las validaciones no se cumplen, mostrar mensaje de error.

4. Mostrar el estado del inventario antes y después de cada operación.