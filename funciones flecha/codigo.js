const saludar = ()=> {
    console.log("Hola");
    console.log("¿Como estas?");
}


const saludar1 = ()=> saludo = "Hola, como estas?";


//const nombre = function(res) {return nombre =res}
const nombre = res => nombre = res;


"use strict"
const objeto = {
    nombre : "Martin",
    saludar : function(){console.log(`Hola ${this.nombre}`)}
}
const objeto2 = {
    nombre : "Martin",
    saludar : ()=>{console.log(`Hola ${this.nombre}`)}
}
window.nombre = "Leonel"
objeto.saludar();
objeto2.saludar();


function constructorPersona(nombre,apellido){
    this.nombre = nombre;
    this.apellido= apellido;
}
const persona = constructorPersona("Martin","Leonel");
console.log(persona);