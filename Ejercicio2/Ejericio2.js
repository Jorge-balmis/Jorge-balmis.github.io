'use strict';
loadDocA("mensaje.txt","txt");


function gestionarFicheroTXT(cadena){
    // let mensajes = new Array;
    let mensajes = cadena.split("\n");
    let main = document.querySelector("main");
    let fila = "";

    for(let i = 0; i < mensajes.length; i++){
        if(i%2 == 0){
            fila += "<div class = 'TextoEmisor'>" + mensajes[i] + "</div>"; 
        }
        else{
            fila += "<div class = 'TextoReceptor'>" + mensajes[i] + "</div>"; 
        }
    }
    main.innerHTML = fila;
}