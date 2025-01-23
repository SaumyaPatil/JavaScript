const initArray = [1, 2, 3, 4, 5];

// initArray.push(2);
// console.log(initArray);

const secArray = [6, 7, 8];

// i < secArray -> What does it mean? How does it internally assumes it to be.
for(let i=0; i<secArray.length; i++){
    initArray.push(secArray[i]);
}

console.log(initArray);


//When we send a function as an arguement, we send it by reference. That is the implementation is sent to the higher order function calling it.
