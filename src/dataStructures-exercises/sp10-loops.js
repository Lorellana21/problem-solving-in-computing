'use strict';

/**Given an array of numbers, write a function to return 2 numbers whose sum is 10.

So, for the array [1, 3, 3, 5, 7, 9, 2, 4] it could return [1, 9] or [3, 7]. */

const A = [1, 3, "t", 3, 5, 7, 9, 2, 4];

//A = []
//A = [...]
//A = 

function doWeHaveTheSum(array, targetValue) {

    for (let i = 0; i < array.length - 1; i++) {
        let firstNumber = array[i]
        for (let j = i + 1; j < array.length; j++) {
            let secondNumber = array[j]

            //check string/integer
            if (typeof firstNumber != 'number' || typeof secondNumber != "number") {
                continue;
            }
            if (firstNumber + secondNumber === targetValue) {
                console.log("I found it with the numbers " + firstNumber + " and " + secondNumber);
            }
        }
    }
}
doWeHaveTheSum(A, 10);
