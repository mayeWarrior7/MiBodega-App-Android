document.addEventListener("DOMContentLoaded", () => {

    const usuario = JSON.parse(localStorage.getItem("usuario"));

document.getElementById("nombrePerfil").textContent = usuario.nombre;
document.getElementById("emailPerfil").textContent = usuario.email;
document.getElementById("rolPerfil").textContent = usuario.rol;

    if (usuario) {

        document.getElementById("nombre").value =
            usuario.nombre || "";

        document.getElementById("email").value =
            usuario.email || "";

    }

    document
        .getElementById("perfilForm")
        .addEventListener("submit", (e) => {

            e.preventDefault();

            const datosActualizados = {

                nombre: document
                    .getElementById("nombre")
                    .value,

                email: document
                    .getElementById("email")
                    .value,

                password: document
                    .getElementById("password")
                    .value || usuario.password

            };

            localStorage.setItem(
                "usuario",
                JSON.stringify(datosActualizados)
            );

            alert(
                "Datos actualizados correctamente"
            );
        const usuario =
            JSON.parse(localStorage.getItem("usuario"));

            const panelAdmin =
            document.getElementById("panelAdmin");

            if(usuario.rol === "Administrador"){
            panelAdmin.style.display = "block";
        }else{
            panelAdmin.style.display = "none";
        }
        });

});