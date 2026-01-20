const materias = {
    Fisica: [90,7,3,"Fisica"],
    Matematicas: [100,9,2,"Matematicas"],
    Logica: [75,6,4,"Logica"],
    Quimica: [91,7,4,"Quimica"],
    Calculo: [96,9,3,"Calculo"],
    Programacion: [80,10,4,"Programacion"],
    Biologia: [85,6,2,"Biologia"],
    Algebra: [98,7,1,"Algebra"],
    Ingles: [100,8,4,"Ingles"]
}

const aprobo = ()=>{
    for (materia in materias){
        let asistencias = materias[materia][0];
        let promedio = materias[materia][1];
        let trabajos = materias[materia][2];
        console.log(materias[materia][3]);
        if (asistencias >= 90) {
            console.log("%c   Asistencias en orden","color:green");
        } else {
            console.log("%c   Falta de Asistencias","color:red");
        }
        if (promedio >= 7) {
            console.log("%c   Promedio en orden","color:green");
        } else {
            console.log("%c   Promedio desaprobado","color:red");
        }
        if (trabajos >= 3) {
            console.log("%c   Trabajos Practicos en orden");
        } else {
            console.log("%c   Faltan Trabajos Practicos","color:red");
        }
    }
}