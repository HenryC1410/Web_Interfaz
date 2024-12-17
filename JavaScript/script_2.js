const container = document.querySelector(".container");
const btnSignIn = document.getElementById("btn-sign-in");
const btnSignUp = document.getElementById("btn-sign-up");
const logoImage = document.querySelector(".container-welcome .im img");


logoImage.addEventListener("click", () => {
    window.location.href = "../index.html";
});

btnSignIn.addEventListener("click",()=>{
    container.classList.remove("toggle");
})

btnSignUp.addEventListener("click",()=>{
    container.classList.add("toggle");
})

// Validar y redirigir desde el formulario de inicio de sesión
document.querySelector(".sign-in .button").addEventListener("click", (event) => {
    event.preventDefault();
    const email = document.querySelector(".sign-in input[type='text']").value.trim();
    const password = document.querySelector(".sign-in input[type='password']").value.trim();

    if (email === "" || password === "") {
        alert("Por favor, complete todos los campos para iniciar sesión.");
    } else {
        window.location.href = "Hero_Sesion.html"; // Redirigir si los campos están completos
    }
});

// Validar y redirigir desde el formulario de registro
document.querySelector(".sign-up .button").addEventListener("click", (event) => {
    event.preventDefault();
    const name = document.querySelector(".sign-up input[type='text']").value.trim();
    const email = document.querySelectorAll(".sign-up input[type='text']")[1].value.trim();
    const password = document.querySelector(".sign-up input[type='password']").value.trim();

    if (name === "" || email === "" || password === "") {
        alert("Por favor, complete todos los campos para registrarse.");
    } else {
        window.location.href = "Hero_Sesion.html"; // Redirigir si los campos están completos
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
