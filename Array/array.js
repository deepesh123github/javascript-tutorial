// ARRAY IN JAVASCRIPT

const myarr = [0, 1 ,2 ,3 ,4 ,5]  
const myHeros = ["bharat" , "nilofour"] 

const myarr2 = new Array(1 , 2, 3, 4)
console.log(myarr[1]) ;

//    Accessing Array Elements 
const arrr = ['hola' , "hello" , "buddy" , "hello everyone"];
console.log(arrr) ;
let wishing = arrr[3];
console.log(wishing) ;
// output : hello everyone

//    Changing an Array Elements
arrr[2] = "yobro";
console.log(arrr[2]);
//  output : yobro 

// Converting an Array to a String
const arrr1 = ["caddle", "cake" , "pestry" , "creamroll"] ;
let output = arrr1.toString() ;
console.log(output);
// output : caddle,cake,pestry,creamroll


/***********------JavaScript Array Methods ------*******/

/* JavaScript Array length
The length property returns the length (size) of an array:
*/
const fruits = ["apple" , "mango" , "grapes" , "orange" , "banana"] ;
let size = fruits.length;
console.log(size) ;
//  output : 5

/*  toString()
The JavaScript method toString() converts an array to a string of (comma separated) array values. */

let intostring = fruits.toString() ;
console.log(intostring) ;

/* Popping and Pushing
When you work with arrays, it is easy to remove elements and add new elements.
Popping items out of an array, or pushing items into an array. */

/*  POP Array method 
The pop() method removes the last element from an array:
 The pop() method returns the value that was "popped out": */    

const veg = ["onion" , "patoto" , "tamato" , "bringel" , "cauliflower"];
let  vege = veg.pop() ; //we remove cauliflower
console.log(vege) ;

console.log(veg) ;   

veg.pop() ; // we remove bringel
console.log(veg) ;   

/* Push array method 
The pop() method returns the value that was "popped out":
push array method returns the new array length*/ 

const grocery = ["soap" , "detergent" , "sugar" , "cosmetics"];
console.log(grocery) ;

grocery.push("toothbrush") ;   //push method insert a new element  
console.log(grocery) ;

const items = grocery.push() // return the new array length
console.log(items) ;   // output : 5

/* Array method in shift
The shift() method removes the first array element and "shifts" all other elements to a lower index.
The shift() method returns the value that was "shifted out":
*/  

const bicycleacccessories = ["tier" , "handle" , "brakes" , "chain" , "greece"] ;
console.log(bicycleacccessories); 
bicycleacccessories.shift();
console.log(bicycleacccessories); 
let motorbicyle = bicycleacccessories.shift();    // returns the array   of the first remove element  
console.log(motorbicyle) ;

/*unshift method 
The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:
The unshift() method returns the new array length:
*/
const city  = ["delhi" , "mumbai" , "ahmadabed" , "bangaluru"] ;
city.unshift("Indore" , "Bhopal");

console.log(city);

let citi =  city.unshift("jaipur" );
console.log(citi);    // return the new array length 

/*join method in array
The join() method of Array instances creates and returns a new string by concatenating all of the elements in this array, separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.
*/ 

const Elements = ["fire" , "air" , "water"];

console.log(Elements.join());

console.log(Elements.join(' ')) ;

console.log(Elements.join('-')) ;


/*Delete array mehtod
Warning !
Array elements can be deleted using the JavaScript operator delete.
Using delete leaves undefined holes in the array.
Use pop() or shift() instead.*/ 

const fruit = ["Banana", "Orange", "Apple", "Mango"];
let mkm = delete fruit[0] ;
console.log(mkm) ;


/*  Concat array method 
The concat() method of Array instances is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
*/ 
const array1  =  [,1,2,3,4];
console.log("array 1");
console.log(array1) ;

const array2  =  [5,6,7,8] ;
console.log("array 2");
console.log(array2) ;

const array3 = array1.concat(array2) ; // concat merge two array (array 1 & array 2)
console.log("array 3");
console.log(array3) ;

// slice , splice
let myarrr = [0,1,2,3,4,5]
console.log("A", myarrr)

const myn1 = myarrr.slice(1,3) 
console.log(myn1) ;
console.log("B" , myarrr);

const myn2 = myarrr.splice(1,3) 
console.log(myn2) ;
console.log("C" , myarrr);
