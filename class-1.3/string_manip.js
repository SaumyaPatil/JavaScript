//Common functions, methods and objects that JS provides -

// Length - Whenever you have a string object, data type or variable in javascript, you can call .length and you will get current length.
//'str' is itself a variable, object or function that gives access to .length
// function getLength(str) {
//     console.log("Original String:", str);
//     console.log("Length:", str.length);
// }
// getLength("Hello World");

//Slice method takes two arguements which is start index and end index. substr method takes start index and second arguement as length of substring needed as output

//replace - replaces a word in a string with given word
//split - It lets you split your string in an array given a delimeter

//trim lets you trim out space in the beginning and at the end in a string and not in between

//Number/Integers


//parseInt() is a global function and I can simply call it anywhere in JS and it converts string to integer
// console.log(parseInt("42"));
// console.log(parseInt("42px"));  //here there shouldnt be gibbrish at the beginning of the string
// console.log(parseInt("3.14"));

//It means the value can have decimal
// console.log(parseFloat("42"));
// console.log(parseFloat("42px"));  
// console.log(parseFloat("3.14"));

//push, pop, unshift, shift - functions to push and pop from end and start respectively in an array
//initArray.concat(secondArray); -> this needs to be stored in some different array 
//How is it different from push, push me second arguement is a number while in concat second arguement is an array

const initArray = [1, 2, 3, 4, 5];
function logThing(str){
    console.log(str);
}

initArray.forEach(logThing); //It takes a function as input which has string as arguement and calls the function for every value of initArray

//Classes let us put a bunch of properties of certain type together. It gives a structure that is reusable and is used in multiple places.

/* 
const dog = {
    name: "Dog",
    legs: 2,
    speaks: "Bhow, bhow"
};

const cat = {
    name: "Cat",
    legs: 2,
    speaks: "Meow, meow"
};
*/

//taking object as arguement and printing
// function printStr(animal){
//     console.log("Animal " + animal["name"] + " " + animal["speaks"]);
// }

// printStr(dog);
// printStr(cat);

class Animal {
    constructor(name, legCount, speaks){
        this.name = name;
        this.legCount = legCount;
        this.speaks = speaks;
    }

    speak(){
        console.log("Hi there " + this.speaks);
    }
}

let dog = new Animal("dog", 4, "bhow bhow");  //create object
let cat = new Animal("cat", 4, "meow meow");

cat.speak(); //call function on object

//Static methods are not associated to the object but to class itself. You can define static methods inside the class.

//In the above class the speak function can be called on the object of the class but not directly on the class. Static methods can be called without instanciating the objects.
