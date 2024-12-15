//classes, usage of getters and setters and default parameters of function

//classes - Data members and functions and their instances are called objects.

//When you define some plan or logic that is class and when that plan is brought to implementation and converted to actual thing then it is called object
//class contains state(property) and behaviour(functionality)


class Human {
    //properties
    age = 22; //these members are marked public explicitly so it can be used withen the class as well as outside of the class
    #wt = 70; //this is private data member and can be used inside the class only
    ht = 24542;

    constructor(newAge, newHt, newWt){
        this.age = newAge;
        this.ht = newHt;
        this.#wt = newWt
    }

    //behaviour
    walking(){
        console.log("I am walking.", this.#wt);  //this keyword is used to refer to the current object
    }

    running(){
        console.log("I am running.");
    }

    get fetchWeight(){  //this works even without get keyword. It is only there for semantic clarity that this function is fetching the data or setting the data.
        return this.#wt;
    }

    set modifyWeight(val){
        this.#wt = val;
    }
    //We can even apply data prediction on these methods. Like we can put validation for getting or setting the data.
    //This is used to access private field so that means we have set an encapsulation or abstraction layer also
}

let obj = new Human(40, 108, 62);
console.log(obj.fetchWeight); //get method is used without brackets

obj.walking();
// console.log(obj.#wt);

//Getter function is used to fetch the value of a variable inside the class even if its a private field and setter sets or modifies the value

//constructors - are special functions used to initialise the values of data members in the class
