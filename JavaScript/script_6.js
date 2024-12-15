
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

function showSection(sectionId) {
    const sections = document.querySelectorAll('.user-menu > div');
    sections.forEach(section => section.classList.add('hidden'));
    document.getElementById(sectionId).classList.remove('hidden');
    const links = document.querySelectorAll('.sidebar a');
    links.forEach(link => link.classList.remove('active'));
    event.target.classList.add('active');
}

function saveChanges() {
    alert("Cambios guardados correctamente.");
}

function updatePassword() {
    const newPassword = document.getElementById('new-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    if (newPassword !== confirmPassword) {
        alert("Las contraseñas no coinciden.");
        return;
    }
    alert("Contraseña actualizada correctamente.");
}

function saveNotifications() {
    const email = document.getElementById('email-notifications').checked;
    const sms = document.getElementById('sms-notifications').checked;
    alert(`Notificaciones actualizadas:\nEmail: ${email}\nSMS: ${sms}`);
}


function showSection(sectionId) {
    const sections = document.querySelectorAll('.user-menu > div');
    sections.forEach(section => section.classList.add('hidden'));
    document.getElementById(sectionId).classList.remove('hidden');
    const links = document.querySelectorAll('.sidebar a');
    links.forEach(link => link.classList.remove('active'));
    event.target.classList.add('active');
}

function saveChanges() {
    alert("Cambios guardados correctamente.");
}

function updatePassword() {
    const newPassword = document.getElementById('new-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    if (newPassword !== confirmPassword) {
        alert("Las contraseñas no coinciden.");
        return;
    }
    alert("Contraseña actualizada correctamente.");
}

function saveNotifications() {
    const email = document.getElementById('email-notifications').checked;
    const sms = document.getElementById('sms-notifications').checked;
    alert(`Notificaciones actualizadas:\nEmail: ${email}\nSMS: ${sms}`);
}


function toggleDropdown() {
    const dropdown = document.querySelector('.dropdown-options');
    dropdown.classList.toggle('hidden');
}

function selectPaymentMethod(method) {
    const selectedOption = document.querySelector('.selected-option');
    const dropdown = document.querySelector('.dropdown-options');

    let icon;
    let label;

    switch (method) {
        case 'paypal':
            icon = '<ion-icon name="logo-paypal"></ion-icon>';
            label = 'PayPal';
            break;
        case 'debit-card':
            icon = '<ion-icon name="card-outline"></ion-icon>';
            label = 'Tarjeta Débito';
            break;
        case 'transfer':
            icon = '<ion-icon name="swap-horizontal-outline"></ion-icon>';
            label = 'Transferencia';
            break;
    }

    selectedOption.innerHTML = `${icon} ${label}`;
    dropdown.classList.add('hidden');
}

const cerrarSesionButton = document.querySelector('.hidden.cer button');

cerrarSesionButton.addEventListener('click', (event) => {
    event.preventDefault(); 
    logoutOverlay.style.display = 'flex'; // Muestra el overlay
});
