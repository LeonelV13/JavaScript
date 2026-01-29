"use strict";

console.log(history.back());

console.log(history.forward());

console.log(history.length);

console.log(history.go(1));

console.log(history.pushState({nombre: "pedro"},"","?jaja"));
console.log(location.href);

addEventListener("popstate",(e)=>{
    console.log(e.state);
});

console.log(history.replaceState({nombre: "pedro"},"","?jaja45"));