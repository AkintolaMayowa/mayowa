//DSA

//1. null

//2.undefined

//3. String

//4. Number

//5. Object

//6. Array

//7. Set

//Truthy : 1, [9], 'h'
//Falsy: 0, [], '',, null, undefined

const array = ['david', 'mayowa', 'david']

const set = new Set();
set.add('david')
set.add('mayowa')
set.add('david')

//console.log(set)
/*
const calAmount=(price, quantity)=>{
    return price * quantity
}
*/

/**
 * A function to calculate tax payable
 * @param {number} taxRate 
 * @param {number} amount 
 * @returns {number}
 */
/*
const calTax=(taxRate, amount)=>{
    return taxRate * amount;
}
console.log(calTax(0.25, 16750));
*/

const name = 'mayowa';
/*
console.log(name.length);
console.log(name.slice(0, 3))
console.log(name.substring(0, 3))
console.log(name.substr(0, 3))
*/
/*
console.log(name.replace('m', 'b'));
console.log(name.replaceAll('a', 'i'));
*/

/*
console.log(name.toUpperCase())
console.log(name.toLowerCase())
*/

/*
const firstName = 'david';
const surname = 'alimazoya';

console.log(firstName.concat(" " + surname))
*/

const sentence = " the brown fox does this and that ";
/*
console.log(sentence.trim());

console.log(sentence.trimStart())
console.log(sentence.trimEnd())
console.log(sentence);
*/

/*
console.log(sentence.padStart(37, 'all'))
console.log(sentence.padEnd(40, 'things'))
*/

/*
console.log(name.charAt(20));
console.log(name.charCodeAt(1));

const letter = String.fromCodePoint(65)
console.log(letter);
*/
/*
const nameArray = name.split('');

const csv = 'this, is, a, comma, separated, list'
console.log(csv.split(','))
*/

//converting to string
const number = 45;
//console.log(String(number))

//template string

const template = `my name is ${name} i stay at number ${number}`;
console.log(template);