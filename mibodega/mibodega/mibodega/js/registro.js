document.addEventListener("DOMContentLoaded", () => {

    const formulario = document.getElementById("registroForm");

    formulario.addEventListener("submit", (e) => {

        e.preventDefault();

        const nombre = document.getElementById("nombre").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirmPassword").value;
        const rol = document.getElementById("rol").value;

        if (password !== confirmPassword) {
            alert("Las contraseñas no coinciden");
            return;
        }

        const usuario = {
            nombre,
            email,
            password,
            rol,
            fechaRegistro: new Date().toLocaleDateString(),
            ultimoAcceso: new Date().toLocaleString()
        };

        localStorage.setItem(
            "usuario",
            JSON.stringify(usuario)
        );

        alert("Usuario registrado correctamente");

        window.location.href = "index.html";

    });

});