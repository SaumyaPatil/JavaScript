//arithmatic operations

// let a = 10;
// let b = 5;
// console.log(a+b);
// console.log(a-b);
// console.log(a/b);
// console.log(a%b);
// console.log(a*b);
// console.log(a**b);

//unary operators - ++, --
// let a = 5;
// console.log(++a);

//++a - means first increment and then use
//a++ - means first print and then increment
//same for post and pre decrement

//assignment operator
// let a = 5;

//comparison operator - >, <, >=, <=, ==, ===, !=, !==
// === : This denotes strict equality which means value and type of data both should be same.
// == : loose equality means type may be different but value has to be same
// console.log('5' == 5);  //true
// console.log('5' === 5);  //false

//explore more about it
// console.log(5 != 3); //true
// console.log(3 !== 3); //true

//ternary operator
// let age = 28;
// let status = (age>18) ? "I can vote" : "I cant vote";
// console.log(status);

//Logical operators - are used to merge two expressions or conditions to create some logic
//AND -> && (if all conditions are true then true else false)
// OR -> || (if any one is true then true else false)
// NOT -> ! (!(TRUE) - FALSE, !(FALSE) - TRUE)

//Working with non booleans in case of logical operators
//ex. (false && "Saumya"), (false || 3), (true || "Hello ji")

//Concept of falsey & truthy
//falsey - undefined, null, 0, false, NaN, ''
//truthy - anything which is not falsey

//short circuiting - is there need to check further


//Bitwise operator - !, &, ~, <<, >>, ^
//Computer understands binary language which consists of 0s and 1s

//bit specific operations are done using bitwise operators
console.log(2 | 5); //7
console.log(2 & 5); //0

console.log(~(0)); //-1

//XOR - same bits give 0 and different bits give 1
console.log(2^2); //0

//left shift - 5*(2**1)
console.log(5<<1);
//5*(2**2)
console.log(5<<2); 

//right shift - (5/2^1)
console.log(5>>1); 

//CONDITIONALS - IF ELSE/CONTROL FLOW STATEMENTS

//To check multiple conditions, use if, else-if
//The last else is optional here

//Switch case - 
//default is optional

let num=3;
switch(num){
    case 1: console.log("A");
    break;
    case 2: console.log("B");
    break;
    case 3: console.log("C");
    break;
    case 4: console.log("D");
    break;
    default: console.log("F");
}

//literals article in javascript - doc
