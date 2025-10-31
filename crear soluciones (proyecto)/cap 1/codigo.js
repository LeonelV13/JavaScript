dineroMartin = prompt("cuanto dinero tienes Martin?");
dineroLeonel = prompt("cuanto dinero tienes Leonel");
dineroValdez = prompt("cuanto dinero tienes Valdez");

dineroMartin = parseInt(dineroMartin);

if (dineroMartin >= 0.6 && dineroMartin < 1) {
    alert("Martin comprate el helado de agua");
    alert("y te sobran" + (dineroMartin - 0.6));
}
else if (dineroMartin >= 1 && dineroMartin < 1.6) {
    alert("Martin comprate el helado de crema");
    alert("y te sobran" + (dineroMartin - 1));
}
else if (dineroMartin >= 1.6 && dineroMartin < 1.7) {
    alert("Martin comprate el helado de heladix");
    alert("y te sobran" + (dineroMartin - 1.6));
}
else if (dineroMartin >= 1.7 && dineroMartin < 1.8) {
    alert("Martin comprate el helado de heladovich");
    alert("y te sobran" + (dineroMartin - 1.7));
}
else if (dineroMartin >= 1.8 && dineroMartin < 2.9) {
    alert("Martin comprate el helado de helardo");
    alert("y te sobran" + (dineroMartin - 1.9));
}
else if (dineroMartin >= 2.9) {
    alert("Martin comprate el helado con confites o el pote de 1/4kg");
    alert("y te sobran" + (dineroMartin - 2.9));
} else {
    alert("Martin lo siento, no te alcanaza para ningun helado");
}


if (dineroLeonel >= 0.6 && dineroLeonel < 1) {
    alert("Leonel comprate el helado de agua");
}
else if (dineroLeonel >= 1 && dineroLeonel < 1.6) {
    alert("Leonel comprate el helado de crema");
}
else if (dineroLeonel >= 1.6 && dineroLeonel < 1.7) {
    alert("Leonel comprate el helado de heladix");
}
else if (dineroLeonel >= 1.7 && dineroLeonel < 1.8) {
    alert("Leonel comprate el helado de heladovich");
}
else if (dineroLeonel >= 1.8 && dineroLeonel < 2.9) {
    alert("Leonel comprate el helado de helardo");
}
else if (dineroLeonel >= 2.9) {
    alert("Leonel comprate el helado con confites o el pote de 1/4kg");
} else {
    alert("Leonel lo siento, no te alcanaza para ningun helado");
}


if (dineroValdez >= 0.6 && dineroValdez < 1) {
    alert("Valdez comprate el helado de agua");
}
else if (dineroValdez >= 1 && dineroValdez < 1.6) {
    alert("Valdez comprate el helado de crema");
}
else if (dineroValdez >= 1.6 && dineroValdez < 1.7) {
    alert("Valdez comprate el helado de heladix");
}
else if (dineroValdez >= 1.7 && dineroValdez < 1.8) {
    alert("Valdez comprate el helado de heladovich");
}
else if (dineroValdez >= 1.8 && dineroValdez < 2.9) {
    alert("Valdez comprate el helado de helardo");
}
else if (dineroValdez >= 2.9) {
    alert("Valdez comprate el helado con confites o el pote de 1/4kg");
} else {
    alert("Valdez lo siento, no te alcanaza para ningun helado");
}