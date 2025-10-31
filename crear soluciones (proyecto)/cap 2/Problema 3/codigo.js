// SUMA //
const sumar = (num1,num2)=>{
    return parseInt(num1) + parseInt(num2);
}

// RESTA //
const restar = (num1,num2)=>{
    return parseInt(num1) - parseInt(num2);
}

// DIVICION //
const dividir = (num1,num2)=>{
    return parseInt(num1) / parseInt(num2);
}

// MULTIPLICACION //
const multiplicar = (num1,num2)=>{
    return parseInt(num1) * parseInt(num2);
}

alert("¿Que operación deseas realizar?");
let operacion = prompt("1: Suma, 2: Resta, 3: División, 4: Multiplicación");

if (operacion == 1) {
    let numero1 = prompt("Primer número par sumar");
    let numero2 = prompt("Segundo número para sumar");
    resultado = sumar(numero1,numero2);
    alert(`Tu resultado es ${resultado}`);
} else if (operacion ==2){
    let numero1 = prompt("Primer número par restar");
    let numero2 = prompt("Segundo número para restar");
    resultado = restar(numero1,numero2);
    alert(`Tu resultado es ${resultado}`);
} else if (operacion ==3){
    let numero1 = prompt("Primer número par dividir");
    let numero2 = prompt("Segundo número para dividir");
    resultado = dividir(numero1,numero2);
    alert(`Tu resultado es ${resultado}`);
} else if (operacion ==4){
    let numero1 = prompt("Primer número par multiplicar");
    let numero2 = prompt("Segundo número para multiplicar");
    resultado = multiplicar(numero1,numero2);
    alert(`Tu resultado es ${resultado}`);
} else {
    alert("No se aha encontrado la Operación");
}