let cadena = "cadena de prueba";
let cadena2 = " cadena 2"
let cadena3 = "prueba";
let cadena4 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

//CONCAT
resultado = cadena.concat(cadena2);

document.write(resultado);

//STARTSWITH
resultado1 = cadena.startsWith(cadena2);

document.write(resultado1);

//ENDSWITH
resultado2 = cadena.endsWith(cadena3);

document.write(resultado2);

//INCLUDES
resultado3 = cadena.includes(cadena2);

document.write(resultado3);

//INDEXOF
resultado4 = cadena.indexOf(cadena3);

document.write(resultado4);

//LASTINDEXOF
resultado5 = cadena4.lastIndexOf("magna");

document.write(resultado5);

//PADSTART & PADEND
let cadena5 = "abc";

resultado6 = cadena5.padStart(10, "1234");
resultado7 = cadena5.padEnd(10, "1234");

document.write(resultado6);
document.write(resultado7);

//REPEAT
let cadena6 = "123 "

resultado8 = cadena.repeat(4);

document.write(resultado8);

//SPLIT
let cadena7 = "Hola, como, estas";

resultado9 = cadena7.split(",");

document.write(resultado9);

//SUBSTRING
let cadena8 = "ABCDEFG";

resultado10 = cadena8.substring(2,5)

document.write(resultado10);

//TOLOWERCASE & TOPUPPERCASE
let cadena9 = "Este domingo Springfield se juega un partido importante ante Napster";

resultado11 = cadena9.toLowerCase();
resultado12 = cadena9.toUpperCase();

document.write(resultado11);
document.write(resultado12);

//TOSTRING
let cadena10 = 50;

resultado13 = cadena10.toString();

document.write(2 + resultado13);

//TRIM, TRIMEND Y TRIMSTART
let cadena11 = "    pedro    ";

resultado14 = cadena11.trim();
resultado15 = cadena11.trimEnd();
resultado16 = cadena11.trimStart();

document.write(resultado14.length);
document.write(resultado15.length);
document.write(resultado16.length);