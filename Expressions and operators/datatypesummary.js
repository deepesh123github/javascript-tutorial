//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "Deepesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

// STACK (PRIMITIVE ) , HEAP (NON-PRIMITIVE)

let  myyoutubename = "deepeshsarathedotcom" 

let  anothername = myyoutubename  
 anothername = "chaisutta" 

 console.log(myyoutubename) ;
 console.log(anothername);

 let userOne =  {
    email: "user@google.com",
    upi: "user@byl"
 }

 let userTwo= userOne 
userTwo.email = "deepesh@google.com"   // we can change the value of email in userone

console.log(userOne.email) ;
console.log(userTwo.email) ;

