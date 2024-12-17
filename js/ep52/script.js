//Changing CSS, adding, updating, manipulating, removing, etc.
//CSS can be internal, external and inline. Inline CSS is given priority
//You can change the inline styles on any element through style property.
//You can get or set the styles of any element using this property.

let paraElement = document.getElementById('spara');
//You can get or set single inline style through this property

console.log(paraElement.style);     //getting the element
paraElement.style.backgroundColor = 'blue';       //setting the element

//You can get or set multiple inline styles through this property - .CSSText

let secondElement = document.getElementById('sdiv');

secondElement.cssText;
secondElement.style.cssText; //get

secondElement.style.cssText = "background-color: black; color: white; padding: 0.5rem";

//.setAttribute() -> updates or sets the attribute value of any element
let firstElement = document.querySelector('#fdiv');

firstElement.setAttribute('class', 'divClass');

firstElement.setAttribute('class', 'secondDivClass');

//If you try to set attribute style, it will clear off all the style attributes and set it newly

//className gets classes or inserts classes

fpara.className;
fpara.className = "Gohan, Bulbul"

//classlist - add, remove, toggle, contains

let fpara = document.querySelector('#fpara');
fpara.classList

fpara.classList.add('thirdclass'); // adds class
fpara.classList.remove('firstclass'); // removes this class
fpara.classList.toggle('secondclass'); //if its present will be removed otherwise will be added

fpara.classList.contains('firstClass'); //checks if class is present or not. Returns true or false
