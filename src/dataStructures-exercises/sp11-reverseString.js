"use strict";

/**You are given a string s. You need to reverse the string.

Example 1:
Input:
s = Hello
Output: olleH

Example 2:
Input:
s = for
Output: rof

Example 3:
Input:
s = " Hi My Name Is Laura "
Output:

Example 4:
Input:
s = " Hi"
Output: */



// public String replace(char searchChar, char newChar)
// string.replace(/ /g, "")
// const encriptedMessageArray = [...encriptedMessage.replace(/ /g,"_")];

const A = "Hello";
const B = "for";
// " Hi My Name Is Laura " some spaces and words
//" Hi" one space at the beginning

function reverseTheWord(word) {
    // check for empty string
    if (word == null || !word.length) {
        return word;
    }
    //remove spaces
    //let word = word.trim();

    // if > 1 word in the string, throw InvalidOperationException
    // use contains to figure out if there are spaces
    //if (word.contains(" ")) { }
    //option 1
    //String[] x = word.split(" ");
    //if (x.length > 1) { throw new InvalidOperationException(); }


    // variable to hold return value
    let answer = "";
    debugger;
    // loop the characters in the string
    for (let i = word.length - 1; i >= 0; i--) {
        answer += word[i];
    }

    return answer;

}
console.log(reverseTheWord(A));
/**----------------------------------------------*/

//Other option
//const A = "Hello";
// function reverseTheWord(word) {
//     let reverseWord = [];
//     for (let i = word.length - 1; i >= 0; i--) {
//         reverseWord.push(word[i]);
//     }
//     return reverseWord;
// }
// console.log(reverseTheWord(A));

/**----------------------------------------*/

//we can use an array as a Stack

// const welcome = "Hello";
// const roof = "roof";


// function reverseTheWord(word) {

//     let stack = [];//this is our stack.I´m going to use the stack to fill up the reverse word variable with the reverse of the word variable
//     let reverseWord = "";//a variable, an empty string, where I store what is popped off the stack

//     //put the letters of "word" into the stack
//     for (let i = 0; i < word.length; i++) {
//         stack.push(word[i]);
//     }
//     //pop off the stack in reverse order
//     for (let i = 0; i < word.length; i++) {
//         reverseWord += stack.pop();
//     }
//     return reverseWord;

// }
// console.log(reverseTheWord(roof));