const button = document.querySelector(".button");
const contenedor1 = document.querySelector(".contenedor-1");
const input = document.querySelector(".input-prueba");

//button.addEventListener("click",(e)=>{
//    alert("di click en el botón");
//});

input.addEventListener("keydown",(e)=>{
    console.log("una tecla fue presionada");
})

input.addEventListener("keypress",(e)=>{
    console.log("un usuario presiono una tecla");
})

input.addEventListener("keyup",(e)=>{
    console.log("una tecla fue soltada");
})