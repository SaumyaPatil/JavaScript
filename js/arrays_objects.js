
//reference types, objects, arrays and builtin methods, diff between ref and primitive types, heap and stack memory, foreach, forof, forin, etc
//utilising functions with arrays
//primitive and reference types

//reference types - objects, arrays, functions
// - size is not fixed
// - primitive data type - size is fixed
// In js, program is allocated memory of two kinds, one is stack and other is heap
// Objects or reference types are created on heap memory, 
// Primitive types occupy stack memory
//let arr[] = {1, 2, 3}; //This stores reference to the data in heap memory
//Objects - collection of key value pairs

let obj = {
    name: "Saumya",
    "full name": "Saumya Patil",
    age: 25,
    weight: 70,
    height: "5.7",
    greet: function(){
        console.log("Hello ji kese ho saare!");
    }
};

console.log(obj);
obj.greet();
console.log(typeof(obj));

//Reference is copied and not a new object is created. Here in stack memory there are two variables that are referring to same location in heap memory, this is shallow copy
let obj2 = obj;
//interview ques - shallow copy and deep copy
//array - collection of items (items can be number boolean string etc)
//creating array - array literal and array constructor
let arr = [1, 2, 3, 4, 5];
console.log(arr);

let brr = new Array('love', 1, true);
console.log(brr);

console.log(typeof(arr));
console.log(typeof(brr));

//access 
console.log(brr[0]);

// builtin methods - 
// push - insert at end
// pop - remove from end
// shift - removes first element
// unshift - add first element
// slice - new part (shallow copy)
// splice - content change (insert, replace, remove)
// map
// filter
// reduce
// sort
// indexOf
// find

brr.push("Babbar");
brr.pop();

brr.shift();
brr.unshift("Love Babbar");
console.log(brr);

console.log(brr.slice(2, 4));
console.log(brr);

brr.splice(1, 2, 'Saumya');
//1 - index, 2 - no of elements to be removed, 'Saumya' - to be inserted

//map - to process set of existing values or run some function with that value

// let crr = [10, 20, 30];
// let ansArray = crr.map((number) => {
//     return number*number;
// })

// crr.map((number, index) => {
//     console.log(number);
//     console.log(index);
// })

// console.log(ansArray);

let arr2 = [1, 2, 3, 4, 5];
let evenArray = arr2.filter((number) =>{

    return number%2;

    // if(number % 2 == 0) return true;
    // else return false;
})

console.log(evenArray);

let arr3 = [1, 2, "Saumya", true, "Siddhi", "Suraj"];
let ansArray3 = arr3.filter((ele)=>{
    return typeof(ele) == 'string';
})

console.log(ansArray3);

//Lets say you have a complex calculation to perform or any mathematical operation on a set of values, you can use reduce method
let array = [10, 20, 30, 40];
let ans = array.reduce((acc, curr) =>{
    return acc+curr;
}, 0);

//acc -> initialised (if not then it is init with first value of array and curr with second value)
//curr -> it iterates through the array
//Whatever you return from the function is assigned to acc

let array3 = [2, 5, 8, 3, 1];
array3.sort();
//HW : How to do sort in descending order
console.log(array3);
console.log(arr.indexOf(9));
//find method

let length = array3.length;
console.log(length);

for(let index = 0; index<length; index++){
    console.log(arr[index]);
}

arr.forEach((value, index) =>{
    console.log("Number: ", value, "Index: ", index);
})

//To iterate on enumarable property of object
let object = {
    name: "Saumya",
    age: 22,
    weight: 70,
    height: 5.7,
    greet: function(){
        console.log("Hello ji kaise ho!");
    }
};

for(let key in object){
    console.log(key, " ", object[key]);
}

//for of loop is used to iterate on iterable objects like arrays, strings, etc.
let array4 = [10, 20, 30, 40];

for(let key of array4){
    console.log(key);
}

let fullName = "Saumya";
for(let value of fullName){
    console.log(value);
}

//Arrays with functions
let array5 = [10, 20, 30, 40, 50];
function getSum(array5){
    let sum = 0;
    array5.forEach((value)=>{
        sum += value;
    })
    return sum;
}

let totalSum = getSum(array5);
console.log(totalSum);
