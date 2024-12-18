document.getElementById('recoverBtn').addEventListener('click', function() {
    const emailInput = document.getElementById('email');
    const message = document.getElementById('responseMessage'); 

    if (!emailInput.value || !validateEmail(emailInput.value)) {
        message.textContent = 'Por favor, ingresa un correo válido.'; 
        message.classList.remove('hidden'); 
        message.style.color = 'red';
        message.style.fontWeight ='600';
        return; 
    }

   
    message.textContent = 'Se ha enviado un enlace de recuperación a tu correo.'; 
    message.classList.remove('hidden'); 
    message.style.color = 'green';
    message.style.fontWeight ='600';

  
    setTimeout(() => {
        window.location.href = 'Inicio.html'; 
    }, 2000); 

    emailInput.value = ''; 
});

function validateEmail(email) {
   
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email); 
}


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
