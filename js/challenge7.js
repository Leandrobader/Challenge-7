/*
Obtener la base y la altura de un triangulo, y el radio de un circulo. Mostrar por consola el area del triangulo y del circulo con un mensaje detallando cual es cual.

Recordar:
--Area de triangulo: (base x altura)/2
--Area del circulo: π(pi) x radio^2

*Para aumentar la dificultad lograr que el usuario brinde los datos necesarios para calcular (interactuando) y mostrarle en pantalla el resultado.
*/

let base;
let altura;
let radio;
const pi = 3.14;

alert("En este ejercicio vamos a pedir que el usuario ingrese algunos datos para calcular el area de un triangulo y el area de un circulo");

base = parseInt(prompt("Ingrese la base del triangulo en cm"));
altura = parseInt(prompt("Ingrese la altura del triangulo en cm"));
radio = parseInt(prompt("Ingrese el radio del circulo en cm"));

let areaTriangulo = (base * altura)/2;
let areaCirculo = pi * Math.pow(radio,2);

console.log("El area del triangulo es de:",areaTriangulo+"cm");
console.log("El area del circulo es de:",areaCirculo+"cm");

document.write("El area del triangulo es de: "+areaTriangulo+"cm");
document.write("<br/>El area del circulo es de: "+areaCirculo+"cm");

