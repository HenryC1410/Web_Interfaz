// Detecta cambios en el estado de conexión
function checkConnectionStatus() {
    if (!navigator.onLine) {
        // Guarda la URL actual en localStorage
        localStorage.setItem("lastPage", window.location.href);

        // Redirige a la página de black_state.html
        window.location.href = "HTML/black_state.html";
    }
}

// Al cargar la página black_state.html
function handleReconnect() {
    if (navigator.onLine) {
        // Recupera la última página visitada desde localStorage
        const lastPage = localStorage.getItem("lastPage");

        if (lastPage) {
            // Redirige a la última página visitada
            window.location.href = lastPage;
        }
    }
}

// Verificar el estado inicial de conexión
checkConnectionStatus();

// Escuchar eventos de conexión y desconexión
window.addEventListener("offline", () => {
    checkConnectionStatus();
});

window.addEventListener("online", () => {
    handleReconnect();
});
