console.log(document.getElementsByTagName("li"));  // this will select all the element of the li tag but I want to access any specific li element

// to select specific 
// DOM traversing method
let items = document.querySelectorAll('li');
console.log(items);

let ele = document.getElementById('list-item').children;

console.log(ele);

// console.log(document.getElementById('list-item').children);
// console.log(document.getElementById('list-item').childNodes); // this will give all the child nodes weather it is a text space or any thing

// console.log(document.querySelectorAll('li'));
// console.log(document.getElementById('list-item'));

// console.log(document.getElementById('list-item').children[1].parent);  // this will give the ul wich  is the parent of the li[1]
// console.log(document.getElementById('list-item').children[1].nextElementSibling); // this will give the next sibpling of the child
// console.log(document.getElementById('list-item').children[1].previousElementSibling);  // previous node 


let ni = document.createElement('li');
    ni.innerText = "luki";

document.getElementById('list-item').appendChild(ni);

console.log(items.innerText);   // this will show as it is 6 element it does not update autpmatically we have to fetch again to update but html element update automatically 



console.log(ele);  // this will automatically update it self internally we need not to fetch again and again

