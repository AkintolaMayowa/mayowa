const click = document.getElementById("click")
const name = document.getElementById("name")
const input = document.getElementById("input")

const array = []

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


