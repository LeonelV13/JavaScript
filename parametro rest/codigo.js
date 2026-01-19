"strict mode"

const suma = (frase,...num)=>{
    let resultado = 0;
    for (let i = 0; i < num.length; i++) {
        resultado += num[i];
    }
    console.log(`${frase} ${resultado}`);
}

suma("Habitacion",15,42,4,75);