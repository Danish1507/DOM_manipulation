
console.log(document.getElementById('box1'));

let inTxt = document.getElementById('box1').innerText;

inTxt = " this is the new Text";

console.log(inTxt);  // the content in side the did is accessed by this way 



document.getElementsByClassName('one'); // we get the array form this line of the code but can make manipulations form this line of the code 
// if we want to make manipulaation we need to access the element from the array by its index


let oneDiv = document.getElementsByClassName('one')[0]; //  this will select the element of the array at the idex 0;
// no we can make manipulations on inTxt

oneDiv.style.backgroundColor = "red";  // we use camel casing for the hyphen (-)

oneDiv.style.height = "500px"; 



function logSomething() {
    console.log("Something Happened");  // this line will be exceted only when it is called  
    box.style.height = "200px";
    box.backgroundColor = "aqua";

}


let box = document.getElementById('box1');

box.addEventListener('mouseenter',logSomething); //this is a event handling here we pass 2 parameters one is the event when the action should be performed and other parameter is the event listener what action should be performed
// 2 things to keep in mind is we need not to write on-(before the event) and we do not use the paranthesis () after the event listener function
 


