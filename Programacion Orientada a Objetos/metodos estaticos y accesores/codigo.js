class Animal {
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

class Perro extends Animal {
    constructor(especie,edad,color,raza){
        super(especie,edad,color);
        this.raza = null;
    }
    set setRaza(newName){
        this.raza = newName;
    }
    get getRaza(){
        return this.raza;
    }
    static ladrar(){
        alert("¡WAW!");
    }
}

const perro = new Perro("perro", 5, "marron", "coquer");
const gato = new Animal("gato", 5, "negro");
const loro = new Animal("ave", 2, "verde");

perro.setRaza = "Pedro"
Perro.ladrar();

document.write(perro.getRaza)