document.getElementById("Boton").addEventListener("click",ComprobarCampos,false);

function ComprobarCampos(){
    usuario = document.getElementById("usuario").value;
    contrasena = document.getElementById("contrasena").value;
    alert(usuario)
}