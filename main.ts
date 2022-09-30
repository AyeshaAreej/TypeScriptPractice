export {}
let message="Welcome Back";
console.log(message);

// Variable Types

let isBeginner : boolean=true;
let total:number;  
total=1;
let name:string='Ayesha';

// Template Literal-Multiple lines with embedded expressions
let sentence:string=`My name is ${name}
I am learning TypeScript and it is pretty good`
console.log(sentence)


// Two other type which are subtypes of other types
let n: null=null;
let u:undefined=undefined;

// Arrays 2 ways to declare
let list1:number[]=[1,2,3];
let list2:  Array<string>=['Ayesha','Areej'];
console.log(list1);
console.log(list2);

// Array of multiple Types -Here order need to be same
let person1:[string,number]=['Ayesha',23];
console.log(person1);

// Enumeration //we can assign a enum value 
enum Color{Red=5, Green, Blue};
let c: Color=Color.Green;
console.log(c)

// Any type 
let randomValue:any=10;
randomValue=true;
randomValue='Ayesha';

// Unknown type- any value is assignable to type unknown (we cant access any property of unknown type and construct or call them )
let myVariable:unknown='ayesha';
// console.log(myVariable.name); this will throw error as we cant access property of type unknown unlike type any

//Type Assertion is similar to type casting
// We are saying here that treat myVariable as string anf apply uppercase method 
 console.log((myVariable as string).toUpperCase()); 

//User defined type guard Function to check whether an object has a name property or not 
 function hasName(obj:any):obj is {name : string}{
    return !!obj &&
    typeof obj==="object" &&
    "name" in obj
 }

 let obj={names:'ayesha'}
 if(hasName(obj)){
    console.log(obj.name);
 }
 else{
    console.log("Name Not present")
 }

//  Type Inference no type referencing on variable a
let a;
a=10;
a=true; // Perfectly ok

let multiType:number | boolean | string;
multiType=20;
multiType=true;
multiType='Ayesha';


// Or using any type But above union types restricts to specific types but any don't restrict at all 
// 2nd benefit is intellisense support on union types

let anyType: any;
anyType=20;
anyType=true;


// Functions num2 have default parameter value
function add(num1: number, num2: number=10){
    return num1+num2;
}
console.log(add(2));


// Interface
// This is also possible to make a interface property optional
// propertyName?:type --> way to create optional property
interface Person{
   firstName: string;
   lastName?:string;
} 

// function fullName(person:{firstName:string, lastName:string}){
//    console.log(`${person.firstName} ${person.lastName}`)
// };

// Instead of above method signature do following
function fullName(person:Person){
   console.log(`${person.firstName} ${person.lastName}`)
};

let p={
   firstName:'Ayesha',
   // If lastName is optional then missing lastName will not produce any error
};

// if properties increases the code will become complex 
// So typescript provide interfaces for this solution
// Creating interface of person object and use that interface as a type for a function parameter
fullName(p);

 