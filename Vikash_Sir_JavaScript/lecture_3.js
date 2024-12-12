var name1 = "Saumya is a girl. is a good girl is";

//Please note that str.length is a numeric property, not a function. 
//There is no need to add parenthesis after it. Not .length(), but .length.
console.log(name1.length);
console.log(name1.charAt(2));
console.log(name1.trim());
console.log(name1.indexOf('s'));
console.log(name1.replace("is", "all"));
console.log(name1.replaceAll("is", "all"));
console.log(name1.toUpperCase());
console.log(name1);
//explore split, substring and equals by own

console.log(name1.includes("is"));

//Functions :-
//Normal functions
function Display(){
    console.log("My name is Saumya.");
}

//Arrow function : - It has its own this keyword. We need not write this here seperately.
let x=(a, b)=>a+b;
console.log(x(5, 6));

//Writing map function using arrow function
let data = [10, 20, 30, 40, 50, 60, 70, 80];
let data1 = data.map((ele)=> ele+5);
console.log(data1);
