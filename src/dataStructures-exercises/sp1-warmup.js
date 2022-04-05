/** 
  * Ref: https://medium.com/@andrey.igorevich.borisov/10-javascript-exercises-with-arrays-c44eea129fba
  * 
  * Task description: Write a method that returns a duplicate-free array 
  * Expected Result: Duplicate-free array [1, 2, 3, 1, 2] => [1, 2, 3] 
  * Restriction: Use only arrays as data structures to solve the problem
  * @param {Array<string | number>} array - Array of primitive data types 
  * @returns {Array} 
*/


'use strict';

const unique = (array) => {
    //creo un nuevo array vacío que será mi nuevo array libre de duplicados
    let result = [];
    //recorro mi array "data"
    for (let i = 0; i < array.length; i++) {
        //está ya el numero en al nuevo array?
        //si está el número entonces no lo quiero
        //entonces solo lo voy a incluir si no estaba ya
        if (!result.includes(array[i])) {
            result.push(array[i]);
        }
    }
    return result;
}


const data = [1, 2, 1, 2, 3, 4, 4, 7, 8, 9];

console.log(unique(data));

// "type" : "module" en package.json 
