'use strict';
import { Stack } from "@datastructures-js/stack";


const balanced = (input) => {
    // Complete
}

let test1 = "This a test (detailing [balanced] brackets)";
console.log(test1,"=>",balanced(test1));

let test2 = "This a test (detailing [unbalanced brackets)";
console.log(test2,"=>",balanced(test2));