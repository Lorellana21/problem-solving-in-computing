"use strict";

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



