
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


document.addEventListener("DOMContentLoaded", () => {
    const cartCountElement = document.getElementById("cart-count");

    // Obtener los productos del carrito almacenados en localStorage
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Función para actualizar la cantidad en el contador
    function updateCartCount() {
        const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
        if (totalItems > 0) {
            cartCountElement.textContent = totalItems;
            cartCountElement.classList.remove("hidden");
        } else {
            cartCountElement.classList.add("hidden");
        }
    }

    updateCartCount();

});
