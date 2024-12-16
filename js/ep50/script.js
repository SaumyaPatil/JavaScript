//Error handling - try, catch, final block, custom errors, type of errors

//Error occurs when the normal flow of execution of code is disrupted.
//It is the event which impacts or disrupts the normal flow of execution of your code.

//Types - compiled time and runtime errors
//Compiled time errors can be caught during parsing of the code before execution
//Runtime - while the code is executing, any error caught is runtime error.


//compile time errors
//syntax error
// console.log(1;

//runtime
// console.log(x);  //ref error

//Handling of errors - provides clarity to the user and better user experience

try{
    //Here we write error prone code
    console.log("Try block starts here.");
    console.log(x);
    console.log("This is second line");
}catch(err){
    //define karte hai error k sath aap kya karna chahte h
    //retry logic
    //fallback mech
    //logging
    //custom err
    console.log("I am inside catch block");
    console.log("Your error is here: ", err);
}
//This runs everytime
finally{
    console.log("I will run everytime as I am finally block.");
}

//show/propogate/return error - throw keyword

//We create custom errors when we want to integrate APIs. When these APIs return us some code that depicts a particular error in our code, we throw a custom error explaining that code for better clarity through throw keyword.
try{
    console.log(x);
}
catch(err){
    throw new Error("Bhai pehle declare kro fir print krna!");
}

let errorCode = 100;
if(errorCode == 100){
    throw new Error("Invalid JSON!");
}

