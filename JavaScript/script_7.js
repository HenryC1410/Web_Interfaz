document.getElementById('recoverBtn').addEventListener('click', function() {
    const emailInput = document.getElementById('email'); // Referencia al campo de entrada de correo.
    const message = document.getElementById('responseMessage'); // Referencia al elemento para mostrar mensajes.

    // Validación del correo electrónico ingresado.
    if (!emailInput.value || !validateEmail(emailInput.value)) {
        message.textContent = 'Por favor, ingresa un correo válido.'; // Mensaje de error.
        message.classList.remove('hidden'); // Asegura que el mensaje sea visible.
        message.style.color = 'red';
        message.style.fontWeight ='600';
        return; // Sale de la función si el correo no es válido.
    }

    // Si el correo es válido, muestra un mensaje de éxito.
    message.textContent = 'Se ha enviado un enlace de recuperación a tu correo.'; // Mensaje de éxito.
    message.classList.remove('hidden'); // Asegura que el mensaje sea visible.
    message.style.color = 'green';
    message.style.fontWeight ='600';

    // Simula un retraso para redirigir a Inicio.html después del mensaje.
    setTimeout(() => {
        window.location.href = 'Inicio.html'; // Redirige a la página de inicio.
    }, 2000); // Espera 2 segundos antes de redirigir.

    emailInput.value = ''; // Limpia el campo de correo electrónico.
});

function validateEmail(email) {
    // Expresión regular para verificar un formato de correo válido.
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email); // Retorna `true` si el correo es válido, de lo contrario `false`.
}

// Detecta cambios en el estado de conexión
function checkConnectionStatus() {
    if (!navigator.onLine) {
        // Guarda la URL actual en localStorage
        localStorage.setItem("lastPage", window.location.href);

        // Redirige a la página de black_state.html
        window.location.href = "black_state.html";
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
