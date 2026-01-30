"use strict";

const archivo = document.getElementById('archivo');
archivo.addEventListener("change",(e)=>{
    leerArchivo(archivo.files);
    leerArchivoImg(archivo.files);
})

const leerArchivo = ar => {
    for (let i = 0; i < ar.length; i++) {
        if (ar[i].type === "application/json" || ar[i].type === "text/plain") {
            const reader = new FileReader();
            reader.readAsText(ar[i]);
            reader.onload = e => {
                const contenido = e.target.result;
                try {
                    const data = JSON.parse(contenido);
                    console.log("JSON:", data);
                } catch {
                    console.log("TEXTO:", contenido);
                }
            };
        }
    }
};



const leerArchivoImg = files => {
    const fragment = document.createDocumentFragment();
    const contenedor = document.querySelector(".resultado");
    for (let i = 0; i < files.length; i++) {
        if (files[i].type.startsWith("image/")) {
            const reader = new FileReader();
            reader.readAsDataURL(files[i]);
            reader.addEventListener("load", e => {
                const img = document.createElement("img");
                img.src = e.currentTarget.result;
                fragment.appendChild(img);
                contenedor.appendChild(fragment);
            });
        }
    }
};

