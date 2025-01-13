console.log("Hello World!");

var a = 1;
a=2;
console.log(a); 

let b = 1;
b=2;
console.log(b);

const c = 4;
console.log(c); //Value cant be changed. It is for safety concerns. If we dont want its value to be changed in the future, it throws error.

let firstName = "Saumya";
let age = 22;
let isMarried = false;

console.log("This person's name is " + firstName + " and her age is " + age);

if(isMarried == true){
    console.log("Saumya is married.");
}else{
    console.log("Saumya is not married.");
}

//loops
let ans = 0;
for(let i=0; i<=100; i++){
    ans = ans+i;
}

//Q1.
let givenName = "Saumya";
let lastName = "Patil";
console.log("Heyy, How are you! " + givenName + lastName);
let gender = "female";

if(gender == "female"){
    console.log("Hiee how are you dear girl " + givenName);
}else{
    console.log("Heyy how are you dear boy " + givenName);
}

let personArray = ["Saumya", "Siddhi", "Parul"];
console.log(personArray[0]);
console.log(personArray[1]);
console.log(personArray[2]);

const ages = [21, 22, 23, 24, 25];
const numberOfPeople = ages.length;
for(let i=0; i<numberOfPeople; i++){
    if(ages[i]%2 == 0)console.log(ages[i]);
}


const givenArrayToMe = [21, 2, 29, 872, 29];
const biggestNumber = givenArrayToMe[0];
for(let i=1; i<givenArrayToMe.length; i++){
    if(givenArrayToMe[i]>biggestNumber)biggestNumber=givenArrayToMe[i];
}

console.log(biggestNumber);

