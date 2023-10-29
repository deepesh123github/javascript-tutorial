const name = "deepesh"
const repocount  = 50 

// console.log( name + repocount + "value ") ;

console.log(`hello my name is ${name} and my repo count is ${repocount}`);
/* output :-
 hello my name is deepesh and my repo count is 50
*/

/* Constructor in String 
 Note :- When String is called as a constructor (with new), it creates a String object, which is not a primitive. */
const gameName = new String('deepesh')   
/* output :-
 
*/


console.log(gameName[0]) ;
/* output :-
 d
*/
console.log(gameName.__proto__) ;

/* Length
The length data property of an Array instance represents the number of elements in that array. The value is an unsigned, 32-bit integer that is always numerically greater than the highest index in the array.*/
console.log(gameName.length) ; 
/* output :-
 7
*/

// UPPER CASE
// The toUpperCase() method of String values returns this string converted to uppercase.
let gamer = "hello everyone how are you  i am fine and you"
console.log(gamer.toUpperCase() ) ;
/* output :-
 HELLO EVERYONE HOW ARE YOU  I AM FINE AND YOU
*/

/* LOWER CASE
The toLowerCase() method of String values returns this string converted to lower case. */
let lower =  "HELLO EVERYONE HOW ARE YOU  I AM FINE AND YOU  "
console.log(lower.toLowerCase()) ;  
/* output :-
 hello everyone how are you  i am fine and you  
*/

/*CHARAT()
The charAt() method of String values returns a new string consisting of the single UTF-16 code unit at the given index.
*/
console.log(gameName.charAt(2)) ;
/* output :-
 e
*/

/*INDEXOF()
The indexOf() method of Array instances returns the first index at which a given element can be found in the array, or -1 if it is not present.*/
console.log(gameName.indexOf('h')) ;   
/* output :-
 6
*/

/*TRIM
The trim() method of String values removes whitespace from both ends of this string and returns a new string, without modifying the original string.*/ 
console.log("   Deepesh Sarathe   ")
const surname = '   Deepesh Sarathe  '
console.log(surname.trim()) ; 
/* output :-
 Deepesh Sarathe
*/

/* START TRIM
The trimStart() method of String values removes whitespace from the beginning of this string and returns a new string, without modifying the original string. trimLeft() is an alias of this method. */
console.log(surname.trimStart()); 
/* output :-
 Deepesh Sarathe  
*/

/* END TRIM
The trimEnd() method of String values removes whitespace from the end of this string and returns a new string, without modifying the original string. trimRight() is an alias of this method.*/ 
console.log(surname.trimEnd());
/* output :-
    Deepesh Sarathe
*/
 
/*SLICE
The slice() method of Array instances returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.
*/ 
const Cars = [ 'farrai' , 'mercedes' , 'bentley' , 'Rolls Royace' , 'wagonar'];
console.log(Cars.slice(5));
console.log(Cars.slice(-2));
/* output :-
 (2) ['Rolls Royace', 'wagonar']
0: "Rolls Royace"
1: "wagonar"
length: 2
*/

let text = "Apple,Banana, Kiwi";
console.log(text.slice(-12 , -5)) ;
/* output :-
 Banana,
*/
console.log(text.slice(1,6)) ;
/* output :-
 pple,
*/

/*SUBSTRING
The substring() method of String values returns the part of this string from the start index up to and excluding the end index, or to the end of the string if no end index is supplied.
*/
const letter = "hello godzilla" ;
console.log(letter.substring(1,3));
/* output :-
el 
*/

console.log(letter.substring(2));
/* output :-
 llo godzilla
*/

console.log("what is the difference between slice and substring in javascript ") ;
/*what is the difference between slice and substring in javascript */
/*The substring() method swaps its two arguments if indexStart is greater than indexEnd , meaning that a string is still returned. The slice() method returns an empty string if this is the case*/  
console.log(letter.substring(3,1));
console.log(letter.slice(3,1));
//output 
// el
// 

/* SUBSTR
The substr() method of String values returns a portion of this string, starting at the specified index and extending for a given number of characters afterwards.
*/ 
const str = 'HELLO MOTO';
console.log(str.substr(1, 2)) ;
/* output :-
 EL
*/


/* REPLACE
he replace() method of String values returns a new string with one, some, or all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a function called for each match. If pattern is a string, only the first occurrence will be replaced. The original string is left unchanged.
*/ 

const para = "hello i am deepesh .  deepesh say hello"
console.log(para.replace('hello','hola'));

/* REPLACE ALL
The replaceAll() method of String values returns a new string with all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a function to be called for each match. The original string is left unchanged.
*/ 
console.log(para.replaceAll('hello','hola'));

/* CONCAT
The concat() method of String values concatenates the string arguments to this string and returns a new string.
*/ 
const strr1 = "hola"
const strr2 = "brother"
console.log(strr1.concat(" " , strr2)) ;
console.log(strr2.concat(" " , strr1)) ;

/* PADSTART 
The padStart() method of String values pads this string with another string (multiple times, if needed) until the resulting string reaches the given length. The padding is applied from the start of this string.
*/ 

const str1 = '5';

console.log(str1.padStart(2, '0'));
// Expected output: "05"

const fullNumber = '2034399002125581';
const last4Digits = fullNumber.slice(-4);
const maskedNumber = last4Digits.padStart(fullNumber.length, '*');

console.log(maskedNumber);
// Expected output: "************5581"

/*PADSTART .
The padEnd() method of String values pads this string with a given string (repeated, if needed) so that the resulting string reaches a given length. The padding is applied from the end of this string.
*/

const  halfnumber = '56484356';
console.log(halfnumber.padEnd(20 , '*'));

/*CHARCODE AT
The charCodeAt() method of String values returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index.*/ 
const sentence = 'The quick brown fox jumps over the lazy dog.';

const index = 4;

console.log(`The character code ${sentence.charCodeAt(index)} is equal to ${sentence.charAt(index)}`);
// Expected output: "The character code 113 is equal to q"

/*SPLIT
The split() method of String values takes a pattern and divides this string into an ordered list of substrings by searching for the pattern, puts these substrings into an array, and returns the array.
*/ 
const sent = 'The quick brown fox jumps over the lazy dog.';

const words = sent.split(' ');
console.log(words[3]);
// Expected output: "fox"

const chars = sent.split('');
console.log(chars[8]);
// Expected output: "k"

/* ToString
The toString() returns a number as a string.
*/ 
let num = 15;
let textT= num.toString();
console.log(textT);
// output : 15

// convert  a number to a string , using base 2 (binary) 
console.log("convert  a number to a string , using base 2 (binary) ") ;
let textTT = num.toString(2) ;
console.log(textTT) ;


// convert  a number to a string , using base 8 (OCTAL) 
console.log("convert  a number to a string , using base 8 (OCTAL) ") ;
let textTTT = num.toString(8) ;
console.log(textTTT) ;

// convert  a number to a string , using base 16 (Hexadecimal) ;
console.log("convert  a number to a string , using base 16 (Hexadecimal) ;")
let textTTTT = num.toString(16) ;
console.log(textTTTT) ;
