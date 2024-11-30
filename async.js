// console.log("A");
// setTimeout(() => {
//   console.log("B");
// }, 2000);

// setInterval(() => {
//   console.log("D");
// }, 3000);

// console.log("C");

// //callback hell - APIs should be executed in a sequence, syntax is called callback hell, you wont be able to debug here thats why it is called callback hell
// console.log("A");
// setTimeout(() => {
//   console.log("B");
//   setInterval(() => {
//     console.log("CCC");
//     setTimeout(() => {
//       console.log("DDDDD");
//     }, 1000);
//   }, 1000);
// }, 2000);

// console.log("C");

// //We have promises to solve callback hell
// //Pending: intermediate state, fullfill: data, reject: err
// let promise = new Promise((resolve, reject) => {
//   let data = 101;

//   if (data == 101) {
//     resolve("Data");
//   } else {
//     reject("Err");
//   }
// });

// promise.then((data) => console.log(data)).catch((err) => console.log(err));

//Promises help us make API call. It can be made using fetch, axios and ajax
// json.parse()->in json
// data.json()-> in object

// fetch("https://jsonplaceholder.typicode.com/todos/")
// .then((data)=>data.json())
// .then((data)=>console.log(data))
// .catch((err)=>console.log(err))

var apiData = [];
var paraEle = document.getElementById("one");

// function API_Call() {
//   fetch("https://jsonplaceholder.typicode.com/todos/")
//     .then((data) => data.json())
//     .then((data) => apiData=data).then(()=>{
//         Display();
//     })
//     .catch((err) => console.log(err));
// }

// function Display(){
//     apiData.map((ele)=>{
//         let pData = document.createElement("p");
//         paraEle.appendChild(pData);
//         return(
//             pData.innerHTML = ele.userId + " " + ele.title
//         )
//     })
// }


//Prepare Weather Finder Application
function submitData(e){
  e.preventDefault();
  let city = document.getElementById("city").value;
  let country = document.getElementById("country").value;
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=d219fdc42ae080207ec6b2803e9bc622&units=metric`)
    .then((data)=>data.json())
    .then((data)=>apiData=data).then(()=>{
      Display();
    })
    .catch((err)=>console.log(err));
}

function Display(){
  console.log(apiData);
  paraEle.innerHTML = apiData["main"]["temp"]+" "+apiData["main"]["humidity"];
}

