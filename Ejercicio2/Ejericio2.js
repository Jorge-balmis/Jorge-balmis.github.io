'use strict';
loadDocA("mensaje.txt","txt");


function gestionarFicheroTXT(cadena){
    // let mensajes = new Array;
    mensajes = cadena.split("\n");
    let body = document.querySelector("body");
    let fila = "";

    for(let i = 0; i < mensajes.length; i++){
        if(i%2 == 0){
            fila += "<div class = 'TextoEmisor'>" + mensajes[i] + "</div>"; 
        }
        else{
            fila += "<div class = 'TextoReceptor'>" + mensajes[i] + "</div>"; 
        }
    }
    body.innerHTML = fila;
}