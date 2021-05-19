document.getElementById("Boton").addEventListener("click",ComprobarCampos,false);

function ComprobarCampos(){
    let usuario = document.getElementById("usuario").value;
    let contrasena = document.getElementById("contrasena").value;
    let repitaContrasena = document.getElementById("contrasenaRepetida").value;
    let edad = document.getElementById("edad").value;
    let telefono = document.getElementById("telefono").value;
    
    let errores = "";
    let capaErrores = document.getElementsByClassName(".errores")

    if(!usuario.match(/^[A-Z].*[0-9]$/)) errores += "<h1>El usuario no es correcto, tiene que ser primera mayuscula y la ultima un numero</h1>"; //No funciona pero si que entra en el if
    if(!contrasena.match(/^[0-9].*[A-Z]{8,8}$/)) errores += "<h1>Contraseña no valida/</h1>"; //No funciona ni el if
    if(contrasena != repitaContrasena) errores += "<h1>Las contraseñas no son iguales</h1>";
    if(isNaN(edad)) errores += "<h1>La edad debe ser numerica<h1>";
    if(isNaN(telefono) || !telefono.match(/^[6,7,9]/)) errores += "<h1>El telefono no es valido, tiene que empezar por 6,7,9 y ser numerico</h1>";








    capaErrores.textContent = errores;
}