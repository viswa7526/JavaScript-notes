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
let a = document.querySelectorAll("h1");

let h2 = document.querySelector("h2");
console.dir(h2);
h2.textContent = "hii kaushik";
// h2.innerHTML = <i>hey</i>;
   

// attribute manupulation
