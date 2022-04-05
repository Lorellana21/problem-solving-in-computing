/** 
  * Ref: https://medium.com/@andrey.igorevich.borisov/10-javascript-exercises-with-arrays-c44eea129fba
  * 
  * Task description: Write a method that creates an array of unique values that are included in all given arrays 
  * Expected Result: ([1, 2], [2, 3]) => [2] 
  * Restriction: Use only arrays as data structures to solve the problem
  * @param {?} arrays - Arrays of primitive data types 
  * @returns {Array} 
*/

'use strict';

// const intersection = (...arrays) => {
//     let result = [];
//     //itero todos los arrays
//     arrays.forEach(array => {
//         //entro en cada uno de los elementos
//         for (var i = 0; i < array.length; i++) {
//             var element = array[i];
//             //preguntar a element si esta en todos los arrays
//             var inAll = true;//acumulador
//             arrays.forEach(otherArray => {
//                 inAll = inAll && otherArray.includes(element);
//             });
//             if (inAll && !result.includes(element)) {
//                 result.push(element);
//             }
//         }
//     });
//     return result;
// }

const intersection = (...arrays) => {
    let result = [];

    //Iterar todos los arrays
    arrays.forEach(array => {

        //Iterar todos los elementos del array
        for (var i = 0; i < array.length; i++) {
            var shouldInclude = true;

            //Saltar los elemntos si ya estan incluidos
            if (!result.includes(array[i])) {

                //comprobar si el elemento esta incluido en cada array
                for (var j = 0; j < arrays.length; j++) {
                    shouldInclude = shouldInclude && arrays[j].includes(array[i]);
                }
                //Añadir el elemento al array
                if (shouldInclude) {
                    result.push(array[i]);
                }
            }


        }
    });
    return result;

}




const arr1 = [1, 2];
const arr2 = [2, 3];
console.log(intersection(arr1, arr2)) // [2]

const arr3 = ['a', 'b'];
const arr4 = ['b', 'c'];
const arr5 = ['b', 'e', 'c'];
console.log(intersection(arr3, arr4, arr5)) // ['b']

const arr6 = ['b', 'b', 'e'];
const arr7 = ['b', 'c', 'e'];
const arr8 = ['b', 'e', 'c'];
console.log(intersection(arr6, arr7, arr8)) // ['b', 'e']