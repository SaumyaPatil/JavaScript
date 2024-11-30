var x1 = "123";
var x2 = 123;
console.log(typeof(x1), typeof(x2));
console.log(x1==x2);
console.log(x1===x2);

// == compare value
// === compare value and type

//Function declaration
function Add(a, b){
    return a+b;
}

var add = Add(10, 12);
console.log(add);

//Arrays
let num1 = [1, 2, 3, 4, 5, 6, 7];
num1.push(89);            //push from behind
num1.push("Vikash");      //push from behind      -> this is the speciality of arrays in javascript, any data type can be added
num1.pop();               //delete from behind
num1.shift();             //delete from front
num1.unshift(12);         //add from front
console.log(num1);

// Splice can add, delete or edit, it has 3 parameters index from where elements should be modified, number of elements to be deleted, elements that need to be added or deleted
let num2 = [1, 2, 3, 4, 5, 6, 7];
num2.splice(3, 1, 101, 102);       //add, delete, edit
console.log(num2);

//If you dont want to delete then make the count 0
//Array is a data type but when you do typeof(arr) it gives object. It is weird cause it shouldnt then say that array is a data type itself.

var salary = [10000, 20000, 30000, 100000, 15000];

let bonusSalary = salary.map(function(ele){           //data display
    return ele+5000;
})

//We cannot redeclare the array salary but we can reinit or redefine it.
salary = salary.map(function(ele){
    return ele+5000;
})

console.log(bonusSalary);
console.log(salary);
//Do we need to define the size of array?

//What if I do 'var' salay and reinit it. What about scopes of let(block, script, global) and var in globally
//Study about let const and var deeply.

//Filter function
let salary1 = [12, 13, 8, 10, 121, 89, 12, 89, 19];
let newSalary = salary.filter(function(ele){
    return ele%2==0;
})

console.log(newSalary);

let salary2 = [12, 13, 8, 10, 121, 89, 12, 19];

let names = ["ram", "shyam", "rahul", "mohan", "rishi"];
// console.log(names.sort());
// console.log(names.sort().reverse());              //To reverse in descending order

// //ascending order :-
// console.log(salary2.sort(function(a, b){return a-b}));

//descending order :-
// console.log(salary2.sort(function(a, b){return b-a}));

//How is this possible?
// let salary3 = [20, 30, 10, 60, 80, 90];         
// salary3.sort();
// console.log(salary3);

var num3 = [12, 22, 122, 45, 12, 90, 122, 899];
var num4 = [10, 11, 12, 13, 14, 16];
var num5 = num3.concat(num4);
console.log(num5);

var num6 = num3.slice(2);
console.log(num6);

var arr = [1, 2, 3, 4, 5, 5, 6, 6, 7];
console.log(arr.indexOf(5));
console.log(arr.lastIndexOf(6));
console.log(arr.join("-"));

//how about find function, is it not supported by some browsers?
