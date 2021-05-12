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
    console.log(tabla);

    for(let i = 0; i < libros.length; i++){
        tabla.innerHTML += "<div class = 'fila'>" + libros[i].textContent + "</div>"; // ERROR Aqui: Uncaught TypeError: Cannot read property 'innerHTML' of null
    }


    alert(xmlDoc);
	
}
