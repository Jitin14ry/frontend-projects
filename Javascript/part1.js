// 1.  VARIABLES

const accountId = 144553;
let accountEmail = "hitesh@google.com";
var accountPassword = "12345";
accountCity = "Jaipur"; // Varible can be declared also like this , but we can not use this as much .//
let accountState; //This is undefined so in output we simplt get undefined//

/*
In javascript we can we declare constant with const and varbile can be by two types the one is let and other is var .
And mostly we use let .
Prefer not to use var
because of issue in block scope and functional scope

accountId = 2 --> not allowed Because constant can not be changed
 
*/

accountEmail = "hc@hc.com";
// accountPass;
word = "21212121";
accountCity = "Bengaluru";

// console.log(accountId);
// console.log(accountCity);

// console.table([accountId, accountEmail, accountCity, accountPassword]);

// ---------------------------------------------------------------------------------------------------------------------------------------

// 2. DATATYPES

("use strict"); // treat all JS code as newer version

// alert( 3 + 3) // we are using nodejs, not browser

// console.log(3
//     +
//      3) // code readability should be high

// console.log("Hitesh")

let name = "hitesh";
let age = 18;
let isLoggedIn = false;
let state;

// datatypes

// number => 2 to power 53
// bigint
// string => ""
// boolean => true/false
// null => standalone value
// undefined =>
// symbol => unique

// object

// console.log(typeof undefined); // undefined
// console.log(typeof age);
// console.log(typeof null); // object

// -------------------------------------------------------------------------------------------------------------------------------------

// 3. Conversion of datatypes

/*    let score = 45  --> This is a number now 
    let score = "45" --> This is a string now
    
    console.log(typeof score);

    now we can convert the type of score

    let valueInNumber = Number(score) --> this converts anything to number
    console.log(typeof score)  --> now the type of score is number whether there is 45 or 45abc

    ===========================================================

    let value=1 --> here 1 converts to boolean then answer is true
    let value="" --> here the value will pe false
    and if
    let value="Jitin"  --> this gives true

    let booleanValue = Boolean(value)

    console.log(booleanValue);

    WE CAN ALSO CONVERTS TO STRING BY USING STRING IN PLACE OF NUMBER AND BOOLEAN

*/

// -------------------------------------------------------------------------------------------------------------------------------------

/*
kis tarah se data ko memory me rakha jata h aur access kia jata h us basis pe data ka 2 categorization the first one is primitive and
non-primitive

primitive - call by value
non-primitive - call by reference


primitive - 7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n

symbol ka type of symbol hi aata h

// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh", 
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

non-peremtive ka output object aata h

type of value                      Result 

undefined                           undefined
null                                object
boolean                             boolean
number                              number 
string                              string

stack (primitive)  - jitne vi primitive values hote h vo jaate h stack ke andr aur stack ke andr hr cheez ki ek copy hi milti h    
 , heap (non-primitive) - jitne vi non-primitive hote h vo jate h heap ke andr aur heap ke andr reference milta h

*/

// -------------------------------------------------------------------------------------------------------------------------------------

/*
const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value");   ise hum jyda use nhi krte h

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); is type se likhte h ise jyda use krte h
 
const gameName = new String('hitesh-hc-com')

// console.log(gameName[0]);   this gives output h 
// console.log(gameName.__proto__);     

// console.log(gameName.length);        this gives the length of the gameName variable
// console.log(gameName.toUpperCase());     this make gameName value capital
console.log(gameName.charAt(2));        this gives answer t 
console.log(gameName.indexOf('t'));     this gives answer 2

const newString = gameName.substring(0, 4)      here we dividing the gameName string into substring from 0 to 4
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim()); ye spaces ko trim kr deta h jo hitesh ke aage peche h 

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))        %20 ko replace kra - se

console.log(url.includes('sundar'))             this gives true or false if the word is there or not 

console.log(gameName.split('-'));        ya se split ka use kia word ko array bnane ke liye or - ke base pe split kia  

*/

// -------------------------------------------------------------------------------------------------------------------------------------

// github pe pda h sara code

// FUNCTION

// function sayMyName(){
//     console.log("H");
//     console.log("I");
//     console.log("T");
//     console.log("E");
//     console.log("S");
//     console.log("H");
// }

// sayMyName // ye ho gya function ka reference

// sayMyName() // ye ho gya function ka execution

function addTwoNumbers(number1, number2) {
  // yha pe num1 aur num2 ko parameter khete h

  // let result = number1 + number2
  // return result
  console.log(`the sum of ${number1} and ${number2} is `);
  return number1 + number2;
}

// const result = addTwoNumbers(3, 5)      //  yha pe 3 5 ko khete h argument

// console.log("Result: ", result);

function loginUserMessage(username = "sam") {
  if (!username) {
    console.log("PLease enter a username");
    return;
  }
  return `${username} just logged in`;
}

// console.log(loginUserMessage())

// -----------------------------------------------------------------------------------------------------

function addone(num) {
  return num + 1;
}

// addone(5)

// console.log(addone(5))

const user = {
  username: "Jitin",
  price: 999,
  chai: function () {
    // console.log(this.username);
  },
};

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// user.chai()

// const addnumbers = (num1 , num2) => {
//     return num1 + num2;
//     // add = num1 + num2 ;
//     // console.log(add)
// }

// const addnumbers = (num1 , num2) => (num1 + num2)           // also be written like this

const addnumbers = (num1, num2) => ({ username: "hitesh" }); // iske andr object curly braces me likhte h

// addnumbers( 5 , 6)
// console.log(addnumbers( 5 , 6));

// Immediately Invoked Function Expressions (IIFE)

// Sometimes pollution by gobal scope can create problem so to remove the declaration of global scope we use iife

// (function chai(){
//     // named IIFE
//     console.log(`DB CONNECTED`);
// })();       // here semi-colon is used to end this code otherwise it will give error.

// ( (name) => {
//     console.log(`DB CONNECTED TWO ${name}`);
// } )('hitesh')

let myarray = [10, 20, 30, 40];

for (let value of myarray) {
  value += 5;
  // console.log(value);
}

const greetings = "Hello world!";
for (const greet of greetings) {
  // console.log(`Each char is ${greet}`)
  if (greet == " ") {
    break;
  }
}

const myObject = {
  game1: "NFS",
  game2: "Spiderman",
  game3: "vice city",
};

for (const value in myObject) {
  // console.log(value);
}

const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const num = myNumers.map((number) => {
  return number + 10;
});

// console.log(num);

const shoppingCart = [
  {
    itemName: "js course",
    price: 2999,
  },
  {
    itemName: "py course",
    price: 999,
  },
  {
    itemName: "mobile dev course",
    price: 5999,
  },
  {
    itemName: "data science course",
    price: 12999,
  },
];

const pricetopay = shoppingCart.reduce((acc, item) => {return acc + item.price}, 0);

console.log(pricetopay);

/*

node Javascript/part1.js

*/
