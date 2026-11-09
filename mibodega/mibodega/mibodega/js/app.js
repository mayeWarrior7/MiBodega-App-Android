// ==========================
// MiBodega - app.js
// ==========================

// Año actual para footer
const year = new Date().getFullYear();

// Mensaje de bienvenida
console.log("MiBodega iniciada correctamente");

// Función para navegar entre páginas
function irA(pagina){
    window.location.href = pagina;
}

// Función para volver atrás
function volver(){
    history.back();
}

// Función para formatear moneda
function formatearMoneda(valor){
    return new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP'
    }).format(valor);
}

function actualizarStock(cambio){

    const stock =
    document.getElementById("stockNumero");

    let valor =
    parseInt(stock.textContent);

    valor += cambio;

    if(valor < 0){
        valor = 0;
    }

    stock.textContent = valor;
}