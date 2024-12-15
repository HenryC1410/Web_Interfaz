
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
    const sections = ['general', 'cambiar', 'notificaciones', 'cerrar'];
    sections.forEach(id => {
        document.getElementById(id).classList.add('hidden');
    });
    document.getElementById(sectionId).classList.remove('hidden');

    const links = document.querySelectorAll('.sidebar a');
    links.forEach(link => link.classList.remove('active'));
    event.target.classList.add('active');
}

function updateProfile() {
    alert('Los cambios del perfil han sido guardados exitosamente.');
}

function updatePassword() {
    alert('La contraseña ha sido actualizada correctamente.');
}

function updateNotifications() {
    alert('Las preferencias de notificación han sido guardadas.');
}

function logout() {
    alert('Has cerrado sesión correctamente.');
    window.location.href = '../index.html';
}
