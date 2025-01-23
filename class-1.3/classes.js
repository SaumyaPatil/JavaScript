// const dog = {
//     name: "Tommy",
//     legCount: 4,
//     speaks: "bhow bhow"
// }

// const cat = {
//     name: "Kitty",
//     legCount: 4,
//     speaks: "meow meow"
// }

// //Animal x speaks y with z legs
// //This is repetative code here.
// console.log("Animal " + dog["name"] + " speaks " + dog["speaks"] + " with " + dog["legCount"] + " legs.");
// console.log("Animal " + cat["name"] + " speaks " + cat["speaks"] + " with " + cat["legCount"] + " legs.");


// //To remove redundancy, we can define a function that takes an object as arguement and prints the string
// function printString(object){
//     console.log("Animal " + object["name"] + " speaks " + object["speaks"] + " with " + object["legCount"] + " legs.");
// }

// printString(dog);
// printString(cat);

//What if in future there are more such functions
//In the above example the properties of both the animals dog and cat are the same also the function that they executed is the same, what if there are more such functions in the future.

//Lets combine their properties and give a structure to these animals - 
//class - gives a structure of something that is reusable and used in multiple places. It is a blue print. 
//Analogy - Architectural building is a blueprint but the actual building was constructed in Delhi, Mumbai, Pune, Banglore, etc.

class Animal {
    constructor(name, speak, legCount){   //Jab maine Animal likhka isko toh nahi hua value initialise but abhi ho raha constructor likhke.
        this.name = name
        this.speak = speak
        this.legCount = legCount
    }

    static myType(){
        console.log("Animal");
    }

    speaks(){
        console.log("Hii there " + this.speak);       //Why is this giving me undefined
    }
    

}
Animal.myType();  

//This will successfully execute. If you call speaks function this way, it cannot be directly called on the class as 
// it is not static. It will only be called on the object of the class.

let dog1 = new Animal("Tommy", "bhow bhow", 4);        //Create object
let cat1 = new Animal("Kitty", "meow meow", 4);
dog1.speaks();    //call function on object
cat1.speaks();
