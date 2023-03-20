//alert("Hello world")

//let id = document.getElementById("name");
//alert(id)

//getting HTML element

//by id

let id = document.getElementById("name");
//console.log(id)

// by class name

let className = document.getElementsByClassName("name")
//console.log(className)

// by tag name

let div = document.getElementsByTagName("div")
//console.log(div)

//for class name
let query = document.querySelector(".name")


//for tag name
let query1 = document.querySelector("p")


//for tag name
let query3 = document.querySelector("#name")

//manipulating the html content

//getting content

let content = query3.textContent;
//console.log(content)

content = "my own content"
//console.log(content);

//query3.value

query3.innerHTML = "my own content with inner HTML"

console.log(query3.textContent);


//creating tags with js

let myDiv = document.createElement("div");
myDiv.textContent = "newly created div";
query3.prepend(myDiv);

// removing html element with js
query1.remove();

// adding class name to html elemnt

myDiv.classList.add("new_class");
//console.log(myDiv)

//remove and replacing class name

myDiv.classList.remove("new_name");
myDiv.classList.replace("replacement", "new_name")

//getting data attribute


//setting and getting attributes

myDiv.setAttribute("id", "new_id")
let getAttr =myDiv.getAttribute("id")
//console.log(getAttr)

//manipulating css properties with javascript: to do this just call the style property of the tag name

myDiv.style.background = "green";


