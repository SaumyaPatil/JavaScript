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

const users1 = {
    firstName : "Saumya",
    age : "22"
}

console.log(users1["firstName"]);

//Q3.
const allUsers = [
{
    firstName: "Saumya",
    gender: "female"
},
{
    firstName: "Siddhi",
    gender: "female"
},
{
    firstName: "Suraj",
    gender: "male"
}]

for(let i=0; i<allUsers.length; i++){
    if(allUsers[i]["gender"] == "female")console.log(allUsers[i]["firstName"]);
}

//person["name"] is same as person.name but dont write name without quotes as it will then find name variable and replace it with the string stored.
//person[name] is passed by reference or value???????????

//Q4. Write programme to reverse elements of the array

//functions
function sum(a, b){
    return a+b;
}

console.log(sum(1, 2));
//Functions are reusable code/scope limited logic that other people can simply call rather than writing the same logic again.


//callback 
//Condition 1
/* 
function sum(num1, num2){
    let result = num1 + num2;
    return result;
}

function displayResult(data){
    console.log("The result of the sum is " + data);
}

function displayResultPassive(data){
    console.log("The sum's result is " + data);
}

//You are only allowed to call one function after this
//How will you display result after this
const answer = sum(1, 2);
displayResult(answer);
*/

//Condition 2
/* 
function sum(num1, num2){
    let result = num1 + num2;
    displayResult(result);
}

function displayResult(data){
    console.log("The result of the sum is " + data);
}

function displayResultPassive(data){
    console.log("The sum's result is " + data);
}

//You are only allowed to call one function after this
//How will you display result after this
const answer = sum(1, 2);
*/

//update the code base in such a way that you just have to do one function call and it will call either displayResultPassive or displayResult function as per arguements
//Condition 3
//Here I can simply change what function should get called and pass it as arguement and that will get called
function sum(num1, num2, fnToCall){
    let result = num1 + num2;
    fnToCall(result);
}

function displayResult(data){
    console.log("The result of the sum is " + data);
}

function displayResultPassive(data){
    console.log("The sum's result is " + data);
}

//You are only allowed to call one function after this
//How will you display result after this
const answer = sum(1, 2, displayResult);

//State 1
/*
function calculateArithmetic(a, b, type){
    if(type == "sum"){
        const value = sum(a, b);
        return value;
    }

    if(type == "minus"){
        const value = sub(a, b);
        return value;
    }
}

function sum(a, b){
    return a+b;
}

function sub(a, b){
    return a-b;
}

const value = calculateArithmetic(1, 2, "sum");
*/

//Twerk the code in such a way that you dont have to worry about
function calculateArithmetic(a, b, arithmeticFunction){
    if(type == "sum"){
        const value = sum(a, b);
        return value;
    }

    if(type == "minus"){
        const value = sub(a, b);
        return value;
    }
}

function sum(a, b){
    return a+b;
}

function sub(a, b){
    return a-b;
}

//Here the name of the function changes but body remains same.
const value = calculateArithmetic(1, 2, arithmeticFunction);

//What does single thread non blocking means -
/* 
    Thread is OS concept which means the code that is running is called thread.
*/

//What is non blocking -
/* 
    If there are async calls happening i.e. expensive network or file system call so it just differs the call and doesnt block the thread.
*/

//We recieve response from server in form of a string which is json format. JSON is a class that has two methods parse and stringify that lets
//use convert the recieved input to object or to send response in string format using parse method. 

//Mathematical functions of Math class
//we access it like JSON.parse() or JSON.stringify(). We can think of it as class and these as static methods of that class

//Object class methods, manip over objects