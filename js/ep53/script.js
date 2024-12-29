//What is event, how to respond to an event, how to stop the response, what data is stored inside the event, lifecycle
//announcements by browser based on actions of users - event

//click, scroll, key press - action is attached

//to view events attached to a document, write monitorEvents(document);  and unmonitorEvents(document)

//event target - entity where event is recieved, attached event listner or handler

//elements like button is event target.  
//event - click, button - event target, action/behaviour - event listner

//event listners define actions performed on event target when events occur. It handles events.

function changeText(event){
    console.log(event);
    let fpara = document.getElementById('fpara');
    fpara.textContent = "Hello Babbar!";
}

let fpara = document.getElementById('fpara');
fpara.addEventListener('click', changeText);

//fpara.removeEventListener('click', changeText); //removes event 

//The function passed inside remove event listner should be exactly same object mentioned inside addEventListner. Thats why to refer to same object, we use reference inside both the functions and declare function outside and avoid writing it inside the eventlistners

//phases of an event - how does event traverse inside DOM heirarchy

//capturing phase - when event travels down to event target in DOM tree. At target phase is the phase when event is on the target element and bubbling phase is when event is returning back to root heirarchy.
//bu default addeventlistner is hit in bubbling phase but to make it hit in capturing phase, we add a value as true which is usecapture

//event object - when an event is triggered, it goes to the listener function and is used as arguement or parameter which can be used to observe the data.

//default action - every element has some default action. Ex. anchor tag default action is link. It redirects to some page. 

let fanchor = document.addEventListener('fanchor');

anchorElement.addEventListener('click', function(event){
    event.preventDefault();  //prevents default behaviour of the element
    anchorElement.textContent = "Click done bhai!";
});

//You have to perform an action when clicked on a particular para
let paras = document.querySelectorAll('p');

function alertParas(event){
    //To show the alert only on clicking on span element
    if(event.target.nodeName === 'SPAN'){
        alert("You have clicked on paras" + event.target.textContent);
    }

    // alert("You have clicked on " + event.target.textContent);  //target property provides more info about the target event
}

for(let i=0; i<paras.length; i++){
    let para = paras[i];
    para.addEventListener('click', alertPara);
}

//applying listner on div tag - this is the most opti soln

let mydiv = document.getElementById('wrapper');
document.addEventListener('click', alertParas);

//target - gives info about that particular element

