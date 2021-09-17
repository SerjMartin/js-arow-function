/**
 * To run this file in Gitpod, use the 
 * command node rest-parameter-syntax.js in the terminal
 */

// Regular function call 
const sumAll = (a, b, c) => a + b + c;
let sum = sumAll(1,2, 3);
console.log("Sum:", sum);

// Extra arguments are ignored
let sum2 = sumAll(1, 2, 3, 4, 5, 6);
console.log("Sum2", sum2);

// Function using ...rest
const sumRest = (a, b, c, ...rest) => {
    let sum = a + b + c;
    for (let i of rest) {
        sum += i;
    }

    return sum;
}

let sum3 = sumRest(1, 2, 3, 4, 5, 6);
console.log("Sum3", sum3);


//-- function ex ----------------------------------------//
let mixedLetters = ['b', 'd', 'a', 'c', 'f', 'e'];
let moreMixedLetters = [...mixedLetters,'h', 'k', 'g', 'j', 'i', 'l'];
const updateSortReverse =  (arr, ...letters) => {
    let arr2 = [...arr];
    for(let i of letters) {
        arr2.push(i);
    }
    arr2.sort();
    arr2.reverse();
    return arr2;
};
//-- semilar--//
//--const updateSortReverse = (arr, ...letters) => [...arr, ...letters].sort().reverse();--//  
let reverseSort = updateSortReverse(moreMixedLetters, 'n', 'm', 'o');


console.log(moreMixedLetters);
console.log(reverseSort);
console.log(mixedLetters);