'use strict';
function GestionarFicheroXML(fichero,tipo){
    if(tipo == "xml"){
        ArrayETIQUETAS = new Array;
        ArrayETIQUETAS[0] = fichero.GetElementByTag("libreria").childNodes[1].firstChild.nodeValue //E    sto n os deberia de sacar el padre de todos 
        alert(ArrayETIQUETAS[0]);
    }
    else{
        alert("Extension no valida");
    }
}