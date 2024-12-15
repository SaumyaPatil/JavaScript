//reference types, objects, arrays, builtin methods of arrays
//difference between reference and primitive types, stack and heap memory
//foreach, forin, forof loops
//utilising functions with arrays

//ref types - objects, arrays, functions
//size is not fixed here
//primitive types are stored in stack memory and ref types are created on heap memory
//The ref is in stack that points to a location in heap memory
//object - collection of key value pairs

// let obj = {
//     name: "Saumya",
//     age : "21",
//     greet : function(){
//         console.log("Hello!")
//     },
//     //When theres space between the name of key, it is put in quotes.
//     "full name" : "Saumya Patil"
// };

// console.log(obj);
// obj.greet();
// console.log(typeof(obj));

// let obj2 = obj; //this creates shallow copy of obj. A reference is created.


//array - collection of items
//syntax is created using array literal and constructor

//array creation
// let arr = [1, 2, 3, 4];
// console.log(arr);

//array constructor
// let brr = new Array("Saumya", 1, true);
// console.log(brr);

// console.log(typeof(brr));

// console.log(arr[0]);
// console.log(arr[1]);

//builtin methods - 
// push method - inserts element at the right most side
// brr.push("Patil");

//pop
// brr.pop();

//shift - removes first element
// brr.shift();

//unshift - adds at the right most side
// brr.unshift("Love Babbar");

//slice - new part shallow copy
// brr.push(40);
// brr.push(50);
// brr.push(70);
// console.log(brr.slice(2, 4));

//splice - change content, removes, replaces, inserts
// brr.splice(1, 2, 'Kunal');

//-> starting index, removes no of elements starting from that position, inserting new value from at the position

// let arr = [10, 20, 30];

//map - process on existing values
// let ans = arr.map((ele) => ele*ele);
// console.log(ans);

// arr.map((ele, index)=>console.log(ele+1 + " " + index));

//filter - whether to include or exclude an element in the array
// let evenArray = arr.filter((ele)=>{
//     // if(ele%2 === 0)return true;
//     // else return false;

//     return ele%2 === 0;
// })

// console.log(evenArray);

// let givenArray = [1, 2, "Saumya", true, null];
// let ans = givenArray.filter((ele)=>{
//     return typeof(ele) == 'string';
// })

// console.log(ans);

//reduce - You can perform some mathematical operation or calc and obtain a single output value at the end.
// let givenArray = [10, 20, 30, 40];

//there are two parameters of reduce function, acc and curr, acc when init, curr takes first value otherwise acc when not init, it takes first value and curr takes second value
// let sum = givenArray.reduce((acc, curr) =>{
//     return acc+curr;
// }, 0);

// console.log(sum);

// givenArray.sort();
// console.log(givenArray);

//HW : How to sort in descending order
// console.log(givenArray.indexOf(9));

//find method

//for each loop
// let arr = [10, 20, 30];
// arr.forEach((value, index)=>{
//     console.log(value, index);
// })

// let length = arr.length;

//for in loop - to iterate on the properties of enumerable properties of object
// for(let key in obj){
//     console.log(key, obj[key]);
// }

//for of loop - to iterate over iterable objects like arrays, strings, etc.
// for(let value of arr){
//     console.log(value);
// }

// let fullName = "Saumya";
// for(let val of fullName){
//     console.log(val);
// }

//arrays with functions
let arr = [10, 20, 30, 40, 50];
function getSum(arr){
    let sum=0;
    for(let i=0; i<arr.length; i++){
        sum +=arr[i];
    }
    return sum;
}
console.log(getSum(arr));

//dev challenge section on code help site will help you improve more on js
