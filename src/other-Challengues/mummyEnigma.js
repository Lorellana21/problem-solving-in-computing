"use strict";

/**The problem consists of a string of unintelligible text and an array of numbers containing the correct positions of each letter, so you have to obtain a url that would lead to a web page. */



//Datos de los que partimos
const anagrama = "Cómo será dar con nekgikis V...";

const lista = [23, 24, 25, 18, 19, 5, 6, 7, 20, 15, 17, 8, 10, 11, 4, 3, 12, 2, 16, 14, 9, 21, 0, 1, 13, 22];

//1ª Quitar espacios y acentos
const anagramaSinEspacios = anagrama.toLowerCase().replace(/\s/g, "").replace("ó", "o").replace("á", "a");
console.log(anagramaSinEspacios);

//2ª Sustituir la posición de cada letra donde corresponde
const solucion = [...anagramaSinEspacios].reduce((solucion, letter, index) => {
    solucion[lista[index]] = letter;
    return solucion;

}, []);

//3ª Mostrar el resultado
console.log(solucion.join(""));