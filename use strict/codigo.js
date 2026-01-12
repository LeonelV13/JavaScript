"use strict";

nombre = "Lucas"
const obj = {};
Object.defineProperty(obj,'nombre',{value: "pedro", writeable: false});
console. log(obj.nombre);


const str = "Martin Valdez";
str.canal = "Soy Martin";
console. log(str.canal);


function hablar (texto,texto){
    console.log(texto);
}
hablar("Pedro","Pedro");


let variable = "nombremio";
delete variable();
console.log(variable);


let package = "pedro";
console.log(package);


function saludar(nombre){
    this.nombre = "Pedro";
    this.saludar = function(){
        console.log(`Hola ${this.nombre}`)
    }
}
obj = new saludar();
obj.saludar();


//eval = "Hola";
//console.log(eval);

