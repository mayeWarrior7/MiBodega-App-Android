document.addEventListener("DOMContentLoaded", () => {

    const usuarioActual =
    JSON.parse(localStorage.getItem("usuario"));

    if(usuarioActual.rol !== "Administrador"){
        alert("Acceso denegado");
        window.location.href = "dashboard.html";
        return;
    }

    cargarUsuarios();
    let usuarios =
    JSON.parse(localStorage.getItem("usuarios")) || [];

    usuarios.push(usuario);

    localStorage.setItem(
        "usuarios",
        JSON.stringify(usuarios)
    );

    localStorage.setItem(
        "usuario",
        JSON.stringify(usuario)
    );
);


});

function cargarUsuarios(){

    const usuarios =
    JSON.parse(localStorage.getItem("usuarios")) || [];

    const tabla =
    document.getElementById("tablaUsuarios");

    tabla.innerHTML = "";

    usuarios.forEach((usuario,index)=>{

        tabla.innerHTML += `
            <tr>
                <td>${usuario.nombre}</td>
                <td>${usuario.email}</td>
                <td>${usuario.rol}</td>
                <td>

                    <button
                    onclick="cambiarRol(${index})">
                    Cambiar Rol
                    </button>

                    <button
                    onclick="eliminarUsuario(${index})">
                    Eliminar
                    </button>

                </td>
            </tr>
        `;

    });

}