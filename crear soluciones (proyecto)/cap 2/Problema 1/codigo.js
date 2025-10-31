let free = false;

const validarCliente = (time)=>{
    let edad = prompt("¿Cual es tu edad?")
    if (edad > 18){
        if (time >= 2 && time < 7 && free == false) {
            alert("Podes pasar gratis, ya que sos la primer persona despues de las 2AM.");
            free = true;
        } else {
            alert(`Son las ${time}:00Hs y podes pasar, pero tenes que pagar la entrada`);
        }
    }else {
        alert("Sos menor de edad, por ende no podes pasar.");
    }
}

validarCliente(23);
validarCliente(24);
validarCliente(1);
validarCliente(2);
validarCliente(3);