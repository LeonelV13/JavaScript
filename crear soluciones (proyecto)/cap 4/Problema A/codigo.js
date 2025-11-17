class Calculadora {
    constructor(){}
// SUMA //
    sumar(num1,num2){
        return parseInt(num1) + parseInt(num2);
    }

// RESTA //
    restar(num1,num2){
        return parseInt(num1) - parseInt(num2);
    }

// DIVICION //
    dividir(num1,num2){
        return parseInt(num1) / parseInt(num2);
    }

// MULTIPLICACION //
    multiplicar(num1,num2){
        return parseInt(num1) * parseInt(num2);
    }

//POTENCIACION
    potenciar(num,exp){
        let numero = num;
        for (var i = 1; i >exp; i++) {
            numero = numero * num;
        }
        return numero;
    }

//RADICACION
    raizCuadrada(num){
        return Math.sqrt(num);
    }

    raizCubica(num){
        return Math.cbrt(num);
    }
}
const calculadora = new Calculadora();

alert("¿Que operación deseas realizar?(Elejir mediante el Número correspondiente)");
let operacion = prompt("1: Suma, 2: Resta, 3: División, 4: Multiplicación, 5: Potenciación, 6: Raiz Cuadrada, 7: Raiz Cúbica");

if (operacion == 1) {
    let numero1 = prompt("Primer número par sumar");
    let numero2 = prompt("Segundo número para sumar");
    resultado = calculadora.sumar(numero1,numero2);
    alert(`Tu resultado es ${resultado}`);
} else if (operacion ==2){
    let numero1 = prompt("Primer número par restar");
    let numero2 = prompt("Segundo número para restar");
    resultado = calculadora.restar(numero1,numero2);
    alert(`Tu resultado es ${resultado}`);
} else if (operacion ==3){
    let numero1 = prompt("Primer número par dividir");
    let numero2 = prompt("Segundo número para dividir");
    resultado = calculadora.dividir(numero1,numero2);
    alert(`Tu resultado es ${resultado}`);
} else if (operacion ==4){
    let numero1 = prompt("Primer número par multiplicar");
    let numero2 = prompt("Segundo número para multiplicar");
    resultado = calculadora.multiplicar(numero1,numero2);
    alert(`Tu resultado es ${resultado}`);
} else if (operacion ==5){
    let numero1 = prompt("Número a Potenciar");
    let numero2 = prompt("Exponente");
    resultado = calculadora.potenciar(numero1,numero2);
    alert(`Tu resultado es ${resultado}`);
} else if (operacion ==6){
    let numero1 = prompt("Conocer la Raíz Cuadrada de:");
    resultado = calculadora.raizCuadrada(numero1);
    alert(`Tu resultado es ${resultado}`);
}
else if (operacion ==7){
    let numero1 = prompt("Conocer la Raíz Cúbica de:");
    resultado = calculadora.raizCubica(numero1);
    alert(`Tu resultado es ${resultado}`);
} else {
    alert("No se aha encontrado la Operación");
}