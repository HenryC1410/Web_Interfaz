document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('contact-form');
    const submitBtn = document.getElementById('submit-btn');
    const inputs = form.querySelectorAll('input:not([type="hidden"]), textarea');
    const termsCheckbox = document.getElementById('terms-checkbox');

    const checkInputs = () => {
        let allFilled = Array.from(inputs).every(input => input.value.trim() !== '');
        let checkboxChecked = termsCheckbox.checked;
        submitBtn.disabled = !(allFilled && checkboxChecked); 
    };

   
    inputs.forEach(input => {
        input.addEventListener('input', checkInputs);
    });

    termsCheckbox.addEventListener('change', checkInputs);

    
    form.addEventListener('submit', (e) => {
        e.preventDefault(); 
        const confirmation = confirm('¿Estás seguro de que deseas enviar este mensaje?');
        if (confirmation) {
            alert('¡Su mensaje fue enviado con éxito!');
            form.submit(); 
        } else {
            alert('El envío fue cancelado.');
        }
    });


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


function checkConnectionStatus() {
    if (!navigator.onLine) {
        
        localStorage.setItem("lastPage", window.location.href);

        
        window.location.href = "black_state.html";
    }
}


function handleReconnect() {
    if (navigator.onLine) {
        
        const lastPage = localStorage.getItem("lastPage");

        if (lastPage) {
            
            window.location.href = lastPage;
        }
    }
}


checkConnectionStatus();


window.addEventListener("offline", () => {
    checkConnectionStatus();
});

window.addEventListener("online", () => {
    handleReconnect();
});


document.addEventListener("DOMContentLoaded", () => {
    const cartCountElement = document.getElementById("cart-count");


    const cart = JSON.parse(localStorage.getItem("cart")) || [];


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

