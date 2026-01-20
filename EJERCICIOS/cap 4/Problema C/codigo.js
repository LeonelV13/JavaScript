let materias = {
    Fisica: ["Perez","Pedro","Mariano","Maria","Sofia"],
    Programacion: ["Hernandez","Pedro","Juan","Sofia"],
    Logica: ["Sanchez","Pedro","Juan","Mariano","Maria","Sofia"],
    Quimica: ["Juarez","Pedro","Juan","Mariano","Maria"]
}

const inscribir = (alumno,materia)=>{
    personas = materias[materia];
    if (personas.length >= 21) {
        document.write(`Lo siento <b>${alumno}</b>, las clases de <b>${materia}</b> ya estan llenas`);
    } else {
        personas.push(alumno);
        if (materia == "Fisica") {
            materias = {
                Fisica: personas,
                Programacion: materias['Programacion'],
                Logica: materias['Logica'],
                Quimica: materias['Quimica']
            }
        }
        else if (materia == "Programacion") {
            materias = {
                Fisica: materias['Fisica'],
                Programacion: personas,
                Logica: materias['Logica'],
                Quimica: materias['Quimica']
            }
        }
        else if (materia == "Logica") {
            materias = {
                Fisica: materias['Fisica'],
                Programacion: materias['Programacion'],
                Logica: personas,
                Quimica: materias['Quimica']
            }
        }
        else if (materia == "Quimica") {
            materias = {
                Fisica: materias['Fisica'],
                Programacion: materias['Programacion'],
                Logica: materias['Logica'],
                Quimica: personas
            }
        }
        document.write(`¡Felicidades ${alumno}! te has inscrito a ${materia} correctamente.`)
    }
}

document.write(materias['Fisica'] + "<br>")

inscribir("Fernando","Fisica");
inscribir("Micaela","Fisica");
inscribir("Jose","Fisica");
inscribir("Leandro","Fisica");
inscribir("Lorena","Fisica");
inscribir("Mirka","Fisica");
inscribir("Simon","Fisica");
inscribir("Gaston","Fisica");
inscribir("Rodrigo","Fisica");
inscribir("Clara","Fisica");
inscribir("Maira","Fisica");
inscribir("Samanta","Fisica");
inscribir("Hernan","Fisica");
inscribir("Aaron","Fisica");
inscribir("Karen","Fisica");
inscribir("Diego","Fisica");
inscribir("Candela","Fisica");

document.write("<br>" + materias['Fisica'])