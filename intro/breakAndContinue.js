/*
Break;

The break statement "jumps out" of a loop.


const array = Array.from({length:1000}, (v, i)=>v = i+1);

for(let i =0; i < array.length; i++){
    let value;
    console.log(`currently at ${array[i]}`)
    if(array[i] === 10){
        value = array[i];
        console.log(`exited at ${array[i]}`)
        break;
    }
}
*/

/*
    Continue:

    The continue statement "jumps over" one iteration in the loop.
*/
// const array = Array.from({length:20}, (v, i)=>v = i+1);

// for(let i =1; i < array.length; i++){
//     if(array[i] % 2 === 0){
        // console.log(`even number ${array[i]} at index ${i}`)
//     }else{
//         continue
//     }
// }

/*
Assignment:

   1. write a function that takes in an array, adds all the odd numbers except 5, 7, and 11, stop the addition if total sum is greater greater than 21
   NB: your array should have minimum of 15 numbers. e.g [1...16]=> sum of odd numbers except the conditions stated above.


*/


const array = Array.from({length:31}, (v, i)=>v = i+1)
const exceptNum = [5,7,11]
let total = 0
for (let i=0; i<= array.length; i += 2){
    console.log(array[i])
    if(!exceptNum.includes(array[i])){
      total += array[i]
    }
    else if(total === 21){
        break
    }
}
  
console.log(total)