function someTask(){
    console.log("Hello Sarkar");
}

setTimeout(someTask,5000); // the second given is in milisecond

 let timer = setTimeout(function(){
    console.log("Hello Modi");
    
},5000) // this way we directly call the function 


// we can also setTimer in any function that will be called after some event 
// which means when any event occurs the timer will start then if want to do this 
// we can also store aur function in a variable 

// we can also set stopTimer
// this timer function is used to perform any task once after performing it will not execute 

// if we want to do any task in loop then we use interval 
let count=0;
let t = setInterval(() => {
    if(count===5){
        clearInterval(t)
    }
    console.log("some task");
    count++;
}, 3000);