"use strict";

this.nombre = "Leonel";

function saludar(){
    console.log(`Hola ${this.nombre}`);
}

const objeto = {
    nombre: "Martin",
    saludar
}

function otroContext(){
    this.nombre = "Victor";
    this.saludar = saludar;
}

const objeto2 = new otroContext();
objeto.saludar();
objeto2.saludar();
console.log(this.nombre);