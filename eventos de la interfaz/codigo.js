const img = document.querySelector(".img-prueba");
const input = document.querySelector(".input-prueba");
const contenedor = document.querySelector(".seleccionado")

img.addEventListener("error",()=>{
    console.log("Ha sucedido un error");
});

window.body.addEventListener("load",()=>{
    console.log("Ha cargado el sitio");
});

addEventListener("beforeunload",()=>{
    console.log("Te estas por ir del sitio");
});

addEventListener("resize",()=>{
    console.log("Se ha actualizado la resolucion");
});

addEventListener("scroll",()=>{
    console.log("Se ha scrolleado");
});
/**
input.addEventListener("select",(e)=>{
    console.log(e.target.selectionStart);
});

input.addEventListener("select",(e)=>{
    console.log(e.target.selectionEnd);
});
**/

input.addEventListener("select",(e)=>{
    let start = e.target.selectionStart;
    let end = e.target.selectionEnd;
    let textoCompleto = input.value;
    contenedor.innerHTML = textoCompleto.substring(start,end)
});

input.addEventListener("ketup",(e)=>{
    let tecla = e.key;
    nuevoContenido = `La ultima tecla presionada fue: <b>${tecla}</b>`
    contenedor.innerHTML = nuevoContenido;
})