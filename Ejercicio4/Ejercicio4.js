document.getElementById("Boton").addEventListener("click",ComprobarCampos,false);

function ComprobarCampos(){
    let usuario = document.getElementById("usuario").value;
    let contrasena = document.getElementById("contrasena").value;
    let errores = "";
    let capaErrores = document.getElementsByClassName(".errores")

    if(!usuario.match(/^[A-Z].*[0-9]$/)) errores += "El usuario no es correcto, tiene que ser primera mayuscula y la ultima un numero"; //No funciona pero si que entra en el if
    if(!contrasena.match(/^[0-9].*[A-Z]{8,8}$/)) alert("Contraseña no valida");










    capaErrores.innerHTML = errores;
}