"use strict";

//we can use an array as a Stack

const welcome = "Hello";
const roof = "roof";


function reverseTheWord(word) {

    let stack = [];//this is our stack.I´m going to use the stack to fill up the reverse word variable with the reverse of the word variable
    let reverseWord = "";//a variable, an empty string, where I store what is popped off the stack

    //put the letters of "word" into the stack
    for (let i = 0; i < word.length; i++) {
        stack.push(word[i]);
    }
    //pop off the stack in reverse order
    for (let i = 0; i < word.length; i++) {
        reverseWord += stack.pop();
    }
    return reverseWord;

}
console.log(reverseTheWord(roof));
