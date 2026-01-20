let alumnos = [{
    nombre: "Martín Valdez",
    email: "leovaldezm99@gmail.com",
    materia: "Literatura"
},{
    nombre: "Mirka Gutierrez",
    email: "mirka98@gmail.com",
    materia: "Algebra"
},{
    nombre: "Guille Gusman",
    email: "chapogusman@gmail.com",
    materia: "Psicologia"
},{
    nombre: "Hernan Cala",
    email: "calahernan@gmail.com",
    materia: "Contabilidad Basica"
},{
    nombre: "Milagros Castro",
    email: "milicastro@gmail.com",
    materia: "Fisica"
}];

const contenedor = document.querySelector(".grid-container")
const boton = document.querySelector(".boton-confirmar");

let htmlCode = "";
for (alumno in alumnos){
    let datos = alumnos[alumno];
    let nombre = datos["nombre"];
    let email = datos["email"];
    let materia = datos["materia"];
    htmlCode += `
    <div class="grid-item nombre">${nombre}</div>
    <div class="grid-item email">${email}</div>
    <div class="grid-item materia">${materia}</div>
    <div class="grid-item semana">
        <select class="semana-elegida">
            <option value="Semana 1">Semana 1</option>
            <option value="Semana 2">Semana 2</option>
        </select>
    </div>`;
}

contenedor.innerHTML = htmlCode;

boton.addEventListener("click",()=>{
    let confirmar = confirm("¿Realmente quieres confirmar las mesas?");
    if (confirmar) {
        document.body.removeChild(boton);
        let elementos = document.querySelectorAll(".semana");
        let semanasElegidas = document.querySelectorAll(".semana-elegida");
        for (elemento in elementos){
            semana = elementos[elemento];
            semana.innerHTML = semanasElegidas[elemento].value;
        }
    }
});