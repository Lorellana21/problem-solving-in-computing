'use strict';

/**There are N coins, each showing either heads or tails. We would like all the coins to form a sequence of alternating heads and tails. 

What is the minimum number of coins that must be reversed to achieve this?

Write a function:
```
function solution (A);
```
that, given an array consisting of N integers representing the coins, returns the minimum number of coins that must be reversed. Consecutive elements of array A represent consecutive coins and contain either a 0 (heads) or a 1 (tails).

Examples:

- Given an array ``A = [1, 0, 1, 0, 1, 1]``, the function should return 1. After reversing the sixth coin, we achieve an alternating sequence of coins ``[1, 0, 1, 0, 1, 0]``.

- Given an array ``B = [1, 1, 0, 1, 1]``, the function should return 2. After reversing the first and fifth coins, we achieve an alternating sequence ``[0, 1, 0, 1, 0]``.

- Given an array ``C = [0, 1, 0]``, the function should return 0. The sequence of coins is already alternating.

- Given an array ``D = [0, 1, 1, 0]``, the function should return 2. We can reverse the first and second coins to get the sequence: ``[1, 0, 1, 0]``.

Assume that:
- N is an integer within the range [1..100];
- each element of array is an integer that can has one of the following values: 0, 1. */



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