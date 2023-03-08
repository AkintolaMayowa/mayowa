/*
Loops
Loops can execute a block of code a number of times.

Loops are handy, if you want to run the same code over and over again, each time with a different value.
Often this is the case when working with arrays:

*/

/* for - loops through a block of code a number of times */

const array = Array.from({length:10}, (v, i)=>v = i+1);

const obj = {id:1, name:'sapa', age:2000}
/*
function extractEvenNums(arr){
    let evenNum = []
    for(let i = 0; i <= arr.length; i++){
        if(arr[i] % 2 === 0) evenNum.push(arr[i])
    }
    return evenNum;
}

console.log(extractEvenNums(array))
*/

/* for/in - loops through the properties of an object or index of an array*/
/*
for(let i in array){
    console.log(i)
}
*/
/*
for(let i in obj){
    console.log(i)
}
*/

/* for/of - loops through the values of an array */
/*
function extractEvenNums(arr){
    let evenNum = []
    for(let i of array){
        if(i % 2 === 0) evenNum.push(i)
    }
    return evenNum;
}

console.log(extractEvenNums(array))
*/

/* while - loops through a block of code while a specified condition is true */
/*
let i = 12;

while(i < 15){
    console.log(i);
    i++;
}
*/

/* do/while - also loops through a block of code while a specified condition is true */
let i =5;
/*
do{
    console.log("do while loop initial fire");
    i++;
}while(i < 9);

*/


/*
Assignment:

1. write a function that takes in a number and adds all the odd numbers within it
10=> 1,2,3,4,5,6,7,8,9, 10 =>3,5,7,9=24;

fun(10)=>24


2. write a function that takes in a year and prints the century that year belongs to
1970=> 20


3. write a function that takes in a string and a character and removes all the instance of the character from the string
("javascript","a")=>jvscript

4. write a function that takes in an array of numbers and a number and place the number where it is suppose to be
([1,2,3,5], 4)=>[1,2,3,4,5]

*/


// 3.
// const removechar=(string, character)=>string.split(character).join('')

// console.log(removechar('javascript', 'a'))


// function sum(num){
//     let total = 0;
//     for(let i=0; i< num; i++){
//      if (i % 2 !== 0){
//     total += i;
//  }
// }
// return total;
// }
// console.log(sum(10))

// function sum(num){
// let total = 0;
// for ( let i = 1; i <= num; i += 2) {
//   if (i % 2 !== 0){
//     total += i;
//   }
// }
// return total;
// }
// console.log(sum(10))

// function replaceNum(arrNum, num){
//     arrNum = arrNum.splice()
//     return arrNum;
// }
// console.log(replaceNum([]))

// const months = [1,2,3,5];
// months.splice(3, 0, 4);
// console.log(months)

/* 2 century  solution

const centuryFromYear=(year)=>{
    let century = 1;
    while(year > 100){
        century++;
        year -= 100;
    }
    return century;
}
console.log(centuryFromYear(1970))

 */

/* 4 replacement */

// const replaceNumInArray=(arr, num)=>{
//     let index;
//    for(let i = 0; i < arr.length; i++){
//     if(arr[i] <= num && arr[i+1] >= num) {
//         index = i;
//         break;
//     }
//     if(num > arr[arr.length-1]){
//         index = arr.length-1
//     }
//    }
//     arr.splice(index+1, 0, num);
//     return arr;
// }
 
// console.log(replaceNumInArray([1,2,3,5], 6))

