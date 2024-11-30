//output

alert("Hello World");                       //Warning
console.log("I am console");                //debugging
document.write("I am a document.");         //show direct message in web page and we shouldn't use it but why???
document.getElementById('one').innerHTML="Hello World"           


//Variables
var x = 20+20+"20"+20+20;
//If user does this by mistake then it would be very difficult to debug kyuki samajh hi nhi aiyega error kaha hai
console.log(x);
console.log(typeof(x));

{
    let y = 30;
    y=50;
    console.log(y);   //It will print as 'y' is block scope
    const p = 50;
    console.log(p);   //It will print as 'p' is block scope
    var st=90;
    console.log(st);  //Even if we declare it in block still it will be global scoped
}

console.log(y); //Will give error 
console.log(p);  //Will throw error
console.log(st);  //It will not throw error as it is global scope


var d;
console.log(d);
console.log(typeof(d));

var f = null;
console.log(f);
console.log(typeof(f));   //It is object type

//Hoisting - means we can access variables before its declaration which is possible in case of var but not in case of let and const
s=10;
var s;
console.log(s);
