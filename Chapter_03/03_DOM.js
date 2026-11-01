// select elements by different different method
// elements select by id
let abcd = document.getElementById("abcd");
console.dir(abcd);  // console per full menu na dikhe toh dir ka use karte hain
// agar aapke paas class hai toh 
let abc = document.getElementsByClassName("abcd"); // isame elements hota hai na ki element kyuki ek naam ke kai sare class hote hai 
console.dir(abc);
// important for selector
let ab = document.querySelector("h1"); // ye hamesa body ke ander ke sabse pahle h1 ko select karega na ki sab ko 
console.dir(ab);


// querySelectorAll();
let b = document.querySelectorAll("h1");

let h2 = document.querySelector("h2");
console.dir(h2);
h2.textContent = "hii kaushik";
// h2.innerHTML = <i>hey</i>;
   

// attribute manupulation

let a = document.querySelector("a");
a.href = "https:/www.google.com";
console.dir(a);

// second method
a.setAttribute("href","https//www.google.com");


// getAttribute("href");  ==> attribute ko nikalkar de dega 

console.log(a.getAttribute("herf"));


// removeAttributes ==> attributes ko hata deta hai 

// dynamic dom manupulation niche wale rule ko follow karo
//createElement
//appendChild ya prepend karo

//appendChild se kuch bhi add karoge toh wo baad me add hoga and prepend se sabse uper hoga 


//removeChild


let h3 = document.createElement("h3");
h3.textContent = "hello";
document.querySelector("body").prepend(h3);



// js se style (css) me change karna

let div = document.querySelector("div");
div.style.color = "red" ;                 // ham aise css ke kafi saari chije change kar sakte hain cssme 
div.style.backgroundColor = "green";
 
// js se class banaye 

div.classList.add("ab");



 