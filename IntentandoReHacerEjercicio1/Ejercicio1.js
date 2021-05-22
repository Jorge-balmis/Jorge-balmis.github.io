'use strict';
loadDocA("libros.xml","xml")
function gestionarFicheroXML(documento){
    let libreria = documento.querySelectorAll("libreria");
    let libro;
    let capaDatos = document.querySelector("body");
    let datos = "";
    let PreciosLibro = documento.querySelectorAll("precio").textContent;
    alert(PreciosLibro.join(", "));
        for(let i = 0; i < libreria.length; i++ )//Se recore las librerias
        {
            datos += "<div class='tabla'>"

            libro = libreria[i].querySelectorAll("libro")
            datos += "<div class='nombre'>" + libreria[i].querySelector("nombre").textContent + "</div>"; 
            for(let j = 0; j < libro.length; j++){ //Datos del libro

                datos += "<div class='linea'> <div class = 'celda'>" + libro[j].querySelector("ISBN").textContent + "</div>"; 
                datos += "<div class = 'celda'>" + libro[j].querySelector("titulo").textContent + "</div>"; 
                datos += "<div class = 'celda'>" + libro[j].querySelector("nivelProfundidad").textContent + "</div>"; 
                datos += "<div class = 'celda'>" + libro[j].querySelector("autores").textContent + "</div>"; 
                datos += "<div class = 'celda'>" + libro[j].querySelector("editorial").textContent + "</div>"; 
                datos += "<div class = 'celda'>" + libro[j].querySelector("fechaPublicacion").textContent + "</div>"; 
                datos += "<div class = 'celda'>" + libro[j].querySelector("paginaWeb").textContent + "</div>"; 
                datos += "<div class = 'celda'>" + libro[j].querySelector("precio").textContent + "</div> </div>"; 
            }
            datos += "</div>";
        }
    capaDatos.innerHTML = datos;
}