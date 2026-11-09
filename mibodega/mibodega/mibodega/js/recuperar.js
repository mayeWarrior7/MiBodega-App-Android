const recoveryForm =
document.getElementById("recoveryForm");

if(recoveryForm){

    recoveryForm.addEventListener("submit", function(e){

        e.preventDefault();

        alert("Correo enviado correctamente");

    });

}