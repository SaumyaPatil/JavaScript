
function OuterFunction(){
    let outerData = "Hey I am outer data";
    function InnerFunction(){
        console.log(outerData);
    }
    return InnerFunction;
}

const fun = OuterFunction();
fun();

//It makes variable private to the inner function

function Incre(){
    var count=0;
    function InnerInc(){
        return count++;
    }
    return InnerInc;
}
const data = Incre();
console.log(data());
console.log(data());
console.log(data());
console.log(data());
console.log(data());
