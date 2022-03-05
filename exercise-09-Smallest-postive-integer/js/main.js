'use strict';
const A = [1, 3, 6, 4, 1, 2];
const B = [1, 2, 3]
const C = [-1, -3]

function solution(array) {
    let result;

    for (let i = 0; i < array.length; i++) {
        if (1 >= 0 && !array.includes(1)) {
            result = 1;
        } else if (2 >= 0 && !array.includes(2)) {
            result = 2;
        } else if (3 >= 0 && !array.includes(3)) {
            result = 3;
        } else if (4 >= 0 && !array.includes(4)) {
            result = 4;
        } else if (5 >= 0 && !array.includes(5)) {
            result = 5;
        }
    }
    return result;
}
console.log(solution(C));
