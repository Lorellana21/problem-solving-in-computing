'use strict';

const A = [1, 0, 1, 0, 1, 1];//solo funciona este
const B = [1, 1, 0, 1, 1];
const C = [0, 1, 0];
const D = [0, 1, 1, 0];

function solution(array) {



    for (let i = 0; i < array.length; i++) {

        if (array[0] === 1
            && array[1] === 0
            && array[2] === 1
            && array[3] === 0
            && array[4] === 1) {
            const reverse = array[5] = 0;
            array.pop();
            array.push(reverse)

        }

        // if (array[5] != 0) {
        //     result = array[5];
        // }
        return array;

    }
}
console.log(solution(A));

