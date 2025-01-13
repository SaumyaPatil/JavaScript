let firstName = "Saumya";
let age = 22;
let isMarried = false;

console.log("This person's age is " + firstName + " and their age is " + age);
console.log("This person's name is ");
console.log(firstName);

if(age>18){
    console.log("She's married");
}else console.log("She isnt married");

let ans = 0;
for(let i=0; i<=100; i++){
    ans = ans+i;
}

console.log(ans);

const ages = [21, 22, 23, 24, 25];
const numberOfPeople = ages.length;
for(let i=0; i<numberOfPeople; i++){
    if(ages[i]%2 == 0)console.log(ages[i]);
}

//objects
const allusersArray = [
    {
        firstName: "Saumya",
        gender: "Female",
        metadata: {
            age: 22,
            address: "Pune"
        }
    },

    {
        firstName: "Saumya",
        gender: "Female",
        metadata: {
            age: 22,
            address: "Pune"
        }
    },

    {
        firstName: "Saumya",
        gender: "Female",
        metadata: {
            age: 22,
            address: "Pune"
        }
    },

    {
        firstName: "Saumya",
        gender: "Female",
        metadata: {
            age: 22,
            address: "Pune"
        }
    }
]

for(let i=0; i<allusersArray.length; i++){
    if(allusersArray[i]["metadata"]["age"] == "female"){
        console.log(allusersArray[i]["firstName"]);
    }
}

function sum(a, b){
    //do things with input and return an output
    const sumValue = a+b;
    return sumValue;
}

const value = sum(3, 7);
const value2 = sum(6, 10);
console.log(value);

const name = "Harkirat";
users[name];             //this is users[Harkirat]
users["Harkirat"];       //both these are different

function calculateArithmatic(a, b, arithmaticFinalFunction){
    const ans = arithmaticFinalFunction(a, b);
    return ans;
}

function sum(a, b){
    return a+b;
}

const value3 = calculateArithmatic(1, 2, sum);
console.log(value3);

function alien(){
    console.log("Hello World!");
}

function greetAlien(){
    console.log("Hello Alien");
}
setTimeout(greetAlien, 3*1000);

const value4 = "Saumya Patil";
let answer = value4.slice(0, 7);   //returns slice of the string
console.log(answer);
//indexOf -> returns first index of the string present inside the string 
//lastIndexOf -> returns index of last string present inside the string

//Replace function replaces and returns the new string that needs to be stored in some variable. 
const str = "hello world";
console.log(str.replace("world", "javascript"));

const value5 = "Hi, my name is Saumya!";
const words = value5.split(" ");    //It splits the string into array based on given delimiter
console.log(words); 

//trim function trims out the extra spaces at the beginning and at the end and not in between
const givenString = "           Saumya Patil         ";
console.log(givenString.trim());

//toUpperCase and toLowerCase converts every char to upper case and lower case respectively

//parseInt function converts to integer if any of the value starts from integer.
//parseFloat function converts to float value

//push, pop applies to the back of the array while shift unshift applies to the front of the array

const initialArray = [1, 2, 3];
const concatArray = [4, 5, 6];
console.log(initialArray.concat(concatArray));

function logThing(str){
    console.log(str);
}

initialArray.forEach(logThing);
//It is similar to for loop but it expects a function as an arguement and passes a value to it which is taken from the array and runs that function.

//callback means passing a function as an arguement - map, filter, find, sort

const dog = {
    name: "Dog",
    legCount: 4,
    speaks: "bhow bhow",
}

const cat = {
    name: "Cat",
    legCount: 4,
    speaks: "meow meow",
}

//class - gives structure of something that is reusable 
class Animal {
    constructor(name){
        this.name = name;
    }
    speak(){
        console.log(`${this.name} makes a noise`);
    }
}

