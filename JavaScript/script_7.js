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
