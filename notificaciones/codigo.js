"use strict";

if (!('Notification' in window)) {
    console.log("Las Notificaciones no estan disponibles en tu navegador");
}

Notification.requestPermission(()=> {
    if (Notification.permission == "granted") {
        new Notification("1° Notificacion");
    }
});