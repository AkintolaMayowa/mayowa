/*
An array is a collection of different items
each item is stored in an index starting from 0 
*/

const array = [23, "david", {id: 1, vin:'123ef'}, false, 12]

//Accessing array items

array[0] // 23
array[2].id // 1
// console.log(array[2].id);

//putting items inside array

array[4] = 'new item';
// console.log(array)


//changing items

array[0] = 31;

array[2].id = 23;

//properties of an array

array.length //5

//console.log(array.length)

//array methods

/*1. push: adds element to the end of an array */

array.push(98);

//console.log(array)

/*1. pop: removes element from the end of an array */

array.pop();

// console.log(array)

/* shift(): remove an element from the beginning of an array */

array.shift()
//console.log(array)

/* unshift(): add an element to the beginning of an array */

array.unshift(12);
//console.log(array)

/* filter(): Return only an array of elements that match the criteria */

const newArray = array.filter((value, i)=> value !== 12);
//console.log(newArray)

/* indexOf(): Returns the first index of an element in the array, returns -1 if absent */

const index = array.indexOf(13);
// console.log(index)

/* lastIndexOf(): Returns the first index of an element in the array, returns -1 if absent */
array.push(12)
const lastIndexOf = array.lastIndexOf(12)
// console.log(lastIndexOf);

/* find(): Returns the first element of an array that matches the criteria, returns -1 if absent */

const find = array.find(value=>value === 12);
//console.log(find);

/* findIndex(): Returns the first index of the element of an array that matches the criteria, */
const findIndex = array.findIndex(value=>value === 'david')
// console.log(findIndex)

/* concat(): joins two or more array */
const array1 = [1,2,3]; const array2 = ['boys', 'girls']
const concat = array1.concat(array2)
// console.log(concat)

/* forEach(): a void function that is triggered for each element in the array */

// const foreach = concat.forEach((value, i, _)=>console.log(`current value ${value}\n`));
//foreach

/* some(): returns and true if some elements match the criteria */

const some = concat.some(value=>typeof value === 'string');
// console.log(some)

/* reduce(): reduce the array into a single value */

const numbers = [1,2,3,4,5];
const sum = numbers.reduce((acc, cur, i)=>acc+cur);
// console.log(sum)

/* slice(): takes a part of the array, provide the start and end */
const slice = numbers.slice(0, 2);
// console.log(slice)

/* splice(): add, replace, or remove from a provided index */

const splice = numbers.splice(0, 2, 10, 13);
// console.log(splice +'\n'+numbers)

/* Array.from(): creates a new array from a provided length */

const arrayfrom =Array.from({length:6}, (value, i)=>value = i);
// console.log(arrayfrom)

/* entries(): returns an array of keys and values */

const entries = arrayfrom.entries((value, i)=>value)
//console.log(entries)

/* keys(): returns an array of the indexes */

const keys = arrayfrom.keys().next();
//console.log(keys)

/* includes(): returns true if an element is inside of an array */

const include = arrayfrom.includes(5);
// console.log(include)

/* fill(): it is used to fill values into an array */

const fill = Array.from({length:12}).fill(0);
//console.log(fill)

/* reverse() it is used to reverse an array */

const rev = arrayfrom.reverse();
// console.log(rev)


/* join(): join concatenates two or more array as a string */

const join = arrayfrom.join('');
// console.log(join)


/*
    Assignment:
    given : 1234 (number);
    result: 4321 (number)
*/

// let num = 1234

// function reverseNumber(num){
//     num.toString().split('').reverse().join('')
//     return parseInt(num)
// }
// reverseNumber(num);
/** 
 * solution to assignment 
 * @param {number}
 * @returns {number}
 */

// const reverseNum=(num)=>{
//     let stringArray = num.toString().split('');
//     return parseInt(stringArray.reverse().join(''));
// }
// console.log(reverseNum(1234))

const reverseNum=(num)=>{
    let stringArray = num.toString().split('');
    return parseInt(stringArray.reverse().join(''));
}
console.log(reverseNum(1234))
