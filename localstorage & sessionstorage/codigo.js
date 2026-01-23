"use strict";

localStorage.setItem("nombre","Pedro");
console.log(localStorage);
let nombre = localStorage.getItem("nommbre");
console.log(nombre);
setTimeout(()=>{
    let nombre = localStorage.clear();
},5000);


sessionStorage.setItem("nombre","Juan");

setTimeout(()=>{
    let nombre1 = sessionStorage.removeItem("nombre");
},3000);