"strict mode"

const validarEdad = (msg)=>{
    let edad;
    try {
        if(msg) edad = prompt(msg);
        else edad = prompt("Introduce tu edad");
        edad = parseInt(edad);
        if (isNaN(edad)) throw "Introduce un número para la edad";
        if (edad > 18) console.log("Sos mayor de edad");
        else console.log("Sos menor de edad");
    } catch(e){
        validarEdad(e);
    }
}
validarEdad();
