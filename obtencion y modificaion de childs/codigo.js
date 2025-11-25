const contenedor = document.querySelector(".contenedor");

const primerHijo = contenedor.firstChild;
console.log(primerHijo);

const ultimoHijo = contenedor.lastChild;
console.log(ultimoHijo);

const primerElementoHijo = contenedor.firstElementChild;
console.log(primerElementoHijo);

const ultimoElementoHijo = contenedor.lastElementChild;
console.log(ultimoElementoHijo);

const hijos = contenedor.childNodes;
console.log(hijos);

const hijos1 = contenedor.children;
for (hijo of hijos1){
    console.log(hijo);
}