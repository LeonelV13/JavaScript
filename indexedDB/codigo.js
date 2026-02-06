"use strict";

const IDBRequest = indexedDB.open("DataBase",1);

IDBRequest.addEventListener("upgradeneeded",()=>{
    const db = IDBRequest.result;
    db.createObjectStore("nombres",{
        autoIncrement: true
    });
})

IDBRequest.addEventListener("success",()=> {
    console.log("Todo salio correctamente");
})

IDBRequest.addEventListener("error",()=>{
    console.log("Ocurrio un error al abrir la Base de Datos");
})

const addObjeto = objeto => {
    const IDBData = getIDBData("readwrite","Objeto agregado correctamente");
    IDBData.add(objeto);
}

const leerObjetos = ()=>{
    const IDBData = getIDBData("readonly");
    const cursor = IDBData.openCursor();
    cursor.addEventListener("success",()=>{
        if (cursor.result){
            console.log(cursor.result.value);
            cursor.result.continue();
        } else console.log("Todos los datos fueron leidos");
    })
}

const modificarObjeto = (key,objeto) => {
    const IDBData = getIDBData("readwrite","Objeto modificado correctamente");
    IDBData.put(objeto,key);
}

const eliminarObjeto = key => {
    const IDBData = getIDBData("readwrite","Objeto eliminado correctamente");
    IDBData.delete(key);
}

const getIDBData = (mode,msg) =>{
    const db = IDBRequest.result;
    const IDBtransaction = db.transaction("nombres",mode);
    const objectStore = IDBtransaction.objectStore("nombres");
    IDBtransaction.addEventListener("complete",()=>{
        console.log(msg);
    })
    return objectStore;
}