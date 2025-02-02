
let products = [
    {
        name: "samsung S23 Ultra",
        price: 90000
    },
    {
        name: "iPhone 14",
        price: 75000
    },
    {
        name: "think Pad",
        price: 200000
    },
    {
        name: "Dell d12",
        price: 90000
    }
]

 function doSome(){
   
 }
for(let i=0; i<products.length; i++){
    let pro = document.createElement("div");

    pro.classList.add("prod"); // from here we have a div with the class name prod
    let pName = document.createElement("h2");

    pName.innerText = products[i].name;
    let pPrice = document.createElement("h3");
    pPrice.innerText = products[i].price
    function doSome(){
      console.log(products[i] );
    //   console.log(products[i].price);
    }
    pro.appendChild(pName); // here one thing keep in mind that you need not to append the child in inverted "" 
    pro.appendChild(pPrice);
let btn = document.createElement("button");
btn.className = "btn1";
btn.innerText = "buy";
pro.appendChild(btn);
btn.addEventListener("click",doSome);
    document.getElementById('parent').appendChild(pro); // append the card in side of the parent div
    
}
