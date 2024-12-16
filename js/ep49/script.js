//object cloning - How to replicate the properties and behaviour of an object into the another object.
//dynamic nature of object
//garbage collector


//Objects are dynamic as their prop can be changed at runtime
// let obj = {
//     age: 12,
//     wt: 68,
//     ht: 180,
// };

// console.log(obj);
// obj.color = "White";
// console.log(obj);

//object cloning
// let a = {
//     val: 12
// }

// let b = a;
//There is shallow copy created here and no new object is created.

//Ways to clone
//1. Using spread operator
let src = {
    age: 12,
    wt: 68,
    ht: 180,
};

let src2 = {
    value: 101,
    name: "Saumya Patil"
}

let dest = {...src};
src.age = 29;

console.log("src: ", src);
console.log("dest: ", dest);

//2. assign method

let desti = Object.assign({}, src, src2);

console.log("src: ", src);
console.log("desti: ", desti);

//iteration - you can apply for loop on object and clone the properties one by one as we know that objects are dynamic in nature and can be modified at runtime
let destin = {};
//cloning using iteration
for(let key in src){
    let newKey = key;
    let newValue = src[key];
    //insert newKey and newValue in destin and create a clone
    destin[newKey] = newValue;
}

//JS - GC

//It is a utility or a tool that primarily focuses on freeing memory that is no longer in use to increase performace of the application and reduce chances of memoroy leaks.
//memory leak - that is supposed to be free
//We have no control on GC and it always runs in background.