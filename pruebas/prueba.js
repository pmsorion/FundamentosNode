// import { ftruncate } from "fs";
// import { type } from "os";

import { runInThisContext } from "vm";

function stringPertutations(str) {
    var array = getPertutation(str);
    return array.sort();
}

function getPertutation(str) {
    var permutations = [],
    nextWord = [],
    chars = [];

    if (typeof str === 'string') chars = str.split('');
    else if (typeof str === 'number') {
        str = str + "";
        chars = str.split('');
    }

    permutate(chars);

    return permutations;

    function permutate(chars) {
        if (chars.length === 0) permutations.push(nextWord.join(''));
        for (var i=0; i < chars.length; i++) {
            chars.push(chars.shift());
            nextWord.push(chars[0]);
            permutate(chars.slice(1));
            nextWord.pop();
        }
    }
}

removeDuplicate = array => array.fiter((item, index) => array.indexOf(item) == index)

s= "CBA"

console.log(stringPertutations(s));


