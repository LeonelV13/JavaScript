let variable = "string";
console.log(variable.__proto__);

class objeto {
    constructor(){};
    hablar(){
        console.log("hola")
    }
}
const objeto = new objeto();

objeto.hablar = ()=>{
    console.log("modificado afuera");
}

let arr = [];
arr.__proto__ = objeto;
arr.hablar();