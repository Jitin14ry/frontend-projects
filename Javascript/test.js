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

console.log(accountId);
console.log(accountCity);

console.table([accountId, accountEmail, accountCity, accountPassword]);

// ---------------------------------------------------------------------------------------------------------------------------------------

// 2. DATATYPES

"use strict"; // treat all JS code as newer version

// alert( 3 + 3) // we are using nodejs, not browser

console.log(3 
    +
     3) // code readability should be high

console.log("Hitesh")


let name = "hitesh"
let age = 18
let isLoggedIn = false
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

console.log(typeof undefined); // undefined
console.log(typeof age);
console.log(typeof null); // object


// ---------------------------------------------------------------------------------------------------------------------------------------













/*

node Javascript/test.js

*/
