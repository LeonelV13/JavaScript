class Persona {
    constructor(nombre,instagram){
        this.nombre = nombre;
        this.instagram = instagram;
    }
}

const datosPersonas = [
    ["Brandon Villegas","@josedeodo"],
    ["Morena Beltran","@morenabeltran10"],
    ["Lionel Messi","@leomessi"],
    ["Marta Diaz"]
];

const personas = [];

for (let i = 0; i < datosPersonas.length; i++) {
    personas[i] = new Persona(datosPersonas[i][0],datosPersonas[i][1]);
}

const obtenerPersonas = (id)=> {
    return new Promise((resolve,reject)=>{
        if (presonas[id] == undefined) reject("No se ha encontrado la Persona");
        else {resolve(personas[id])}
    });
}

const obtenerInstagram = (id) =>{
    return new Promise ((resolve,reject)=>{
        if (pesonas[id].instagram == undefined) reject("No se ha encontrado el Instagram");
        else {resolve(personas[id].instagram)}
    });
}

let id = 1;
obtenerPersonas(id).then((persona)=>{
    console.log(persona.nombre);
    return obtenerInstagram(id);
}).then((instagram)=>{
    console.log(instagram);
}).catch((e)=>{
    console.log(e);
});

/** EJEMPLO DE PROMESAS **/
/**
let nombre = "Pedri";

const promesa = new Promise((resolve,reject)=>{
    if (nombre!== "Pedro") reject("Lo siento, el nombre no es Pedro");
    else resolve(nombre);
});

promesa.then((resultado)=>{
    console.log(resultado);
}).catch((e)=>{
    console.log(e);
});
*/