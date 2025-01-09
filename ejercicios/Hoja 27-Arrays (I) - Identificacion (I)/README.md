
# Ejercicios 27. Identificar cuándo usar Arrays en el Código

**Instrucciones:**  
Lee cada fragmento de código y analiza si el uso de variables individuales es correcto o si sería más adecuado agruparlas en un array. 

Responde cuáles variables deberían agruparse y cuáles no corrigiendo el código en caso de ser necesario.

---

## **Ejercicio 1**
```javascript
let producto1 = "Laptop";
let producto2 = "Mouse";
let producto3 = "Teclado";
let producto4 = "Monitor";
let producto5 = "Impresora";

let precio1 = 1000;
let precio2 = 20;
let precio3 = 50;
let precio4 = 200;
let precio5 = 150;

let tienda = "Tienda Central";
let direccion = "Calle Principal 123";

if (producto1 === "Laptop" || producto2 === "Laptop" || producto3 === "Laptop") {
    // acción 1
}

if (direccion === "Calle Principal 123") {
    // acción 2
}
```

---

## **Ejercicio 2**
```javascript
let estudiante1 = "Juan";
let estudiante2 = "Ana";
let estudiante3 = "Pedro";
let estudiante4 = "María";

let nota1 = 90;
let nota2 = 85;
let nota3 = 78;
let nota4 = 92;

let curso = "Matemáticas";

if (estudiante1 === "Juan" && nota1 > 80) {
    // acción 1
}

if (curso === "Matemáticas") {
    // acción 2
}
```

---

## **Ejercicio 3**
```javascript
let mes1 = "Enero";
let mes2 = "Febrero";
let mes3 = "Marzo";
let mes4 = "Abril";

let diasMes1 = 31;
let diasMes2 = 28;
let diasMes3 = 31;
let diasMes4 = 30;

let año = 2024;

if (diasMes2 === 28 && año % 4 === 0) {
    // acción 1
}
```

---

## **Ejercicio 4**
```javascript
let cliente1 = "Carlos";
let cliente2 = "Lucía";
let cliente3 = "Miguel";

let compra1 = 150;
let compra2 = 300;
let compra3 = 400;

let tienda = "Supermercado";

if (cliente1 === "Carlos" && compra1 > 100) {
    // acción 1
}

if (tienda === "Supermercado") {
    // acción 2
}
```

---

## **Ejercicio 5**
```javascript
let pais1 = "España";
let pais2 = "Francia";
let pais3 = "Alemania";
let pais4 = "Italia";

let capital1 = "Madrid";
let capital2 = "París";
let capital3 = "Berlín";
let capital4 = "Roma";

if (pais1 === "España" && capital1 === "Madrid") {
    // acción 1
}
```

---

## **Ejercicio 6**
```javascript
let ciudad1 = "Nueva York";
let ciudad2 = "Londres";
let ciudad3 = "Tokio";
let ciudad4 = "Sídney";

let población1 = 8.3;
let población2 = 9.4;
let población3 = 14.0;
let población4 = 5.3;

if (ciudad1 === "Nueva York" && población1 > 8) {
    // acción 1
}
```

---

## **Ejercicio 7**
```javascript
let producto1 = "Mesa";
let producto2 = "Silla";
let producto3 = "Lámpara";

let material1 = "Madera";
let material2 = "Plástico";
let material3 = "Metal";

if (producto1 === "Mesa" && material1 === "Madera") {
    // acción 1
}
```

---

## **Ejercicio 8**
```javascript
let deporte1 = "Fútbol";
let deporte2 = "Baloncesto";
let deporte3 = "Tenis";
let deporte4 = "Natación";

let jugadores1 = 11;
let jugadores2 = 5;
let jugadores3 = 2;
let jugadores4 = 1;

if (deporte1 === "Fútbol" && jugadores1 === 11) {
    // acción 1
}
```

---

## **Ejercicio 9**
```javascript
let libro1 = "1984";
let libro2 = "El Principito";
let libro3 = "Cien Años de Soledad";

let autor1 = "George Orwell";
let autor2 = "Antoine de Saint-Exupéry";
let autor3 = "Gabriel García Márquez";

if (libro1 === "1984" && autor1 === "George Orwell") {
    // acción 1
}
```

---

## **Ejercicio 10**
```javascript
let color1 = "Rojo";
let color2 = "Verde";
let color3 = "Azul";
let color4 = "Amarillo";

let código1 = "#FF0000";
let código2 = "#00FF00";
let código3 = "#0000FF";
let código4 = "#FFFF00";

if (color1 === "Rojo" && código1 === "#FF0000") {
    // acción 1
}
```

---
