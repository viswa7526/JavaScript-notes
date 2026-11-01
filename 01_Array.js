//there are two types to create array 
// first method
let arr = [1,2,3,4,5,];
// 2nd method 
let ar = new Array(1,2,3,4,5);
// modification of arrays
arr[1] = 12;

// arrays methods

//push()
arr.push(9000);  // value ko isert karta hai last me 
//pop()
arr.pop();  //delete value in array ke last se 
//shift()
arr.shift();  // array ke suru ki value ko delete karta hai 
//unshift()
arr.unshift(0);  // value ko add karta hai suru me jo bracket ke bich me likhate ho 
//splice()
arr.splice(2,2);   // values ko hata sakate ho index ke sath (first 2 index batata hai second 2 index se kitni value hatani hai )
// slice()
let a = arr.slice(0,4); //basically slice  kisi bhi defined array me se slice kar ke naya array bana deta hai example(0 index se lekar 0 include hoga 3 index tak ki values ko naye array yani a me daal dega 4 tak likha  hai toh 4 include nahi rahata hai ) main array me kuch bhi change nahi hoga main array waisa ka waisa hi rahega 
//reverse()
arr.reverse();  //array ko reverse ksr deta hai main array ko
//sort 
let sr = arr.sort(function(a ,b){
    return a -b;                    // ye pura assending order me array ko kar dega (funcyion syntax ka part hai )
});

let src = arr.sort(function(a,b){
    return b-a;                    // ye pure array ko desending order me kar deta hai hai ( same isame bhi function syntax ka part hai )
});


//important part


let array = [1,2,3,4,5,6,7,8,9];
//forEach
array.forEach(function(val){
    console.log(val);// forEach same aise hi likhana nahi toh nahi chalega {for each array me se har ek particular value ko leta hai aur function me dalata hai aur function me jo kuch me likha hota hai wo run hota ha har ek element ke liye }
});

//map
let newarr = array.map(function(val){
    if (val < 8){
        return val;
    }                 // map old array jo aap use kar rahe ho usaki values ko ek ek kar ke function me bhejata hai aur function jo bhi return karge wo ek naye array me insert hota rahata hai 
});

//filter
let newar = array.filter(function(val){
    if (val > 4){
        return true;
    }                      // ye kaam map se bhi kar sakte hai but map me return value karni padti thi but isame true ya false kaam dono same hai isame bhi nayi array banati thi and map me bhi nayi array banati hai 
});

//reduce
let ans = array.reduce(function(accumulator,val){
    return accumulator + val;        // array ko reduce yani single value me convert karne ke liye use hota hai val me array ki values aati hai accumulator apni value ko yaad rakhata hai aur usaki value ko niche jo 0 likha hai wo defined kiya gaya hai app kuch defined kar sakte ho abb function me jo bhi return hoga wo accumulator  me store hota rahega variable ki tarah aur aakhari me retuen kar dega 
},0);


//find
let va = array.find(function(val){
    return val === 1 ; // find suru se check karta hai jo bhi pahli value condition ko satisfy kar deti hai use wo print kar deta hai 
});

//some
let any = array.some(function(val){
    return val > 8;    // ye check karta hai array me aisi koi value hai ki  nahi agar hai toh true pass karega nahi toh false {koi ek bhi value satisfy kar gayi toh true aayega }
});

//every
let uni = array.every(function(val){
    return val > 3;   // ye bhi some ki tarah hai but ye tabhi true deta hai ja saari values conditiion ko satisfy kar de 
});

//destructuring and spread operator

let [c,d] = array;  // array ke elements ko variable me dalne ko destructuring kahte hain

let arr2 = [...array]; //spread operator ...se hotaa hai aur array arr2 me copy ho jayega arr2 me jo bhi changes karoge toh array me nahi hoga wo sirf arr2 me hi hoga 


