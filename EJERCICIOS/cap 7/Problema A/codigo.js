let alto = window.screen.height;
let ancho = window.screen.width;

comprar = confirm(`El Alto es: ${alto} y el Ancho es: ${ancho}`);

if (comprar) {
    alert("Compra realizada exitosamente");
} else {
    alert("Compra cancelada");
}