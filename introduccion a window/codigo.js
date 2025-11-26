let youtubeURL = "https://youtube.com";

let ventana = window.open(youtubeURL);

ventana.close();

ventana.closed();

ventana.stop();

alert("Hola");

print();

prompt("Dame un dato");

respuesta = confirm("¿Estas seguro que quiere salir del sitio web?");
console.log(respuesta);

//SCREEN
const screen = window.screen;
console.log(screen);
document.write(screen.availHeight);
document.write("<br>");
document.write(screen.availWidth);
document.write("<br><br>");


const screenLeft = window.screenLeft;
const screenTop = window.screenTop;
document.write(`Left: <b>${screenLeft}</b><br>
                Top: <b>${screenTop}</b>
    `);

const scrollX = window.scrollX;
const scrollY = window.scrollY;
alert("X:" + scrollX + " Y:" + scrollY);

window.scroll(0,100);
window.scrollTo(0,400);

