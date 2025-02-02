let show = document.getElementById('show');
let popup = document.getElementById('box');

function showPop(){
    popup.style.display = "flex";
}
show.addEventListener('click',showPop);


let close = document.getElementById('close');

close.addEventListener('click', closePop);

function closePop (){
    popup.style.display = "none";
}