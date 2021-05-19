document.getElementById("Boton").addEventListener("click",ComprobarCampos,false);

function ComprobarCampos(){
    let usuario = document.getElementById("usuario").value;
    let contrasena = document.getElementById("contrasena").value;
    let repitaContrasena = document.getElementById("contrasenaRepetida").value;
    let edad = document.getElementById("edad").value;
    
    let errores = "";
    let capaErrores = document.getElementsByClassName(".errores")
    let

    if(!usuario.match(/^[A-Z].*[0-9]$/)) errores += "<h1>El usuario no es correcto, tiene que ser primera mayuscula y la ultima un numero</h1>"; //No funciona pero si que entra en el if
    if(!contrasena.match(/^[0-9].*[A-Z]{8,8}$/)) errores += "Contraseña no valida"; //No funciona ni el if
    if(contrasena != repitaContrasena) errores += "<h1>Las contraseñas no son iguales</h1>";
    if(!isNaN(edad)) alert("La edad debe ser numerica");









    capaErrores.innerHTML = errores;
}