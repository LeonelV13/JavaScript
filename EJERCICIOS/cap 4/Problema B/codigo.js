const obtenerInformacion = (materia)=>{
    materias = {
        Fisica: ["Perez","Pedro","Mariano","Maria","Sofia"],
        Programacion: ["Hernandez","Pedro","Juan","Sofia"],
        Logica: ["Sanchez","Pedro","Juan","Mariano","Maria","Sofia"],
        Quimica: ["Juarez","Pedro","Juan","Mariano","Maria"]
    }
    if (materias[materia] !== undefined){
        return [materias[materia],materia,materias];
    } else {
        return materias;
    }
}
const mostrarInformacion = (materia)=>{
    let informacion = obtenerInformacion(materia);

    if (informacion !== false) {
        let profesor = informacion[0][0];
        let alumnos = informacion[0];
        alumnos.shift();
        document.write(`El Profesor de <b>${informacion[1]}</b>: <b style='color:red'>${profesor}</b><br>
            Los Alumnos son: <b style='color:blue'>${alumnos}</b><br><br>
            `);
    }
}

const cantidadDeClases = (alumno)=>{
    let informacion = obtenerInformacion();
    let clasesPresentes = [];
    let cantidadTotal = 0;
    for (info in informacion) {
        if (informacion[info].includes(alumno)) {
            cantidadTotal++;
            clasesPresentes.push(" " + info);
        }
    }
    return `<b style='color:blue'>
    ${alumno}</b> está en <b>${cantidadTotal} clases: <b  style='color:green'>${clasesPresentes}</b>
    <br><br>
    `;
}

mostrarInformacion("Fisica");
mostrarInformacion("Programacion");
mostrarInformacion("Logica");
mostrarInformacion("Quimica");

document.write(cantidadDeClases("Mariano"));
document.write(cantidadDeClases("Pedro"));