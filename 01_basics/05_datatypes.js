/*

Primitive:: 7 categories

String , Number, Boolean, Null, Undefined, Symbol, BigInt



Reference type or Non-Premitive::
Array, Objects, Functions


*/

//Is JS static or dynamic type?

//Primitve types
const score = 100
const scoreValue  = 100.3

const isLoggedIn = false 
const outsideTemp = null 
let userEmail; 

const id = Symbol('123')
const anotherId = Symbol('123')

//When u pass something inside symbol() even if there are same valuse it will nevr show that they are equal or same 

console.log(id === anotherId);

const bigNumber = 4389723789234n  //bigint

console.log(typeof bigNumber);

const heros = ["spidey", "daredevil", "batman"]

//Non premitive
let myObj = {
    name: "Hemanta", 
    age: 20
}

const myFunction = function(){
    console.log("Hello World");
    
}

console.log(typeof myFunction); //Function (it is object function)





