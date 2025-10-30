let numero = 0;

/** IF **/
if (numero < 10) {
    numero++;
    numero++;

    document.write(numero + "<br>");
}
document.write("<br>");

/** WHILE **/
while (numero < 6) {
    numero++;
    document.write(numero + "<br>");
}
document.write("<br>");

/** DO WHILE **/
do {
    numero++;
    document.write(numero + "<br>");
} while (numero <=6);
document.write("<br>");

/** BREAK **/
while(numero < 1000) {
    numero++;
    document.write(numero);
    if (numero == 1) {
        break;
    }
}

for(let i = 0; i < 20; i++) {
    if(i == 12) {
        break;
    }
    document.write(i + "<br>");
}
document.write("<br>");

/** FOR **/
for(let i = 0; i < 6; i++) {
    document.write(i + "<br>");
}
document.write("<br>");

/** CONTINUE **/
for(let i = 0; i < 5; i++) {
    if(i == 3) {
        continue;
    }
    document.write(i + "<br>");
}
document.write("<br>");

/** FOR IN & FOR OF **/
let animales = ["gato", "perro", "loro"];

for (animal in animales) {
    document.write(animal + "<br>");
}
    document.write("<br>");

for (animal of animales){
    document.write(animal + "<br>");
}
document.write("<br>");

/** LABEL **/
array1 = ["maria","josefa","roberta"];
array2 = ["pedro","marcelo",array1,"jose"];

forK:
for (array in array2) {
    if (array == 2) {
        for (let array of array1) {
            document.write(array + "<br>");
            break forK;
        }
    } else {
        document.write(array2[array ] + "<br>");
    }
}