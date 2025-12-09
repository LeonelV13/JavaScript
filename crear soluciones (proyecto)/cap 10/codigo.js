const sendButton = document.getElementById('snd-nota');

sendButton.addEventListener("click",()=>{
    let resultado,mensaje;
    try {
        prevRes = parseInt(document.getElementById('nota').value);
        if (isNaN(prevRes)) {
            throw "Gracioso";
        }
        mensaje = definirMensaje(prevRes);
        resultado = verificarAprobacion(8,5,prevRes);
    } catch(e){
        resultado = "¿SOS GRACIOSO?";
        mensaje = "He descubierto que intentaste hackear el sitio";
    }
    abrirModal(resultado,mensaje);
});

const definirMensaje = (pr)=>{
    let resultado;
    switch(pr) {
        case 1: resultado = "Aplazo";
        break;
        case 2: resultado = "Aplazo";
        break;
        case 3: resultado = "Aplazo";
        break;
        case 4: resultado = "Desaprobado";
        break;
        case 5: resultado = "Desaprobado";
        break;
        case 6: resultado = "Bien";
        break;
        case 7: resultado = "Bien";
        break;
        case 8: resultado = "Muy Bien";
        break;
        case 9: resultado = "Muy Bien";
        break;
        case 10: resultado = "Exelente";
        break;
        default: resultado = null;
    }
    return resultado;
}

const verificarAprobacion = (nota1,nota2,prevRes)=> {
    promedio = (nota1 + nota2 +prevRes) / 3;
    if (promedio >= 7) {
        return "<span class='green'>Aprobado</span>";
    }
    return "<span class='red'>Desaprobado</span>";
}

const abrirModal = (res,msg)=>{
    document.querySelector(".resultado").innerHTML = res;
    document.querySelector(".mensaje").innerHTML = msg;
    let modal = document.querySelector(".modal-background");
    modal.style.display = "flex";
    modal.style.animation = "aparecer 1s forwards"
}