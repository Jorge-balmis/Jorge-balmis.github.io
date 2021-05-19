
let Elemento = document.getElementById("Boton")// [0].addEventListener("click",ComprobarCampos);
// alert(Elemento); //Parece que funciona
Elemento.addEventListener("click",ComprobarCampos,false);

function ComprobarCampos(){
    EtiquetaEmail = document.getElementById("email");
    email = document.getElementById("email").value;
    EtiquetaContrasena = document.getElementById("contrasena");
    contrasena = document.getElementById("contrasena").value;
    // alert("Email: "+ email + " Contraseña: " + contrasena);
    // console.log("Email: "+ email + " Contraseña: " + contrasena);

    // let EstensionEmail = Email.split("@"); //dice que split no es una funcion, voy a usar includes, mejor 
    // alert("Extension de email" + EstensionEmail[1]);
    // console.log("Extension de email" + EstensionEmail[1]);
    if(email.includes("@iesdoctorbalmis.com")){
        // alert("Tu email es del dominio del Doctor balmis");
        if(!isNaN(contrasena) && contrasena > 9999999 && contrasena < 100000000){
            alert("Todo correcto");
        }
        else{
            alert("Contraseña no valida, recuerda que tiene que ser 8 digitos");
        }
    }
    else{
        // EtiquetaEmail.className = ".input:invalid";
        alert("Losiento solo son validas los emails del dominio doctor balmis")
    }
    
    //     if(!isNaN(Contrasena) && Contrasena.length == 8){
    //         return true;
    //    }
    //     return false;
    // alert("Holaaaaaaaaaaaa");
}