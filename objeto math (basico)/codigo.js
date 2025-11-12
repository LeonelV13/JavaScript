/** ------ OBJETO MATH ------ **/
document.write("<b style='color:blue'><u>OBJETO MATH</u></b><br><br>");
/** METODOS **/
document.write("<b style='color:blue'><u>Metodos</u></b><br><br>");
//SQRT
document.write("<b style='color:blue'>● Sqrt</b><br>");
document.write("Numero: <b>25</b><br>")

let numero = Math.sqrt(25);
document.write("Resultado: <b>" + numero + "</b>");
document.write("<br><br>");

//CBRT
document.write("<b style='color:blue'>● Cbrt</b><br>");
document.write("Numero: <b>25</b><br>")

let numero1 = Math.cbrt(25);
document.write("Resultado: <b>" + numero1 + "</b>");
document.write("<br><br>");

//MAX
document.write("<b style='color:blue'>● Max</b><br>");
document.write("Numeros: <b>4, 1, 6, 12, 65, 846, 90</b><br>")

let numero2 = Math.max(4,1,6,12,65,846,90);
document.write("Resultado: <b>" + numero2 + "</b>");
document.write("<br><br>");

//MIN
document.write("<b style='color:blue'>● Min</b><br>");
document.write("Numeros: <b>4, 1, 6, 12, 65, 846, 90</b><br>")

let numero3 = Math.min(4,1,6,12,65,846,90);
document.write("Resultado: <b>" + numero3 + "</b>");
document.write("<br><br>");

//RANDOM
document.write("<b style='color:blue'>● Random</b><br>");

let numero4 = Math.random();
document.write("Resultado: <b>" + numero4 + "</b>");
document.write("<br><br>");

//ROUND
document.write("<b style='color:blue'>● Round</b><br>");

let numero5 = Math.random()*100;
document.write("Numero: <b>" + numero5 + "</b><br>")
numero5 = Math.round(numero5);

document.write("Resultado: <b>" + numero5 + "</b>");
document.write("<br><br>");

//FLOOR
document.write("<b style='color:blue'>● Floor</b><br>");

let numero6 = Math.random()*100;
document.write("Numero: <b>" + numero6 + "</b><br>")
numero6 = Math.floor(numero6);

document.write("Resultado: <b>" + numero6+ "</b>");
document.write("<br><br>");

//FROUND
document.write("<b style='color:blue'>● Fround</b><br>");

document.write("Numero: <b>9.7599999999999999</b><br>")

let numero7 = Math.fround(9.759999999999999999);
document.write("Resultado: <b>" + numero7 + "</b>");
document.write("<br><br>");

//TRUNC
document.write("<b style='color:blue'>● Trunc</b><br>");
document.write("Numero: <b>9.7599999999999999</b><br>")

let numero8 = Math.trunc(9.759999999999999999);
document.write("Resultado: <b>" + numero8 + "</b>");
document.write("<br><br>");

/** PROPIEDADES **/
document.write("<b style='color:blue'><u>Propiedades</u></b><br><br>");
//PI
document.write("<b style='color:blue'>● PI</b><br>");
let numero9 = Math.PI;

document.write(numero9);

document.write("<br><br>");

//SQRT1_2
document.write("<b style='color:blue'>● SQRT1_2</b><br>");
let numero10 = Math.SQRT1_2;

document.write(numero10);

document.write("<br><br>");

//SQRT2
document.write("<b style='color:blue'>● SQRT2</b><br>");
let numero11 = Math.SQRT2;

document.write(numero11);

document.write("<br><br>");

//E
document.write("<b style='color:blue'>● E</b><br>");
let numero12 = Math.E;

document.write(numero12);

document.write("<br><br>");

//LN2
document.write("<b style='color:blue'>● LN2</b><br>");
let numero13 = Math.LN2;

document.write(numero13);

document.write("<br><br>");

//LN10
document.write("<b style='color:blue'>● LN10</b><br>");
let numero14 = Math.LN10;

document.write(numero14);

document.write("<br><br>");

//LOG2E
document.write("<b style='color:blue'>● LOG2E</b><br>");
let numero15 = Math.LOG2E;

document.write(numero15);

document.write("<br><br>");

//LOG10E
document.write("<b style='color:blue'>● LOG10E</b><br>");
let numero16 = Math.LOG10E;

document.write(numero16);

document.write("<br><br>");