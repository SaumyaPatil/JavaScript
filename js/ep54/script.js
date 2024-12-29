//How to compare between two codes performance and enhance performance of code 
//How to write the best code & measure performance of code

//Code 1
const t1 = performance.now();  //standard way in js to check how much time code takes to run

for(let i=1; i<=100; i++){
    let para = document.createElement('p');
    para.textContent = "This is para number "+i;
    document.body.appendChild(para);
}
 
const t2 = performance.now();

console.log(t2-t1 + "This is the total time.");

//Code 2
const t3 = performance.now();
let mydiv = document.createElement('div');
for(let i=1; i<=100; i++){
    let para = document.createElement('p');
    para.textContent = "This is para number "+i;
    mydiv.appendChild(para);
}
document.body.appendChild(mydiv);
const t4 = performance.now();
console.log(t4-t3 + "This is the total time.");


// reflow - Process of calculating position/dimentions of element. Its computationally intensive task.
// repaint - process of displaying content/element pixel by pixel (faster than reflow)

//In second code, I had to reflow and repaint just once and in first code I had to reflow and repaint so many times.

//Doc fragment - light weight doc object. No reflow and repaint when we try appending any element in document

//best code

let fragment = document.createDocumentFragment();
for(let i=1; i<=100; i++){
    let para = document.createElement('p');
    para.textContent = "This is para" + i;
    //no reflow and no repaint for the below line
    fragment.appendChild(para);
}
//the below line takes 1 reflow and 1 repaint
document.body.appendChild(fragment);

//We perform reflow and repaint when we have to append the element in the DOM tree
