const objeto = {
    propiedad1 : "valor1",
    propiedad2 : "valor2",
    propiedad3 : "valor3"
};

const obtenerInformacion = (text)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{resolve(objeto)},Math.random()*200);
    });
}

const mostrarData = async()=>{
    data1 = await obtenerInformacion("1: Hola");
    data2 = await obtenerInformacion("2: ¿Que tal?");
    data3 = await obtenerInformacion("3: ¿Como estas?");
    console.log(data1);
    console.log(data2);
    console.log(data3);
}

mostrarData();