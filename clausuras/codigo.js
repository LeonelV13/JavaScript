"strict mode"
const cambiarTamaño = tamaño =>{
    return ()=>{
        document.querySelector(".texto").style.fontSize = `${tamaño}px`;
    }
}

px12 = cambiarTamaño(12);
px14 = cambiarTamaño(14);
px16 = cambiarTamaño(16);

document.querySelector(".t12").addEventListener("click",px12);
document.querySelector(".t14").addEventListener("click",px14);
document.querySelector(".t16").addEventListener("click",px16);

/**
const cambiarTamaño = tamaño =>{
    document.querySelector(".texto").style.fontSize = `${tamaño}px`;
}
document.querySelector(".t12").addEventListener("click",()=>cambiarTamaño(12));
document.querySelector(".t14").addEventListener("click",()=>cambiarTamaño(14));
document.querySelector(".t16").addEventListener("click",()=>cambiarTamaño(16));
**/


const suma = (a = 0,b = 0)=>{
    console.log(a+b);
}

suma(15,4);