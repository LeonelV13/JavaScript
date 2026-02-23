"use strict";

addEventListener("visibilityChange",e=> {
    if (e.target.visibilityState == "visible") {
        document.write("¿Por que abandonas la página?")
    } else {
        alert("Volviste, que bueno.")
    }
})