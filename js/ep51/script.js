//DOM Manip - How to add/delete HTML content through JS. Removing any tag or adding any tag.
//How to manip CSS using JS

//window object, DOM, BOM, JS core features

//window object - global object. It is created by browser. It is the tab that we open on browser. It lies even above the root element
//Any global var or method will be considered as property and behaviour of this window object.
//window.open(), window.close(), window.console.log("Hey") - lies under window object

//DOM - Document Object Model
// html file -> JS object -> document 

//tags -> tokens (by tokeniser) -> nodes -> DOM


//window object ke andr hi sab aata hai jaise DOM, BOM, JS Core features, etc.

//BOM - Interactions with browser other than HTML content like history, date time, screen size, etc. in sense of these if you wanna estb connections with browser.

//ACCESS - To fetch any tag or element. On basis of ID, className, TagName, in resp -> single o/p, multi o/p

// document.getElementById("fpara");
// document.getElementsByClassName("textMatter");  //returns an array of elements having className given

// document.getElementsByTagName("p");  //returns array of elements with p tag

// document.querySelector('#fpara');
// document.querySelector('.textMatter');   //returns the first encountered clasName
// document.querySelectorAll('.textMatter');  //returns all the elements with this className

// update existing elements 
//innerHTML - HTML inside any tag or element can be get or set

// button.innerHTML = <p>Hiee my name is Saumya!</p>

//outerHTML property - HW

//text-content 
let element = document.querySelector('#fdiv');

element.textContent; //enter and tabs are also visible along with text all code is printed

element.innerText; //gives how it is rendered on UI

//adding elements
let fheading = document.createElement('h1');
fheading.textContent = "My name is Saumya Patil.";

let bodyTag = document.querySelector('body');
bodyTag.appendChild(fheading);     //element is added at the end

//adding child to a particular pos

let newElement = document.createElement('span');
newElement.textContent = "This is me Saumya Patil.";

mydiv.insertAdjacentElement('beforebegin', newElement);
//before begin, after begin, before end, after end

//removal - removeChild() -> opposite of append child

//can you find child using parent object

let parent = document.querySelector('#mydiv');

let child = document.querySelector('#fpara');
parent.removeChild(child);

