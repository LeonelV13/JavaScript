fetch("https://reqres.in/api/users", {
    method : "POST",
    body : `{"nombre" : "Martin", "apellido" : "Valdez"}`,
    headers: {"Content-type" : "application/json"}
}).then(res=>res.json())
    .then(res=>console.log(res));

/** Codigo Correcto de arriba

fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
        nombre: "Martin",
        apellido: "Valdez"
    }),
    headers: {
        "Content-Type": "application/json"
    }
})
.then(res => res.json())
.then(data => console.log("Respuesta:", data))
.catch(err => console.error("Error:", err));

**/

const imagen = document.querySelector(".imagen");

fetch("diferencia.png")
    .then(res=>res.blob())
    .then(img=>imagen.src = URL.createObjectURL(img))