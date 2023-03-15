/*
Object

An object is used to store a collection of key and value pairs.
*/
//creating an object

//Method 1: most common

const obj = {
    name: "david",
    age:27,
    likes:["simi", "debby"],
    cities:{country:"Togo", capital:"Lome"},
    travel(){
        // console.log(this.name +" is travelling")
    }
}

//Add properties

// obj.streetName = "Abolore";
// obj.streetNumber = 23;
// obj.func = ()=>console.log("Hello new function");

// remove properties

delete obj.age;

//console.log(obj)

//Accessing items of an object

obj.name // david
//console.log(obj.name);
//Accessing values with key
obj["name"] // david

//obj.travel();

//console.log(obj.likes[0])

//console.log(obj.cities.capital)

//method 2: with class
//without constructor
class Objectname {
    name = "david";
    age = 27;

    travel(){
        // console.log(this.name +" is travlleing");
    }
}

//Initialization: means to create a child or replica or a concrete child object of a class

const obj1 = new Objectname();

//console.log(obj1.name);

//with constructor

//A constructor lets you pass properties to an object on creation

class Objectname1 {

    constructor(name, age){
        this.name = name
        this.age = age;
    }
    travel(){
        // console.log(this.name +" is travlleing");
    }
}

const obj2 = new Objectname1("mayowa", 22);

//console.log(obj2.name);


//Keywords 

//extends: : lets you inherit preporties and methods of a parent object
//super: use the super to change the property in the parent class or get access to the parent class constructor

class Animal{
    eyes = true;
    movement = true;
    constructor(skinColor, numLegs){
        this.skinColor = skinColor;
        this.numLegs = numLegs;
    }
}

class Dog extends Animal{
    constructor(skinColor){
        super();
        this.skinColor = skinColor;
        this.numLegs = 4
    }
}

const dog = new Dog("brown");

//console.log(dog.skinColor);

//this: this refers to the parent class;

//Methods of an Object;

//eys(): return an array of keys in an object.

const keys = Object.keys(obj);

//console.log(keys)

//entries(): returns an array of key and value pairs of an object

const entries = Object.entries(obj);
//console.log(entries)

//values(): returns an array of values in an object

const values = Object.values(obj);

//console.log(values);

//bind(): this lets create a replica of an object;

const Replica = Object.bind(obj)

//console.log(new Replica());

const newObj = {test:123}

const replica = Object.assign(newObj, obj);

//freeze(): prevent editing the object

delete replica.func;

Object.freeze(replica);

replica.nonsense = "nonsense"

//console.log(replica);

/* prototype // this allows you to add new properties to the object contructor */

Dog.prototype.food = ["meat", "milk"];

//hasOwnProperty: lets check whether a property is in an object;

//console.log(dog.hasOwnProperty("numLegs"));


//i = key
for(let i in replica){
//    console.log(replica[i])
}

/*
Assignment:

1. giving this object 

1. let arr = [{name: "david", age:30}, {name: "sam", age:25}, {name: "ovis", age:26}, {name: "ken", age:18}, {name: "gbenga", age:20},]
i. find the average age in the object.
ii. remove items with age greater than 24

2. create a class with name Users with the following properties: name, department, id, email. create another class with name Admin that inherit from users and
has a function delete user.

3. write a function that takes in an array and returns the most occuring number.
e.g [1,1,2,2,3,3,2,1,2,2,1,3,5,3,2] => 2


*/


let arr = [{name: "david", age:30}, {name: "sam", age:25}, {name: "ovis", age:26}, {name: "ken", age:18}, {name: "gbenga", age:20},]
const findAverageAge = (arr) => {
    const { length } = arr;
    return arr.reduce((acc, val) => {
       return acc + (val.age/length);
    }, 0);
 };
 console.log(findAverageAge(arr));

// function removeItem(arr, age) {
//     const findItem = arr.findIndex((obj) => obj.age === age);

//     if (findItem > 24)
// }

class Users {
    constructor(name, department, id, email){
    this.name = name;
    this.department = department;
    this.id = id;
    this.email = email;
  }
}
class Admin extends Users{
    constructor(name, department, id, email){
        super(name, department, id, email);
        this.name = name;
        this.department = department;
        this.id = id;
        this.email = email;
    }

    deleteUser(){

    }
}

const admin = new Admin()
// admin.deleteUser()

// console.log(admin)


const mostFrequent = (array) => {
    var count = {};
    var compare = 0;
    var numMost;

    for(let i = 0; i < array.length; i++){
        let num = array[i];
        // console.log('num:::', num)
        // console.log('count:::', count)
        if(count[num] === undefined){
            count[num] = 1;
        } else{
            count[num] = count[num] + 1;
        }
        if(count[num] > compare) {
            compare = count[num];
            numMost = num;
        }
    }
    return numMost;
}
console.log(mostFrequent([1,9,0,0,0,9,9,9,9,77,6,0,0,0,0]))
