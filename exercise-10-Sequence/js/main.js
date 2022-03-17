'use strict';

const A = [1, 0, 1, 0, 1, 1];
const B = [1, 1, 0, 1, 1];
const C = [0, 1, 0];
const D = [0, 1, 1, 0];



function solution(array) {
    //guardo los ceros y los unos
    let zeros = [];
    let ones = [];
    let reverse;

    for (let i = 0; i < array.length; i++) {
        if (array[i] === 0) {
            zeros.push(array[i]);
        } else if (array[i] === 1) {
            ones.push(array[i]);
        }
    }
    console.log("zeros", zeros);
    console.log("unos", ones);
    //en un array de 6 tiene que haber 3 zeros y 3 unos
    //como en array unos hay 4, debo sacar el que sobra
    if (ones.length > 3) {
        reverse = ones.pop();
    }
    return reverse;

}
console.log(solution(D));

//le doy la vuelta para que la seceuncia sea correcta
// function solution(array) {
//     for (let i = 0; i < array.length; i++) {
//         if (array[0] === 1
//             && array[1] === 0
//             && array[2] === 1
//             && array[3] === 0
//             && array[4] === 1) {
//             const reverse = array[5] = 0;
//             array.pop();
//             array.push(reverse)

//         }
//         return array;
//     }
// }
// console.log(solution(A));

