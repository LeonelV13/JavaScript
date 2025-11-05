class animal {
    constructor(especie, edad, color){
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.informacion = `Soy un ${this.especie}, tengo ${this.edad} años y soy de color ${this.color}`;
    }
    verInformacion(){
        document.write(this.informacion + "<br>")
    } 
}


let perro = new animal("perro", 7, "marron");
let gato = new animal("gato", 5, "negro");
let loro = new animal("ave", 2, "verde");

//document.write(perro.info + "<br>");
//document.write(gato.info + "<br>");
//document.write(loro.info + "<br>");
//console.log(perro);
perro.verInformacion();
gato.verInformacion();
loro.verInformacion();