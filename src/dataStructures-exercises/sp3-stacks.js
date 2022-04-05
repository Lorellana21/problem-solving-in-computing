import { Stack } from "@datastructures-js/stack";

/**
 * Ref: https://www.educative.io/blog/level-up-javascript-coding-challenges#balanced-brackets
 *
 * Task description: Given a string possibly containing three types of braces ({}, [], ()), write a
 * function that returns a Boolean indicating whether the given string contains a valid nesting of braces.
 * Expected Result:
 * - "This a test (detailing [balanced] brackets)" => true
 * - "This a test (detailing [balanced brackets)" => false
 * Restriction: Use only arrays as data structures to solve the problem
 * @param {?} arrays - Arrays of primitive data types
 * @returns {Array}
 */


//One option
// const balanced = (input) => {
//     let stack = new Stack();
//     const inputToArray = Array.from(input);
//     for (let i = 0; i < inputToArray.length; i++) {
//         if (
//             inputToArray[i] === "{" ||
//             inputToArray[i] === "[" ||
//             inputToArray[i] === "("
//         ) {
//             stack.push(inputToArray[i]);
//         } else if (
//             inputToArray[i] === "}" ||
//             inputToArray[i] === "]" ||
//             inputToArray[i] === ")"
//         ) {
//             const stackPeek = stack.peek();
//             if (
//                 (inputToArray[i] === "}" &&
//                     (stackPeek === "[" || stackPeek === "(" || stack.size() === 0)) ||
//                 (inputToArray[i] === "]" &&
//                     (stackPeek === "{" || stackPeek === "(" || stack.size() === 0)) ||
//                 (inputToArray[i] === ")" &&
//                     (stackPeek === "[" || stackPeek === "{" || stack.size() === 0))
//             ) {
//                 return false;
//             } else {
//                 stack.pop();
//             }
//         }
//     }

//     if (stack.size() === 0) {
//         return true;
//     } else {
//         return false;
//     }
// };

// let test1 = "This a test (detailing [balanced] brackets)";
// console.log(test1, "=>", balanced(test1));

// let test2 = "This a test (detailing {unbalanced [brackets]})";
// console.log(test2, "=>", balanced(test2));

// let test3 = "This a test ][detailing {unbalanced [brackets]}]";
// console.log(test3, "=>", balanced(test3));

// let test4 = "This a test (detailing {unbalanced [brackets])";
// console.log(test4, "=>", balanced(test4));


//My solution
const balanced = (input) => {

    let stack = new Stack();//Creo la pila

    for (let i = 0; i < input.length; i++) {//Recorremos la expresión
        let x = input[i];
        if (x === "[") {//Si es de apertura apilamos siempre
            stack.push(x);

        } else if (x === "]") {//Si es de cierre actuamos según el caso
            if (!stack.isEmpty()) {//si la pila no está vacía, desapilamos
                stack.pop()
            } else {
                stack.push(x);//Si está vacía apilamos
            }

        }
    }

    if (stack.isEmpty()) {
        return true;
    } else {
        return false;
    }
}



let test1 = "This a test (detailing [balanced] brackets)";
console.log(test1, "=>", balanced(test1));

let test2 = "This a test (detailing [unbalanced brackets)";
console.log(test2, "=>", balanced(test2));