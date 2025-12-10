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

const obtenerPersonas = (id,cb)=> {
    if (personas[id] == undefined) {
        cb("No se ha encrontrado la Persona");
    } else {
        cb(null,personas[id],id);
    }
}

const obtenerInstagram = (id,cb) =>{
    if (personas[id].instagram == undefined){
        cb("No se ha encontrado el Instagram");
    } else {
        cb(null,personas[id].instagram)
    }
}

obtenerPersonas(3,(err,persona,id)=> {
    if (err){
        console.log(err);
    } else {
        console.log(persona.nombre);
        obtenerInstagram(id,(err,persona)=>{
            if (err){
                console.log(err);
            } else {
                console.log(instagram);
            }
        });
    }
});