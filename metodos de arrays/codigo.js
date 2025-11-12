/** METODOS DE ARRAYS TRANSFORMADORES **/

//POP
document.write("<b style='color:blue'><u>POP</u></b><br>");
let nombres = ["Pedro","Maria","Jorge"];

document.write("Array Original: <b>" + nombres + "</b><br>");
let resultado = nombres.pop();

document.write("Elemento removido: <b style='color:red'>" + resultado + "</b><br>");
document.write("Resultado: <b>" + nombres + "</b>");

document.write("<br><br>");

//SHIFT
document.write("<b style='color:blue'><u>SHIFT</u></b><br>");
let nombres1 = ["Pedro","Maria","Jorge"];

document.write("Array Original: <b>" + nombres1 + "</b><br>");
let resultado1 = nombres1.shift();

document.write("Elemento removido: <b style='color:red'>" + resultado1 + "</b><br>");
document.write("Resultado: <b>" + nombres1 + "</b>");

document.write("<br><br>");

//PUSH
document.write("<b style='color:blue'><u>PUSH</u></b><br>");
let nombres2 = ["Pedro","Maria","Jorge"];

document.write("Array Original: <b>" + nombres2 + "</b><br>");

let resultado2 = nombres2.push("Juan");
document.write("Elemento añadido: <b style='color:green'> Juan </b><br>");

document.write("Elemento Totales: <b>" + resultado2 + "</b><br>");
document.write("Resultado: <b>" + nombres2 + "</b>");

document.write("<br><br>");


//REVERSE
document.write("<b style='color:blue'><u>REVERSE</u></b><br>");
let numeros = [1, 2, 3, 4, 5];

document.write("Array Original: <b>" + numeros + "</b><br>");

let resultado3 = numeros.reverse();

document.write("Resultado: <b>" + resultado3 + "</b>");

document.write("<br><br>");

//UNSHIFT
document.write("<b style='color:blue'><u>UNSHIFT</u></b><br>");
let numeros2 = [3, 4, 5];

document.write("Array Original: <b>" + numeros2 + "</b><br>");

let resultado4 = numeros2.unshift(0, 1, 2);

document.write("Resultado: <b>" + resultado4 + "</b><br>");
document.write("Nuevo Array: <b>" + numeros2 + "</b><br>");

document.write("<br><br>");

//SORT
document.write("<b style='color:blue'><u>SORT</u></b><br>");
let numeros3 = [8, 6, 2, 3, 7, 4, 4, 5, 1];

document.write("Array Original: <b>" + numeros3 + "</b><br>");

let resultado5 = numeros3.sort();

document.write("Nuevo Orden: <b>" + resultado5 + "</b>");

document.write("<br><br>");

//SPLICE
document.write("<b style='color:blue'><u>SPLICE</u></b><br>");
let bestTeamWorlds2025 = ["Doran", " Cuzz", " Faker", " Gumayusi", " Keria"];

document.write("Mejor Equipo Worlds 2025: <b>" + bestTeamWorlds2025 + "</b><br>");

bestTeamWorlds2025.splice(2,2," Bdd"," deokdam");

document.write("Otra opcion a Mejor Equipo: <b>" + bestTeamWorlds2025 + "</b>");
document.write("<br><br>");


/** METODOS DE ARRAYS ACCESORES **/
//JOIN
document.write("<b style='color:blue'><u>JOIN</u></b><br>");
let rosterT1 = ["Doran", " Oner", " Faker", " Gumayusi", " Keria"];

document.write("Campeones del Mundo 2025: <b>" + rosterT1 + "</b><br>");

let resultado6 = rosterT1.join(" - ");

document.write("Campeones del Mundo 2025: <b>" + resultado6 + "</b>");

document.write("<br><br>");

//SLICE
document.write("<b style='color:blue'><u>SLICE</u></b><br>");
let boca = ["Zeballos", " Merentiel", " Delgado", " Gimenez", " Miramon", " Figal"];

document.write("Jugadores de Boca: <b>" + boca + "</b><br>");

let resultado7 = boca.slice(0,3);

document.write("Jugadores que se pueden quedar: <b>" + resultado7 + "</b>");

document.write("<br><br>");

//INCLUDES
document.write("<b style='color:blue'><u>INCLUDES</u></b><br>");
let bocaJuniors = ["Zeballos", " Merentiel", " Delgado", " Gimenez", " Miramon", " Figal"];

document.write("Jugadores de Boca: <b>" + boca + "</b><br>");

let resultado8 = bocaJuniors.includes(" Delgado");

document.write(resultado8);

document.write("<br><br>");

//INDEXOF
document.write("<b style='color:blue'><u>INDEXOF</u></b><br>");
let cabj = ["Zeballos", " Merentiel", " Delgado", " Gimenez", " Miramon", " Figal"];

document.write("Jugadores de Boca: <b>" + boca + "</b><br>");

let resultado9 = cabj.indexOf(" Delgado");

document.write(resultado9);

document.write("<br><br>");

//LASTINDEXOF
document.write("<b style='color:blue'><u>LASTINDEXOF</u></b><br>");
let clubBocaJ = ["Zeballos", " Merentiel", " Delgado", " Gimenez", " Miramon", " Figal"];

document.write("Jugadores de Boca: <b>" + boca + "</b><br>");

let resultado10 = clubBocaJ.lastIndexOf(" Delgado");

document.write(resultado10);

document.write("<br><br>");

/** METODOS DE ARRAYS DE REPETICION **/
//FILTER
document.write("<b style='color:blue'><u>FILTER</u></b><br>");
let posicionBasquet = ["Base", " Escolta", " Alero", " AlaPivot", " Pivot"];

let resultado11 = posicionBasquet.filter(posicion => posicion.length > 4);
document.write(resultado11);

document.write("<br><br>");

//FOREACH
document.write("<b style='color:blue'><u>FOREACH</u></b><br>");
let posicionBasquet1 = ["Base", " Escolta", " Alero", " AlaPivot", " Pivot"];

posicionBasquet1.forEach(posicion => document.write(posicion + "<br>"));

document.write("<br>");