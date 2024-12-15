//variable scoping - behaviour of variables created using var, let and const in global scope, function scope and block scope
//TDZ 


//variable when created is accessed where 
//global, function, block

//global scope - direct parent is file. This variable can be used inside any function, any loop, any block.
var age = 15; //any keyword is possible, let, const and var and it will behave the same in all cases below
console.log(age);

{
    console.log(age);
}

if(true)
    console.log(age);

for(let i=0; i<=1; i++){
    console.log(age);
}

function sayHello(){
    console.log(age);
}

sayHello();

//function scope - Variable created inside function using any keyword is accessible only inside the function and no where else.
function greet(){
    var name = "Saumya";
    console.log("Hello my friend ", name);
}
console.log(name);
greet();

//block scope
console.log(height);
{
    var height = 180; //since var is not block scoped it can be accessed anywhere in the file. If variable is created using let or const then it is not accessible outside the block as it is block scoped and throws error.
}

console.log(height);

//TDZ - From line number 46 to 49 there is TDZ and its not possible to access the variable in this zone.
console.log(marks);
console.log("Saumya");
console.log("Patil");
const marks = 120;
console.log(marks);

//Best practice is to not create global variables to avoid issues at debugging end and predictablity will increase of the code.
//Try to use let and const keywords to maintain predictability of your code
