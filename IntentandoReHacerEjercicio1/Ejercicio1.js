'use strict';
loadDocA("libros.xml","xml")
function gestionarFicheroXML(documento){
    let libreria = documento.querySelectorAll("libreria")
    alert("Objeto documento" + documento)
    alert("Etiqueta Libreria posicion 0" + libreria[0])
}