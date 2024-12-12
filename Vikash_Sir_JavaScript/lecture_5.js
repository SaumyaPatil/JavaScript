//CRUD operations we are doing through js to make the page dynamic. 
//DOM manipulation

//If you do 'document.getElementById("one")' then it returns an object who's id matches with provided id otherwise in case of 
//getElementByClass then you get an array of objects having class similar to the provided class

document.getElementById("one").innerHTML = "Hello World";
document.getElementById("one").style.color = "red";

document.querySelector('#fpara');
document.querySelector('.textMatter');
document.querySelector('p');
//Here catch is that just the first object is returned rest all are ignored.

document.querySelectorAll('p');

//update existing element
//innerHTML (you can get or set the property of tag), outerHTML, text-content (Same as inner text but it exactly displays what way the innerHTML is written.), innerText

const data = document.getElementsByTagName("h2")[1].innerHTML = "I have changed.";
data.innerHTML = "Hiii";
console.log(data);

document.getElementsByClassName("two")[0].innerHTML = "I have changed just now.";

let x = document.createElement("h5");
console.log(x);

// body.appendChild(fHeading);  //child last me add hota hai

//Adding element to position of your choice

//beforebegin - before the start of any tag
//afterbegin - just the start of tag
//beforeend
//afterend

//removeChild - opposite of append child - parent.removeChild

function ClickMe(){
    document.getElementById("one").innerHTML = "Saumya Patil!"
}

function changeColor(){
    document.getElementById("firstWrapper").style.backgroundColor = "orange";
    document.getElementById("innerID").innerHTML = "How are you!";
}

function changeColorAgain(){
    document.getElementById("firstWrapper").style.backgroundColor = "red";
    document.getElementById("innerID").innerHTML = "I am fine!";
}
