'use strict';
loadDocA("Examen.xml","xml");
document.querySelector("input").addEventListener("mouseover",gestionarFicheroXML);

function gestionarFicheroXML(xmlDoc){
    // alert("Funciono");
    let body = document.querySelector("body");
    let series = xmlDoc.querySelectorAll("serie");
    let nombres = xmlDoc.querySelectorAll("nombre");
    let calificaciones = xmlDoc.querySelectorAll("calificacion");
    for(let i = 0; i < series.length; i++){
        if( i %2 == 0){
            body.innerHTML += "<div class = 'color'>" + "Serie: " + nombres[i].textContent + " Calificacion: " + calificaciones[i].textContent + "</div>";
        }
        else{
            body.innerHTML += "<div>" + "Serie: " + nombres[i].textContent + " Calificacion: " + calificaciones[i].textContent + "</div>";
        }
    }
}
