// function Sum(...num){
//     let sum=0;
//     for(let i=0; i<num.length; i++){
//         sum = sum+num[i];
//     }
//     return sum;
// }

// console.log(Sum(7, 8));
// console.log(Sum(11, 12, 13));
// console.log(Sum(45, 34, 28, 29));

// //Array destructuring
// const[one, two, ...data] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// console.log(one);
// console.log(two);
// console.log(data);

// const{firstName, lastName, ...objData}={
//     firstName: "Vikash",
//     lastName: "Dubey",
//     age: "21",
//     salary: "8000",
//     profit: "none"
// }

// console.log(firstName, lastName);
// console.log(objData);

// //spread operator
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];

// const combinedArray = [...arr1, ...arr2];
// console.log(combinedArray);

//Hoisting
// y=20;
// console.log(y);
// let y=10;

// let x;
// console.log(x);
// x=10;

console.log(add);
var add = (a, b) => a+b;
console.log(add(23, 243));
