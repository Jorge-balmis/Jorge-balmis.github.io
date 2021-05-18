'use strict';
loadDocA("mensaje.txt","txt");


function gestionarFicheroTXT(cadena){
    // let mensajes = new Array;
    let mensajes = cadena.split("\n");
    let main = document.querySelector("main");
    let fila = "";

    for(let i = 0; i < mensajes.length; i++){
        if(i%2 == 0){
            fila += "<div class = 'Izquierda'><div class = 'TextoEmisor'>" + mensajes[i] + "</div></div>"; 
        }
        else{
            fila += "<div class = 'Derecha'> <div class = 'TextoReceptor'>" + mensajes[i] + "</div></div>"; 
        }
    }
    main.innerHTML = fila;
}