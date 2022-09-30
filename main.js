"use strict";
exports.__esModule = true;
var message = "Welcome Back";
console.log(message);
// Variable Types
var isBeginner = true;
var total;
total = 1;
var name = 'Ayesha';
// Template Literal-Multiple lines with embedded expressions
var sentence = "My name is ".concat(name, "\nI am learning TypeScript and it is pretty good");
console.log(sentence);
// Two other type which are subtypes of other types
var n = null;
var u = undefined;
// Arrays 2 ways to declare
var list1 = [1, 2, 3];
var list2 = ['Ayesha', 'Areej'];
console.log(list1);
console.log(list2);
// Array of multiple Types -Here order need to be same
var person1 = ['Ayesha', 23];
console.log(person1);
// Enumeration //we can assign a enum value 
var Color;
(function (Color) {
    Color[Color["Red"] = 5] = "Red";
    Color[Color["Green"] = 6] = "Green";
    Color[Color["Blue"] = 7] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green;
console.log(c);
// Any type 
var randomValue = 10;
randomValue = true;
randomValue = 'Ayesha';
// Unknown type- any value is assignable to type unknown (we cant access any property of unknown type and construct or call them )
var myVariable = 'ayesha';
// console.log(myVariable.name); this will throw error as we cant access property of type unknown unlike type any
//Type Assertion is similar to type casting
// We are saying here that treat myVariable as string anf apply uppercase method 
console.log(myVariable.toUpperCase());
//User defined type guard Function to check whether an object has a name property or not 
function hasName(obj) {
    return !!obj &&
        typeof obj === "object" &&
        "name" in obj;
}
var obj = { names: 'ayesha' };
if (hasName(obj)) {
    console.log(obj.name);
}
else {
    console.log("Name Not present");
}
//  Type Inference no type referencing on variable a
var a;
a = 10;
a = true; // Perfectly ok
var multiType;
multiType = 20;
multiType = true;
multiType = 'Ayesha';
// Or using any type But above union types restricts to specific types but any don't restrict at all 
// 2nd benefit is intellisense support on union types
var anyType;
anyType = 20;
anyType = true;
