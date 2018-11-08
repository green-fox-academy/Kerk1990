'use strict';
// Accidentally I messed up this quote from Richard Feynman.
// Two words are out of place
// Your task is to fix it by swapping the right words with code

// Also, log the sentence to the console with spaces in between.
// Create a function called quoteSwap().

let word: string[] = ['What', 'I', 'do', 'create,', 'I', 'cannot', 'not', 'understand.'];
function quoteSwap(word) {
    let newArr = word[2];
    word[2] = word[5];
    word[5] = newArr;
    word = word.join(" ");
    return word;
}

console.log(quoteSwap(word));
// Expected output: "What I cannot create I do not understand."

export = quoteSwap;