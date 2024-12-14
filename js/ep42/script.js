//When set of instructions are repeatedly executed
//for loop, while loop, do-while loop

//break : as this line hits then exit from loop
//continue : skips the statements below and moves to next iteration

//for loop can be written without the init, conditn, updation as below

//This code will print i infinite times.
/* 
    let i=0;
    for(;;){
        console.log(i);
    }
*/

/* 
    let i=1;
    while(i<=10){
        console.log(i);
        i++;
    }
*/

/* 
    This loop runs atleast one time
    let i=1;
    do{
        logic
        //updation
    }while(condition);

*/

//STRINGS
// let firstName = "Saumya";
// let lastName = 'Patil';
// let name = `Love
// Babbar is the best
// tutor
// of 
// coding
// languages
// so far
// `;

// console.log(name);

// let newName = new String("Saumya Patil");
// console.log(newName);

//let firstName = new String("love babbar");

/* 
    This creates a String object using the new String() constructor. Even though it looks like a string, it is not a primitive string, but rather a complex object.
    Since it's an object, it has properties and methods that primitive strings do not have.
    Example: typeof firstName will return "object".
    let firstName = "Love Babbar";

    This creates a primitive string. It's the most common and recommended way to declare strings in JavaScript.
    A primitive string is simpler and faster to use than a String object.
    Example: typeof firstName will return "string"

    In most cases, you should use primitive strings (let firstName = "Love Babbar";) because they are lightweight and more efficient than String objects 
    (new String()). String objects are rarely needed unless you specifically require the object-based behavior (which is uncommon).
*/

//Operations on string
//concatination
//  let a = "Hello ";
//  let b = "WORLD ";
//  console.log(a+b);

//  let finalAns = `${a}${b}`;
//  console.log(finalAns);

// length 
//  console.log(b.length);

// substring
// uppercase
// console.log(a.toUpperCase());
// console.log(b.toLowerCase());
// lowercase, charAt, indexOf

// let str = "Saumya";
// console.log(str.substring(2));
// console.log(str.substring(2, 5));

//split operator splits based on something, it returns an array
let givenString = "Hello \\jee \\kaise \\ho \\saare!";
let words = givenString.split(' ');
console.log(words);

// \ is used before any char to tell that not to treat that char as special char but normal char
console.log('\\');
console.log(words);
console.log(words.join(','));

