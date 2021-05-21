'use strict';
loadDocA("libros.xml","xml")
function gestionarFicheroXML(documento){
    let busquedaLibros = documento.querySelectorAll("busquedaLibros")
    let libreria;
    let libros;
    let capaDatos = document.querySelector(".tabla");
    let datos = "";
    // alert("Objeto documento" + documento)
    // alert("Etiqueta Libreria posicion 0" + libreria[0])
    for(let i = 0; i < busquedaLibros.length; i++)//Este bucle se ira mirando toda las librerias y actualizara los datos de sus hijos
    {
        libreria = busquedaLibros.querySelectorAll("libreria")
        //Habro el div de tabla es la clase ".tabla"
        datos += "<div class='tabla'>"
        for(let j = 0; j < libreria.length; j++ )//Se recore las librerias
        {
            //Poner nombre del libro
            libro = libreria.querySelectorAll("libro")
            //Datos del libro
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