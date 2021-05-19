
let Elemento = document.getElementById("Boton")
Elemento.addEventListener("click",ComprobarCampos,false);

function ComprobarCampos(){
    // EtiquetaEmail = document.getElementById("email");
    email = document.getElementById("email").value;
    // EtiquetaContrasena = document.getElementById("contrasena");
    contrasena = document.getElementById("contrasena").value;
    if(email.includes("@iesdoctorbalmis.com")){
        if(!isNaN(contrasena) && contrasena > 9999999 && contrasena < 100000000) alert("Todo correcto");
        else alert("Contraseña no valida, recuerda que tiene que ser 8 digitos");  // EtiquetaContrasena.className = ".input:invalid";
    }
    else alert("Losiento solo son validas los emails del dominio doctor balmis");// EtiquetaEmail.className = ".input:invalid";
    }
}