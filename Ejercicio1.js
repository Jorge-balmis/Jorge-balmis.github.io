'use strict';
loadDocA("libros.xml","xml");

/*function GestionarFicheroXML(fichero,tipo){

    if(tipo == "xml"){
        ArrayETIQUETAS = new Array;
        ArrayETIQUETAS[0] = fichero.GetElementByTag("libreria").childNodes[1].firstChild.nodeValue //E    sto n os deberia de sacar el padre de todos 
        alert(ArrayETIQUETAS[0]);
    }
    else{
        alert("Extension no valida");
    }
}*/
// let libros = xmlDoc.querySelectorAll("libro"); //sacame todo lo con el nombre libro
// let tabla = document.querySelector("tabla"); //sacame todo lo con el nombre tabla
// tabla.innerHTML += "<div class = 'fila'>"; // + libros[i].textContent </div>// te añade en el html la linea de libro, esto ira en un bucle for

function gestionarFicheroXML(xmlDoc){
    let libros = xmlDoc.querySelectorAll("libro");
    let tabla = document.querySelector(".tabla");
    let fila = ""
    //console.log(tabla);

    for(let i = 0; i < libros.length; i++){
        fila += "<div class = 'fila'>";
        console.log("Iteración " +  i +  " " + fila)
        fila += "<div class = 'celda'>" + libros[i].querySelector("ISBN").textContent + "</div>"; 
        fila += "<div class = 'celda'>" + libros[i].querySelector("titulo").textContent + "</div>"; 
        fila += "<div class = 'celda'>" + libros[i].querySelector("nivelProfundidad").textContent + "</div>"; 
        fila += "<div class = 'celda'>" + libros[i].querySelector("autores").textContent + "</div>"; 
        // tabla.innerHTML += "<div class = 'celda'>" + libros[i].querySelector("autores") + "</div>"; // tengo que hacer tambien autor?
        fila += "<div class = 'celda'>" + libros[i].querySelector("editorial").textContent + "</div>"; 
        fila += "<div class = 'celda'>" + libros[i].querySelector("fechaPublicacion").textContent + "</div>"; 
        fila += "<div class = 'celda'>" + libros[i].querySelector("paginaWeb").textContent + "</div>"; 
        fila += "<div class = 'celda'>" + libros[i].querySelector("precio").textContent + "</div> </div>"; 

    
    }

    tabla.innerHTML = fila;



    //alert(xmlDoc);
	
}
