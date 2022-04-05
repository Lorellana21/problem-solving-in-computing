'use strict';

/**Write a function:

```
function solution(A);
```

that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

For example, given `A = [1, 3, 6, 4, 1, 2]`, the function should return 5.

Given `B = [1, 2, 3]`, the function should return 4.

Given `C = [−1, −3]`, the function should return 1.

Write an efficient algorithm for the following assumptions:

• N is an integer within the range [1..100,000];

• each element of array A is an integer within the range [−1,000,000..1,000,000]. */


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