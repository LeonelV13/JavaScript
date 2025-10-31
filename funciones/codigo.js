function saludar(){
    respuesta = prompt("¡Hola! ¿Como fue tu dia?");
    if (respuesta == "bien") {
        alert("me alegro");
    } else {
        alert("una pena");
    }
}

saludar();
saludar();

function saludar1(){
    alert("hola");
    return 3;
}

let saludo = saludar1();

document.write(saludo);
document.write("<br>");

/** PARAMETROS **/

function suma(num1, num2){
    let res = num1 + num2;
    document.write(res);
    document.write("<br>");
}

suma(12,32);
suma(22,55);


function suma(num1,num2){
    let res = num1 + num2;
    return res
}
let resultado = suma(20,25);
document.write(resultado);

function saludar2(nombre){
    let frase = `¡Hola ${nombre}! ¿Como estas?`;
    document.write(frase);
}
saludar2("Pedro");


const saludar3 = function(nombre) {
    let frase = `¡Hola ${nombre}! ¿Como estas?`;
    document.write(frase);
}
saludar3("pedro");


/** FUNCION FLECHA **/

const saludar4 = (nombre)=> {
    let frase = `¡Hola ${nombre}! ¿Como estas?`;
    document.write(frase);
}
saludar4("pedro");
// Simplificando
//const saludar4 nombre => document.write(frase);
// saludar4("pedro") //