let frutas = ["banana","manzana","pera","frutilla","durazno"];

document.write(frutas[1])

let escuderia = {
    nombre: "Red Bull Racing",
    motor: "Honda",
    piloto1: "Max Verstappen",
    piloto2: "Yuki Tsunoda"
};

let equipo = ["Red Bull Racing","Honda","Max Verstappen","Yuki Tsunoda"];
let nombre = escuderia["nombre"];
let motor = escuderia["motor"];
let piloto1 = escuderia["piloto1"];
let piloto2 = escuderia["piloto2"];

frase = `El nombre de la escuderia es: <b>${nombre}</b> <br>
        El motor es: <b>${motor}</b> <br>
        El primer piloto es: <b>${piloto1}</b> <br>
        El segundo piloto es: <b>${piloto2}</b> <br>`;

document.write(frase);