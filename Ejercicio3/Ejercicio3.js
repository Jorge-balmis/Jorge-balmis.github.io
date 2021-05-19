
let Elemento = document.getElementById("Boton")// [0].addEventListener("click",ComprobarCampos);
// alert(Elemento); //Parece que funciona
Elemento.addEventListener("click",ComprobarCampos,false);

function ComprobarCampos(Email, Contrasena){
    email = document.getElementById("email").value;
    contrasena = document.getElementById("contrasena").value;
    alert("Email: "+ email + " Contraseña: " + contrasena);
    // console.log("Email: "+ email + " Contraseña: " + contrasena);

    //     let finalEmail = Email.spl 
    //     if(!isNaN(Contrasena) && Contrasena.length == 8){
    //         return true;
    //    }
    //     return false;
    // alert("Holaaaaaaaaaaaa");
}