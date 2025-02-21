/**
 * Arrays con jugadores
 */
let porteros = [null, 'Jose Angel Polo'];
let defensas = ['Sergio Ibañez', null, null];
let mediocampistas = [null, null, null, "Angela Cano"];
let delanteros = ["Sergio Fontan", null];

/**
 * Zona de creacion de variables auxiliares.
 * Se utilizarán después para funciones específicas
 */
let operacion;
let tipo;
let posicion;
let nombre;

// Mostramos el equipo COMPLETO
alert(`PORTEROS 
    0 - ${porteros[0]}
    1 - ${porteros[1]}
    
    DEFENSAS
    0 - ${defensas[0]}
    1 - ${defensas[1]}
    2 - ${defensas[2]}

    MEDIOCAMPISTAS
    0 - ${mediocampistas[0]}
    1 - ${mediocampistas[1]}
    2 - ${mediocampistas[2]}
    3 - ${mediocampistas[3]}

    DELANTEROS
    0 - ${delanteros[0]}
    1 - ${delanteros[1]}`);

// Pido al usuario que elija una operación
operacion = prompt(`¿Que operacion deseas realizar?
    0 - Insertar jugador en alguna posicion
    1 - Eliminar algún jugador existente`);

switch (operacion) {
    case "0":
        // Aqui se realiza la operacion de insercion de jugador
        tipo = prompt(`¿Que tipo de jugador deseas insertar?
            0 - PORTERO
            1 - DEFENSA
            2 - MEDIOCAMPISTA
            3 - DELANTERO`);

        // Evaluo la eleccion del usuario
        switch (tipo) {
            case "0":
                // Eleccion de PORTERO
                posicion = prompt(`¿En qué posición deseas insertar?
                        0 - ${porteros[0]}
                        1 - ${porteros[1]}`);

                // Evaluo la posición elegida por el usuario.
                // Comprobaremos que debe ser distinto a null
                switch (posicion) {
                    case "0":
                        // Si está vacio (tiene null) entonces puedo insertar (pido nombre al usuario)
                        if (porteros[posicion] == null) {
                            nombre = prompt("¿Que nombre de jugador?");
                            // Compruebo que tiene caracteres (que no está vacío el nombre del usuario)
                            if (nombre.length > 0) {
                                porteros[posicion] = nombre;
                            } else {
                                alert("ERROR: no has introducido nada");
                            }
                        }
                        // Si no esta vacío (contenido distinto de null) no puedo insertar
                        // lanzo error
                        else {
                            alert("ERROR: no es posible insertar en una posicion con contenido");
                        }
                        // Muestro de nuevo los porteros para ver si se ha insertado
                        alert(`PORTEROS tras insertar
                                0 - ${porteros[0]}
                                1 - ${porteros[1]}`);
                        break;

                    case "1":
                        // Si está vacio (tiene null) entonces puedo insertar (pido nombre al usuario)
                        if (porteros[posicion] == null) {
                            nombre = prompt("¿Que nombre de jugador?");
                            // Compruebo que tiene caracteres (que no está vacío el nombre del usuario)
                            if (nombre.length > 0) {
                                porteros[posicion] = nombre;
                            } else {
                                alert("ERROR: no has introducido nada");
                            }
                        }
                        // Si no esta vacío (contenido distinto de null) no puedo insertar
                        // lanzo error
                        else {
                            alert("ERROR: no es posible insertar en una posicion con contenido");
                        }
                        // Muestro de nuevo los porteros para ver si se ha insertado
                        alert(`PORTEROS tras insertar
                                0 - ${porteros[0]}
                                1 - ${porteros[1]}`);
                        break;

                    default:
                        alert("ERROR: posición seleccionada de PORTEROS no disponible");
                        break;
                }
                break;

            case "1":
                // Eleccion de DEFENSA
                posicion = prompt(`¿En qué posición deseas insertar?
                        0 - ${defensas[0]}
                        1 - ${defensas[1]}
                        2 - ${defensas[2]}`);

                // Evaluo la posición elegida por el usuario.
                // Comprobaremos que debe ser distinto a null
                switch (posicion) {
                    case "0":
                        // Si está vacio (tiene null) entonces puedo insertar (pido nombre al usuario)
                        if (defensas[posicion] == null) {
                            nombre = prompt("¿Que nombre de jugador?");
                            // Compruebo que tiene caracteres (que no está vacío el nombre del usuario)
                            if (nombre.length > 0) {
                                defensas[posicion] = nombre;
                            } else {
                                alert("ERROR: no has introducido nada");
                            }
                        }
                        // Si no esta vacío (contenido distinto de null) no puedo insertar
                        // lanzo error
                        else {
                            alert("ERROR: no es posible insertar en una posicion con contenido");
                        }
                        // Muestro de nuevo los defensas para ver si se ha insertado
                        alert(`defensas tras insertar
                                0 - ${defensas[0]}
                                1 - ${defensas[1]}
                                2 - ${defensas[2]}`);
                        break;

                    case "1":
                        // Si está vacio (tiene null) entonces puedo insertar (pido nombre al usuario)
                        if (defensas[posicion] == null) {
                            nombre = prompt("¿Que nombre de jugador?");
                            // Compruebo que tiene caracteres (que no está vacío el nombre del usuario)
                            if (nombre.length > 0) {
                                defensas[posicion] = nombre;
                            } else {
                                alert("ERROR: no has introducido nada");
                            }
                        }
                        // Si no esta vacío (contenido distinto de null) no puedo insertar
                        // lanzo error
                        else {
                            alert("ERROR: no es posible insertar en una posicion con contenido");
                        }
                        // Muestro de nuevo los defensas para ver si se ha insertado
                        alert(`defensas tras insertar
                                0 - ${defensas[0]}
                                1 - ${defensas[1]}
                                2 - ${defensas[2]}`);
                        break;
                    case "2":
                        // Si está vacio (tiene null) entonces puedo insertar (pido nombre al usuario)
                        if (defensas[posicion] == null) {
                            nombre = prompt("¿Que nombre de jugador?");
                            // Compruebo que tiene caracteres (que no está vacío el nombre del usuario)
                            if (nombre.length > 0) {
                                defensas[posicion] = nombre;
                            } else {
                                alert("ERROR: no has introducido nada");
                            }
                        }
                        // Si no esta vacío (contenido distinto de null) no puedo insertar
                        // lanzo error
                        else {
                            alert("ERROR: no es posible insertar en una posicion con contenido");
                        }
                        // Muestro de nuevo los defensas para ver si se ha insertado
                        alert(`defensas tras insertar
                                0 - ${defensas[0]}
                                1 - ${defensas[1]}
                                2 - ${defensas[2]}`);
                        break;

                    default:
                        alert("ERROR: posición seleccionada de defensas no disponible");
                        break;
                }
                break;

            case "2":
                console.log("HOLAAAAAA")
                // Eleccion de MEDIOCAMPISTA
                posicion = prompt(`¿En qué posición deseas insertar?
                        0 - ${mediocampistas[0]}
                        1 - ${mediocampistas[1]}
                        2 - ${mediocampistas[2]}
                        3 - ${mediocampistas[3]}`);

                // Evaluo la posición elegida por el usuario.
                // Comprobaremos que debe ser distinto a null
                switch (posicion) {
                    case "0":
                        // Si está vacio (tiene null) entonces puedo insertar (pido nombre al usuario)
                        if (mediocampistas[posicion] == null) {
                            nombre = prompt("¿Que nombre de jugador?");
                            // Compruebo que tiene caracteres (que no está vacío el nombre del usuario)
                            if (nombre.length > 0) {
                                mediocampistas[posicion] = nombre;
                            } else {
                                alert("ERROR: no has introducido nada");
                            }
                        }
                        // Si no esta vacío (contenido distinto de null) no puedo insertar
                        // lanzo error
                        else {
                            alert("ERROR: no es posible insertar en una posicion con contenido");
                        }
                        // Muestro de nuevo los mediocampistas para ver si se ha insertado
                        alert(`mediocampistas tras insertar
                                0 - ${mediocampistas[0]}
                                1 - ${mediocampistas[1]}
                                2 - ${mediocampistas[2]}
                                3 - ${mediocampistas[3]}`);
                        break;

                    case "1":
                        // Si está vacio (tiene null) entonces puedo insertar (pido nombre al usuario)
                        if (mediocampistas[posicion] == null) {
                            nombre = prompt("¿Que nombre de jugador?");
                            // Compruebo que tiene caracteres (que no está vacío el nombre del usuario)
                            if (nombre.length > 0) {
                                mediocampistas[posicion] = nombre;
                            } else {
                                alert("ERROR: no has introducido nada");
                            }
                        }
                        // Si no esta vacío (contenido distinto de null) no puedo insertar
                        // lanzo error
                        else {
                            alert("ERROR: no es posible insertar en una posicion con contenido");
                        }
                        // Muestro de nuevo los mediocampistas para ver si se ha insertado
                        alert(`mediocampistas tras insertar
                                0 - ${mediocampistas[0]}
                                1 - ${mediocampistas[1]}
                                2 - ${mediocampistas[2]}
                                3 - ${mediocampistas[3]}`);
                        break;
                    case "2":
                        // Si está vacio (tiene null) entonces puedo insertar (pido nombre al usuario)
                        if (mediocampistas[posicion] == null) {
                            nombre = prompt("¿Que nombre de jugador?");
                            // Compruebo que tiene caracteres (que no está vacío el nombre del usuario)
                            if (nombre.length > 0) {
                                mediocampistas[posicion] = nombre;
                            } else {
                                alert("ERROR: no has introducido nada");
                            }
                        }
                        // Si no esta vacío (contenido distinto de null) no puedo insertar
                        // lanzo error
                        else {
                            alert("ERROR: no es posible insertar en una posicion con contenido");
                        }
                        // Muestro de nuevo los mediocampistas para ver si se ha insertado
                        alert(`mediocampistas tras insertar
                                0 - ${mediocampistas[0]}
                                1 - ${mediocampistas[1]}
                                2 - ${mediocampistas[2]}
                                3 - ${mediocampistas[3]}`);
                        break;

                    case "3":
                        // Si está vacio (tiene null) entonces puedo insertar (pido nombre al usuario)
                        if (mediocampistas[posicion] == null) {
                            nombre = prompt("¿Que nombre de jugador?");
                            // Compruebo que tiene caracteres (que no está vacío el nombre del usuario)
                            if (nombre.length > 0) {
                                mediocampistas[posicion] = nombre;
                            } else {
                                alert("ERROR: no has introducido nada");
                            }
                        }
                        // Si no esta vacío (contenido distinto de null) no puedo insertar
                        // lanzo error
                        else {
                            alert("ERROR: no es posible insertar en una posicion con contenido");
                        }
                        // Muestro de nuevo los mediocampistas para ver si se ha insertado
                        alert(`mediocampistas tras insertar
                                0 - ${mediocampistas[0]}
                                1 - ${mediocampistas[1]}
                                2 - ${mediocampistas[2]}
                                3 - ${mediocampistas[3]}`);
                        break;

                    default:
                        alert("ERROR: posición seleccionada de mediocampistas no disponible");
                        break;
                }
                break;

            case "3":
                // Eleccion de DELANTERO

                break;

            default:
                alert("ERROR: posición seleccionada no disponible");
                break;
        }
        break;

    case "1":
        // Aquí se realiza la operación de eliminación de jugador

        // Aqui se realiza la operacion de insercion de jugador
        tipo = prompt(`¿Que tipo de jugador deseas insertar?
            0 - PORTERO
            1 - DEFENSA
            2 - MEDIOCAMPISTA
            3 - DELANTERO`);

        // Evaluo la eleccion del usuario
        switch (tipo) {
            case "0":
                // Eleccion de PORTERO
                posicion = prompt(`¿En qué posición deseas insertar?
                        0 - ${porteros[0]}
                        1 - ${porteros[1]}`);

                // Evaluo la posición elegida por el usuario.
                // Comprobaremos que debe ser distinto a null
                switch (posicion) {
                    case "0":
                        // Si está vacio (tiene null) entonces puedo insertar (pido nombre al usuario)
                        if (porteros[posicion] == null) {
                            nombre = prompt("¿Que nombre de jugador?");
                            // Compruebo que tiene caracteres (que no está vacío el nombre del usuario)
                            if (nombre.length > 0) {
                                porteros[posicion] = nombre;
                            } else {
                                alert("ERROR: no has introducido nada");
                            }
                        }
                        // Si no esta vacío (contenido distinto de null) no puedo insertar
                        // lanzo error
                        else {
                            alert("ERROR: no es posible insertar en una posicion con contenido");
                        }
                        // Muestro de nuevo los porteros para ver si se ha insertado
                        alert(`PORTEROS tras insertar
                                0 - ${porteros[0]}
                                1 - ${porteros[1]}`);
                        break;

                    case "1":
                        // Si está vacio (tiene null) entonces puedo insertar (pido nombre al usuario)
                        if (porteros[posicion] == null) {
                            nombre = prompt("¿Que nombre de jugador?");
                            // Compruebo que tiene caracteres (que no está vacío el nombre del usuario)
                            if (nombre.length > 0) {
                                porteros[posicion] = nombre;
                            } else {
                                alert("ERROR: no has introducido nada");
                            }
                        }
                        // Si no esta vacío (contenido distinto de null) no puedo insertar
                        // lanzo error
                        else {
                            alert("ERROR: no es posible insertar en una posicion con contenido");
                        }
                        // Muestro de nuevo los porteros para ver si se ha insertado
                        alert(`PORTEROS tras insertar
                                0 - ${porteros[0]}
                                1 - ${porteros[1]}`);
                        break;

                    default:
                        alert("ERROR: posición seleccionada de PORTEROS no disponible");
                        break;
                }
                break;

            case "1":
                // Eleccion de DEFENSA
                posicion = prompt(`¿En qué posición deseas insertar?
                        0 - ${defensas[0]}
                        1 - ${defensas[1]}
                        2 - ${defensas[2]}`);

                // Evaluo la posición elegida por el usuario.
                // Comprobaremos que debe ser distinto a null
                switch (posicion) {
                    case "0":
                        // Si está vacio (tiene null) entonces puedo insertar (pido nombre al usuario)
                        if (defensas[posicion] == null) {
                            alert("ERROR: no es posible eliminar si está vacío");
                        }
                        // Si no esta vacío (contenido distinto de null) no puedo insertar
                        // lanzo error
                        else {
                            defensas[posicion] = null;
                        }
                        // Muestro de nuevo los defensas para ver si se ha insertado
                        alert(`defensas tras insertar
                                0 - ${defensas[0]}
                                1 - ${defensas[1]}
                                2 - ${defensas[2]}`);
                        break;

                    case "1":
                        // Si está vacio (tiene null) entonces puedo insertar (pido nombre al usuario)
                        if (defensas[posicion] == null) {
                            alert("ERROR: no es posible eliminar si está vacío");
                        }
                        // Si no esta vacío (contenido distinto de null) no puedo insertar
                        // lanzo error
                        else {
                            defensas[posicion] = null;
                        }
                        // Muestro de nuevo los defensas para ver si se ha insertado
                        alert(`defensas tras insertar
                            0 - ${defensas[0]}
                            1 - ${defensas[1]}
                            2 - ${defensas[2]}`);

                        break;
                    case "2":
                        // Si está vacio (tiene null) entonces puedo insertar (pido nombre al usuario)
                        if (defensas[posicion] == null) {
                            alert("ERROR: no es posible eliminar si está vacío");
                        }
                        // Si no esta vacío (contenido distinto de null) no puedo insertar
                        // lanzo error
                        else {
                            defensas[posicion] = null;
                        }
                        // Muestro de nuevo los defensas para ver si se ha insertado
                        alert(`defensas tras insertar
                                0 - ${defensas[0]}
                                1 - ${defensas[1]}
                                2 - ${defensas[2]}`);
                        break;

                    default:
                        alert("ERROR: posición seleccionada de defensas no disponible");
                        break;
                }
                break;

            case "2":
                // Eleccion de MEDIOCAMPISTA
                posicion = prompt(`¿En qué posición deseas insertar?
                        0 - ${mediocampistas[0]}
                        1 - ${mediocampistas[1]}
                        2 - ${mediocampistas[2]}
                        3 - ${mediocampistas[3]}`);

                // Evaluo la posición elegida por el usuario.
                // Comprobaremos que debe ser distinto a null
                switch (posicion) {
                    case "0":
                        // Si está vacio (tiene null) entonces puedo insertar (pido nombre al usuario)
                        if (mediocampistas[posicion] == null) {
                            nombre = prompt("¿Que nombre de jugador?");
                            // Compruebo que tiene caracteres (que no está vacío el nombre del usuario)
                            if (nombre.length > 0) {
                                mediocampistas[posicion] = nombre;
                            } else {
                                alert("ERROR: no has introducido nada");
                            }
                        }
                        // Si no esta vacío (contenido distinto de null) no puedo insertar
                        // lanzo error
                        else {
                            alert("ERROR: no es posible insertar en una posicion con contenido");
                        }
                        // Muestro de nuevo los mediocampistas para ver si se ha insertado
                        alert(`mediocampistas tras insertar
                                0 - ${mediocampistas[0]}
                                1 - ${mediocampistas[1]}
                                2 - ${mediocampistas[2]}
                                3 - ${mediocampistas[3]}`);
                        break;

                    case "1":
                        // Si está vacio (tiene null) entonces puedo insertar (pido nombre al usuario)
                        if (mediocampistas[posicion] == null) {
                            nombre = prompt("¿Que nombre de jugador?");
                            // Compruebo que tiene caracteres (que no está vacío el nombre del usuario)
                            if (nombre.length > 0) {
                                mediocampistas[posicion] = nombre;
                            } else {
                                alert("ERROR: no has introducido nada");
                            }
                        }
                        // Si no esta vacío (contenido distinto de null) no puedo insertar
                        // lanzo error
                        else {
                            alert("ERROR: no es posible insertar en una posicion con contenido");
                        }
                        // Muestro de nuevo los mediocampistas para ver si se ha insertado
                        alert(`mediocampistas tras insertar
                                0 - ${mediocampistas[0]}
                                1 - ${mediocampistas[1]}
                                2 - ${mediocampistas[2]}
                                3 - ${mediocampistas[3]}`);
                        break;
                    case "2":
                        // Si está vacio (tiene null) entonces puedo insertar (pido nombre al usuario)
                        if (mediocampistas[posicion] == null) {
                            nombre = prompt("¿Que nombre de jugador?");
                            // Compruebo que tiene caracteres (que no está vacío el nombre del usuario)
                            if (nombre.length > 0) {
                                mediocampistas[posicion] = nombre;
                            } else {
                                alert("ERROR: no has introducido nada");
                            }
                        }
                        // Si no esta vacío (contenido distinto de null) no puedo insertar
                        // lanzo error
                        else {
                            alert("ERROR: no es posible insertar en una posicion con contenido");
                        }
                        // Muestro de nuevo los mediocampistas para ver si se ha insertado
                        alert(`mediocampistas tras insertar
                                0 - ${mediocampistas[0]}
                                1 - ${mediocampistas[1]}
                                2 - ${mediocampistas[2]}
                                3 - ${mediocampistas[3]}`);
                        break;

                    case "3":
                        // Si está vacio (tiene null) entonces puedo insertar (pido nombre al usuario)
                        if (mediocampistas[posicion] == null) {
                            nombre = prompt("¿Que nombre de jugador?");
                            // Compruebo que tiene caracteres (que no está vacío el nombre del usuario)
                            if (nombre.length > 0) {
                                mediocampistas[posicion] = nombre;
                            } else {
                                alert("ERROR: no has introducido nada");
                            }
                        }
                        // Si no esta vacío (contenido distinto de null) no puedo insertar
                        // lanzo error
                        else {
                            alert("ERROR: no es posible insertar en una posicion con contenido");
                        }
                        // Muestro de nuevo los mediocampistas para ver si se ha insertado
                        alert(`mediocampistas tras insertar
                                0 - ${mediocampistas[0]}
                                1 - ${mediocampistas[1]}
                                2 - ${mediocampistas[2]}
                                3 - ${mediocampistas[3]}`);
                        break;

                    default:
                        alert("ERROR: posición seleccionada de mediocampistas no disponible");
                        break;
                }
                break;

            case "3":
                // Eleccion de DELANTERO

                break;

            default:
                alert("ERROR: posición seleccionada no disponible");
                break;
        }
        break;

    default:
        alert("ERROR: operación seleccionada no disponible");
        break;
}


// Mostramos el equipo COMPLETO
alert(`PORTEROS 
    0 - ${porteros[0]}
    1 - ${porteros[1]}
    
    DEFENSAS
    0 - ${defensas[0]}
    1 - ${defensas[1]}
    2 - ${defensas[2]}

    MEDIOCAMPISTAS
    0 - ${mediocampistas[0]}
    1 - ${mediocampistas[1]}
    2 - ${mediocampistas[2]}
    3 - ${mediocampistas[3]}

    DELANTEROS
    0 - ${delanteros[0]}
    1 - ${delanteros[1]}`);