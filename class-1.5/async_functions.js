
// //This is a sync functions
// function sum(n){
//     let ans=0;
//     for(let i=1; i<=n; i++){
//         ans += i;
//     }
//     return ans;
// }

// console.log(sum(5));

// //setTimeout is a global JS function that is async. JS does other tasks by the time. It is a web API provided by browser to us.
// //This is async function
// function findSum(n){
//     let ans=0;
//     for(let i=0; i<n; i++){
//         ans += i;
//     }
//     return ans;
// }

// function findSumTill100(){
//     console.log(findSum(100));
// }

// setTimeout(findSumTill100, 1000);
// console.log("Hello World!");

// //How can you make setTimeout sync
// function findSum(n){
//     let ans=0;
//     for(let i=0; i<n; i++){
//         ans += i;
//     }
//     return ans;
// }

// function findSumTill100(){
//     console.log(findSum(100));
// }

// function syncSleep(){
//     let a=0;
//     for(let i=0; i<10000000; i++){
//         a++;
//     }
// }

//Either you call it this way and make it sync or
// syncSleep();
// findSumTill100();

//Call it this way
// setTimeout(findSumTill100, 1000);  //Its like delegating the task to Kamla didi ki bhai after 1 second remind me to call this function and proceeding further.
// //The code is run by JS thread itself but it delegates the task to Kamla didi of maintaining 1 second clock.
// console.log("Hello World!");

//If you are using nodejs and running js file locally, it can read other files text file, mp4 file, JSON file.
//You cannot read a file immediately. Nodejs process is trying to access JS or txt file, it might take time other processes might be going on.    

//Fetch is used when we are trying to get data from some server. To fetch data from API endpoint

// const fs = require("fs");

// //The control will reach here only after all the async operations are over.
// fs.readFile("a.txt", "utf-8", function(err, data){
//     console.log(data);
// })

// console.log("Hii there");
// let a = 0;
// for(let i=0; i<1000000000; i++){
//     a++;
// }
// console.log(a);
// console.log("Hii there 2");
// //Your thread is busy somewhere, even if the callback is resolved, even if ideally the control should reach to callback, it will execute till its resolved. Then the control will reach the pending callback.

// //JS arch that lets us achieve the async nature. How JS keeps track of these callbacks, async functions, keeping track of what to run next

// //Web APIs - The common functions that are needed and websites have introduced it. setTimeout is part of browser and its a web API

// //Event loop checks if theres something in the callback queue, if yes then it takes and puts it in the callstack if empty
// //Callback queue maintains the sequence of the callback functions to be executed. Functions inside it enter in the order in which they are executed first.

// //Callbacks only make sense in async functions, they dont in sync functions
// //We passed the callback function in the code of square and cube in previous video, its only benefit was removing code redundancy, but it can be done without callback also.

// //Promises are syntactical sugar that make the code slightly more readable. Under the hood it will use callbacks, callstack, eventloop and queues

// //Untill now, we have used other people's async functions, how can we create an async function of our own. 

// //Its just a wrapper over the JS provided async function, which is fine. Usually all async functions you will write will be on top of JS provided async functions like setTimeout or fs. readFile

// const fs = require('fs');

// function kiratsReadFile(cb){
//     fs.readFile('a.txt', 'utf-8', function(err, data){
//         cb(data);
//     });
// }

// //callback function to call
// function onDone(data){
//     console.log(data);
// }

// kiratsReadFile(onDone);

//Why we introduced promise is to get rid of callbacks, cause they may cause callback hell.
//Its like Simmy is promising Timmy that when the resolve method is called, you will get the data

// const fs = require('fs');
// const { resolve } = require('path');

// function kiratsReadFile(){
//     return new Promise(function(resolve){  //This is the instance of object class
//         fs.readFile("a.txt", "utf-8", function(err, data){
//             resolve(data);
//         })
//     })
// }

// function onDone(data){       //The promise is returned synchroniously
//     console.log(data)
// }

// kiratsReadFile().then(onDone);

// //This is init a class and we have to give first arguement as function
// //pending and resolved are the two states of promises
// var d = new Promise(function(onDone){
//     setTimeout(function(){
//         resolve("foo");
//     }, 1000)
// });

// function callback(){
//     console.log(d);
// }

// console.log(d);
// d.then(callback);

//Inside the promise, theres some async logic written here.

//async await
function kiratsAsyncFunction(){
    let p = new Promise(function(resolve){
        //Do some async logic here
        setTimeout(function(){
            resolve("hii there!");
        }, 3000)
    });
    return p;
}

async function main(){
    //no callbacks, no .then syntax and it will wait in the function and below lines of the function wont get executed
    let value = await kiratsAsyncFunction();
    console.log("Hii there1");
    console.log(value);
}

main();
console.log("My name is Saumya");
for(let i=0; i<5; i++){
    console.log(i);
}

//async await syntax needs to be there on caller side
//await is only valid in async functions at the top level body of the modules

//callbacks, async await and promises all do the same thing

//In async await, theres no .then, no callbacks no nesting, so its cleaner and output is also clean. But it uses promises under the hood and promises use callbacks under the hood
