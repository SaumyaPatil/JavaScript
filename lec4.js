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

let obj2 = {
    name: "Saumya",
    age: 21,
    rollNo: 30,
    salary: 1400000,
    college: "VIIT",
    //Nested objects
    obj6: {
        name: "Shanu",
        college: "St. George",
    }
}
//How to access nested objects
console.log(obj2.obj6.name);

let obj7={
    gender: "Female",
    __proto__: obj2
}

//prototypical inheritance
console.log(obj7.college);

// if you wanna delete any property here then use delete keyword
delete obj2.age;

for(let x in obj2){
    console.log(x, obj2[x]);
}

//Q1.
function Student(name, age, grade, subjects){
    this.name=name;
    this.age=age;
    this.grade=grade;
    this.subjects=subjects;
    this.printInfo = function(){
        console.log(name, age, grade, subjects);
    }
}

let obj3 = new Student("Saumya", 21, "A", "Computers");
console.log(obj3);
obj3.printInfo();

let obj4 = new Student("Siddhi", 31, "A", "Bio");
console.log(obj4);
obj4.printInfo();

//Q2.
function BankAccount(accountNumber, accountHolder, balance){
    this.accountNumber = accountNumber,
    this.accountHolder = accountHolder,
    this.balance = balance,
    this.deposit = function(amount){
        balance=balance+amount;
        return balance;
    }

    this.withdrawl = function(amount){
        if(balance>=amount){
            balance=balance-amount;
            return balance;
        }
        else console.log("The amount is insufficient.");
    }

    this.checkbalance = function(){
        return balance;
    }
}

let obj5 = new BankAccount("kjsjvofuohao", "Saumya", 1400000);
console.log(obj5.deposit(500000));
console.log(obj5.withdrawl(300000));
console.log(obj5.checkbalance());
