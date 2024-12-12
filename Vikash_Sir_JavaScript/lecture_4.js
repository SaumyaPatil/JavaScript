// console.log(this);

// var obj = {
//     firstName:"Saumya",
//     lastName:"Patil",
//     rollNo:44,
//     collegeName:"VIIT",
//     k:4,
//     r:6,
//     fullName:function(){
//         let r=2;
//         console.log(this.r);
//         console.log(this.k);
//         console.log(this.firstName, this.lastName);
//     }
// }

// obj.fullName();

//to delete any property we write
// delete(obj2.age);

// JS allows us to create objects using object literals or constructor functions.
//Constructor functions
function Display(name, age, rollNo, id){
    this.name=name;
    this.age=age;
    this.rollNo=rollNo;
    this.id=id;
    this.show = function(){
        this.id++;
        console.log(this.name, this.age, this.id);     
        console.log(name, age, id);
    }
}

let obj1 = new Display("Saumya", 78, 89, 9);
console.log(obj1);
obj1.show();

//object car
// let car={
//     name:"Inova",
//     colour:"red",
//     "model number": 979864,
// };

//accessing properties and methods in objects
//Property values are accessible using dot notation
console.log(car.name);     //output: Inova
console.log(car.colour);   //output: red

//For multiword properties the dot access doesnt work. Theres another square bracket notation that works with the string.
console.log(car["model number"]);   //output: 76554

//for...in loop
//To walk over all keys of an object, there exists a special form of loop called for...in loop. For instance lets output all properties of car
// for(key in car){
//     //keys
//     console.log(key);       //name, color, model number

//     //values for the keys
//     console.log(car[key]);  //Innova, red, 76554
// }

// function Student(name, age, grade, subjects){
//     this.name=name;
//     this.age=age;
//     this.grade=grade;
//     this.subjects=subjects;
//     this.printInfo=function(){
//         console.log(name, age, grade, subjects);
//     }
// }

// let obj2 = new Student("Saumya", 22, "A", "Math");
// console.log(obj2);
// obj2.printInfo();

// //Q2. Create banking system
// function bankAccount(accountNumber, accountHolder, balance){
//     this.accountNumber=accountNumber;
//     this.accountHolder=accountHolder;
//     this.balance=balance;
//     this.deposit = function(amount){
//         return (this.balance+amount);
//     }
//     this.withdraw = function(amount){
//         if(this.balance>amount)return (this.balance-amount);
//         else return("Money in your account is insufficient.");
//     }
//     this.checkBalance = function(){
//         return balance;
//     }
// }

// let obj3 = new bankAccount("983260840", "Saumya Patil", 87583584);
// console.log(obj3.deposit(45000));
// console.log(obj3.withdraw(45000));
// console.log(obj3.checkBalance());

//Nested objects
// let obj4 = {
//     name: "Saumya",
//     age: 21,
//     rollNo: 30,
//     salary: 1400000,
//     college: "VIIT",
//     //Nested objects
//     obj5: {
//         name: "Shanu",
//         college: "St. George",
//     }
// }

//How to access nested objects
// console.log(obj4.obj5.name);

//Object exists that is why it gives undefined.
// console.log(obj4.color);

/*
    //     Encapsulation : Encapsulation is bundling data (properties) and methods (functions) that operate on the data into a single unit called a 
    //     class or an object. It allows us to hide the internal state of an object and only expose the necessary functionalities to interact with 
    //     it. In JavaScript, objects and their properties and methods are achieved by encapsulation.

    //     Inheritance : It is a mechanism in JavaScript where a new class or object can aquire the properties and methods of an existing class or 
    //     object. The class or object from which properties and methods are inherited are called parent or superclass, while the new class or object
    //     is called child or subclass. This allows for code reuse and establishes a heirarical relationship between classes and objects.
*/

// let obj7={
//     gender: "Female",
//     __proto__: obj4
// }

//prototypical inheritance
// console.log(obj7.college);

//Why it comes undefined when we try to access some property which is not present in the particular object, it should give not defined

//If you dont wanna give any value then write as below
// obj2.age="";

