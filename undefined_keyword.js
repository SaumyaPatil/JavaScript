var a;
console.log(a);

a=10;
console.log(a);

a = "hello world";
console.log(a);

if(a === undefined){
    console.log("a is undefined");
}

else{
    console.log("a is not undefined");
}

a = undefined;
console.log(a);
//This is not a good practice to do so, it can lead to a lot of inconsistancies. 
//It is meant for a specific purpose and should be used for that only.
