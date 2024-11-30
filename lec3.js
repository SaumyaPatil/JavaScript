var name1 = "Saumya is a girl. is a good girl is";

console.log(name1.length);
console.log(name1.charAt(2));
console.log(name1.trim());
console.log(name1.indexOf('s'));
console.log(name1.replace("is", "all"));
console.log(name1.replaceAll("is", "all"));
console.log(name1.toUpperCase());
//explore split, substring and equals by own

console.log(name1.includes("is"));


//functions :-
//Normal functions
function Display(){
    console.log("My name is Saumya.");
}

//Arrow function : - It has its own this keyword
let x=(a, b)=>a+b;
console.log(x(5, 6));

let data1 = [10, 20, 30, 40, 50, 60, 70];
let data = data1.map=((ele)=>{ele+5});
console.log(data);

