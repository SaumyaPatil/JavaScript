//function call stack, how functions are executed and memory management
//hoisting - variable and function hoisting
//TDZ and why are functions called first class citizens

//Hoisting - process which shifts the var and func declarations to the top of their scope
// sayMyName("Saumya Patil");

// function sayMyName(finalName){
//     console.log(finalName);
// }

// console.log(age);
// var age = 20;         //only variable created using var keyword. Undefined will be printed as variable declaration is shifted to the top of the current scope and not variable defination while in case of functions complete logic along with variable declaration is shifted to the top


//using let and const keyword - you have to init before using such variables always
// console.log(weight);
// let weight = 50;

//in case of function expressions - it gives error cannot be used before init
// sayHello();
// let sayHello = function(){
//     console.log("Hello ji kaise ho saare");
// }

//class - instance of class which is a blue print is an object
// blueprint of any property is class and object is the actual building that is constructed
// const object1 = new Human(); // This throws error as class level hoisting is also not possible
// class Human{

// }

//function call stack
//Stack is a data structure (container to store data. Every DS data storage method is different) that stores data in LIFO format

//Functions are pushed inside the call stack and are popped when some value is returned.
//It maintains the order of execution of function calls

//Why are functions called first class citizens?
//Ans. Functions can be assigned to variables, can be used as arguements, can be returned from a function, can be used in DS, can be used as a property.
//2.

// function solve(num){
//     return function(num){
//         return num*num;
//     }
// }
// let ans = solve(5);
// let finalAns = ans(10);
// console.log(finalAns);

//3.
// const arr = [
//     function(a,b){
//         return a+b;
//     },
//     function(a,b){
//         return a-b;
//     },
//     function(a,b){
//         return a*b;
//     },
// ];

// let first = arr[0];
// console.log(first(3,4));

//hoisting on function expression declared using var keyword
console.log(greet);
var greet = function(){
    console.log("Hello Dunia!");
}

