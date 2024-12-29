//Function is a block of code that performs a specific task and avoids repetation of code.
//We can make our code more efficient and modular using functions.

//function defination
// function sayHello(){
//     console.log("Hello!");
// }

//function call
// sayHello();

//parameter -> num
// function parameterFunction(num){
//     console.log(num);
// }

//arguement -> 5
// parameterFunction(5);

//return function
// function getSum(a, b, c){
//     let sum = a+b+c;
//     return sum;
//     //unreachable statements
//     let a = 10;
//     let b = 20;
//     console.log(a+b);
// }

// let ans = getSum(1, 2, 3);
// console.log(ans);

//As we write function keyword we declare the function and when we write statements inside the function we define the function

//function expression
//Using const is always a better practice to be followed, to avoid debugging issues.
//debugging - process of identifying and removing errors from code
// let squareOfNumber = function(num){
//     let ans = num**2;
//     return ans;
// }

// console.log(squareOfNumber(2));

//arrow function ES6 feature - shorthand syntax
const getExp = (x, y) => {
    return x**y;
}

console.log(getExp(2, 10));
