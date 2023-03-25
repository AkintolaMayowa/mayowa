
const click = document.getElementById("click")
const name = document.getElementById("name")
//const input = document.getElementById("input")

//const array = []

click.addEventListener("click", e=>{
    array.push(input.value);
    console.log(array)
})

const someAction=()=>{
    console.log("perform action")
}

//this allows you to store data in the db of your browser, can only store string

//storing data
const myDB = [{name:"mayowa", dept:"science"}];
const simpleData = "mayowa";
window.localStorage.setItem("names", simpleData);
const stringData = JSON.stringify(myDB)
window.localStorage.setItem("myDB", stringData);

//retrieving items;

const myNames = window.localStorage.getItem("names");

const dbObj = window.localStorage.getItem("myDB");
const obj = JSON.parse(dbObj)
console.log(obj);

/*
    Assignment:

    Add your items to the local storage, from the local storage use map to output the items in the list or table,
*/

//https://www.w3schools.com/tags/ref_eventattributes.asp

//Events are reactions to user actions in the HTML DOM, Document Object Model

//Events types

//Window Events

window.document.title="HTML Event";
let width = window.innerWidth
//console.log(window)
//console.log(width)

//DOM element eevents

//console.log(document)

//MouseEvent

const title = document.getElementById("title");
const input = document.getElementById("input");
const btn = document.getElementById("btn");
const form = document.getElementById("form");

console.log(title);

title.addEventListener("click", e=>console.log(e))


//Input Event

//input.addEventListener("change", e=>console.log(e))

//Button Event;

btn.addEventListener("click", e=>console.log(e))

//Form Events;
form.addEventListener("submit", e=>{
    e.preventDefault();
    console.log(e)
});

//executing js code inside HTML

const testFun=()=>{
    console.log("test function")
};

const array = [];

const addToArray=(value)=>{
    array.push(value);
    console.log(array)
}

input.addEventListener("change", e=>addToArray(e.target.value))


