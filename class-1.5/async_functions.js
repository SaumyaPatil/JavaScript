
//This is a sync functions
function sum(n){
    let ans=0;
    for(let i=1; i<=n; i++){
        ans += i;
    }
    return ans;
}

console.log(sum(5));

//setTimeout is a global JS function that is async. JS does other tasks by the time. It is a web API provided by browser to us.
//This is async function
function findSum(n){
    let ans=0;
    for(let i=0; i<n; i++){
        ans += i;
    }
    return ans;
}

function findSumTill100(){
    console.log(findSum(100));
}

setTimeout(findSumTill100, 1000);
console.log("Hello World!");

//How can you make setTimeout sync
function findSum(n){
    let ans=0;
    for(let i=0; i<n; i++){
        ans += i;
    }
    return ans;
}

function findSumTill100(){
    console.log(findSum(100));
}

function syncSleep(){
    let a=0;
    for(let i=0; i<10000000; i++){
        a++;
    }
}

//Either you call it this way and make it sync or
// syncSleep();
// findSumTill100();

//Call it this way
setTimeout(findSumTill100, 1000);  //Its like delegating the task to Kamla didi ki bhai after 1 second remind me to call this function and proceeding further.
//The code is run by JS thread itself but it delegates the task to Kamla didi of maintaining 1 second clock.
console.log("Hello World!");

//If you are using nodejs and running js file locally, it can read other files text file, mp4 file, JSON file.
//You cannot read a file immediately. Nodejs process is trying to access JS or txt file, it might take time other processes might be going on.    