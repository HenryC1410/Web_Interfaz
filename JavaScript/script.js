document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('contact-form');
    const submitBtn = document.getElementById('submit-btn');
    const inputs = form.querySelectorAll('input:not([type="hidden"]), textarea');
    const termsCheckbox = document.getElementById('terms-checkbox');

    // Función para verificar si todos los campos y el checkbox están completos
    const checkInputs = () => {
        let allFilled = Array.from(inputs).every(input => input.value.trim() !== '');
        let checkboxChecked = termsCheckbox.checked;
        submitBtn.disabled = !(allFilled && checkboxChecked); // Habilita o deshabilita el botón
    };

    // Evento de entrada para validar en tiempo real
    inputs.forEach(input => {
        input.addEventListener('input', checkInputs);
    });

    termsCheckbox.addEventListener('change', checkInputs);

    // Evento al enviar el formulario
    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Previene el envío automático
        const confirmation = confirm('¿Estás seguro de que deseas enviar este mensaje?');
        if (confirmation) {
            alert('¡Su mensaje fue enviado con éxito!');
            form.submit(); // Envía el formulario manualmente
        } else {
            alert('El envío fue cancelado.');
        }
    });

    // Verificar estado inicial
    checkInputs();
});


const profileIcon = document.getElementById('profile-icon');
const profileMenu = document.getElementById('profile-menu');


profileIcon.addEventListener('click', (event) => {
    event.preventDefault(); 
    profileMenu.classList.toggle('show');
});


document.addEventListener('click', (event) => {
    if (!profileIcon.contains(event.target) && !profileMenu.contains(event.target)) {
        profileMenu.classList.remove('show');
    }
});



// Referencias a los elementos
const logoutOverlay = document.getElementById('logout-overlay');
const overlayContent = document.querySelector('.overlay-content');
const confirmLogout = document.getElementById('confirm-logout');
const cancelLogout = document.getElementById('cancel-logout');
const logoutOption = document.getElementById('logout-option'); 


logoutOption.addEventListener('click', (event) => {
    event.preventDefault(); 
    profileMenu.classList.remove('show'); 
    logoutOverlay.style.display = 'flex'; 
});


cancelLogout.addEventListener('click', () => {
    logoutOverlay.style.display = 'none'; 
});


confirmLogout.addEventListener('click', () => {

    window.location.href = '../index.html';
});


logoutOverlay.addEventListener('click', (event) => {
    if (!overlayContent.contains(event.target)) {
        logoutOverlay.style.display = 'none'; 
    }
});

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
