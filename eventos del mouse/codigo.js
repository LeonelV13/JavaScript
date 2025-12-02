const button = document.querySelector(".button");
const contenedor1 = document.querySelector(".contenedor-1");
const contenedor2 = document.querySelector(".contenedor-2");

button.addEventListener("click",saludar);

function saludar(){
    alert("Hola");
    button.removeEventListener("click",saludar);
}

button.addEventListener("dblclick",(e)=>{
    alert("di click en el botón");
    e.stopPropagation();
});

contenedor1.addEventListener("mouseover",(e)=>{
    alert("di click en el contenedor rojo");
},true);

contenedor2.addEventListener("mouseout",(e)=>{
    alert("di click en el contenedor azul");
});
