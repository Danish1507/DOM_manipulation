// console.log("Hello");

// console.log(document.getElementById('para'));
document.getElementById('para').innerText = "New Data manipulated by DOM ";

// ########## selecting element by class name #############

let eles = document.getElementsByClassName('ele'); // we can give the idex of the collection of elements having the same class name is accessed using the index of the perticular element


console.log(eles);  // it will give the array of all the elements having the same class name 
// if we want to acces first second or other element we can use #### eles[i]

console.log(document.getElementsByTagName('p')) // document.getElementsByTagName('p') ####   this will select the element of tag 'p'









