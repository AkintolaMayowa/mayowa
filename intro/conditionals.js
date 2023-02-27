/*
Conditionals:
Conditional statements are used to perform different actions based on different conditions
*/

/* Use if to specify a block of code to be executed, if a specified condition is true */
/*
if(3 < 4){
    console.log("condition met")
}
*/
/* Use else to specify a block of code to be executed, if the same condition is false */

/*
if(3 > 4){
    console.log("condition met")
}else{
    console.log("condition not met")
}
*/

/* Use else if to specify a new condition to test, if the first condition is false */

/*
if(3 > 4){
    console.log("condition met")
}else if(2 * 3 !== 5){
    console.log("second condition met")
}else{
    console.log("second condition not met")
}
*/

/* Use switch to specify many alternative blocks of code to be executed */

function whichDayIsToday(day){
    switch(day){
        case 'monday':{ return "Monday"; break}
        case 'tuesday': { return "Tuesday"; break}
        case 'wednesday':{ return "wednesday"; break}
        default : {return "No Match"; break}
    }
}
console.log(whichDayIsToday('tuesday'))
