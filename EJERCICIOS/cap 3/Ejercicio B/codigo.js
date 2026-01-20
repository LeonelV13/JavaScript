class Celular{
    constructor(color, peso, tamaño, rdc, ram){
        this.color = color;
        this.peso = peso;
        this.tamaño = tamaño;
        this.resolucionDeCamara = rdc;
        this.memoriaRam = ram;
        this.encendido = false;
    }
    presionarBotonEncendido(){
        if (this.encendido == false) {
            alert("Celular prendido");
            this.encendido = true;
        } else {
            alert("Celular apagado");
            this.encendido = false;
        }
    }
    reiniciar(){
        if (this.encendido == true) {
            alert("reiniciando celular");
        } else {
            alert("el celular está apagado");
        }
    }
    tomarFoto(){
        alert(`foto tomada en una resolucion de: ${this.resolucionDeCamara}`);
    }
    grabarVideo(){
        alert(`grabando video en ${this.resolucionDeCamara}`)
    }
    mobileInfo(){
        return `
        Color: <b>${this.color}</b><br>
        Peso: <b>${this.peso}</b><br>
        Tamaño: <b>${this.tamaño}</b><br>
        Resolucion de Video: <b>${this.resolucionDeCamara}</b><br>
        Memoria Ram: <b>${this.memoriaRam}</b><br>
        `;
    }
}

class CelularAltaGama extends Celular {
    constructor(color, peso, tamaño, rdc, ram, rdce){
        super(color, peso, tamaño, rdc, ram);
        this. resolucionDeCamaraExtra = rdce;
    }
    grabarVideoLento(){
        alert("estas grabando en camara lenta")
    }
    reconocimientoFacial(){
        alert("vamos a iniciar un reconocimiento facial");
    }
    infoAltaGama(){
        return this.mobileInfo() + `Resolucion de Camara Extra: ${this.resolucionDeCamaraExtra}`;
    }
}

//const celular1 = new Celular("Plateado", "150g", "5'", "Full HD", "2GB");
//const celular2 = new Celular("Negro", "155g", "5.4'", "HD", "3GB");
//const celular3 = new Celular("Blanco", "140g", "5.9'", "Full HD", "4GB");

//document.write(`
//    ${celular1.mobileInfo()} <br>
//    ${celular2.mobileInfo()} <br>
//    ${celular3.mobileInfo()} <br>
//`);

//celular1.presionarBotonEncendido();
//celular1.tomarFoto();
//celular1.grabarVideo();
//celular1.reiniciar();
//celular1.presionarBotonEncendido();

const celular1 = new CelularAltaGama("Blanco","130g","5.2'","4K","4GB","FULL HD");
const celular2 = new CelularAltaGama("Negro","145g","6'","4K","4GB","HD");

document.write(`
    ${celular1.infoAltaGama()} <br><br>
    ${celular2.infoAltaGama()} <br>
`);