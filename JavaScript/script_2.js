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


document.querySelector(".sign-in .button").addEventListener("click", (event) => {
    event.preventDefault();
    const email = document.querySelector(".sign-in input[type='text']").value.trim();
    const password = document.querySelector(".sign-in input[type='password']").value.trim();

    if (email === "" || password === "") {
        alert("Por favor, complete todos los campos para iniciar sesión.");
    } else {
        window.location.href = "Hero_Sesion.html"; 
    }
});


document.querySelector(".sign-up .button").addEventListener("click", (event) => {
    event.preventDefault();
    const name = document.querySelector(".sign-up input[type='text']").value.trim();
    const email = document.querySelectorAll(".sign-up input[type='text']")[1].value.trim();
    const password = document.querySelector(".sign-up input[type='password']").value.trim();

    if (name === "" || email === "" || password === "") {
        alert("Por favor, complete todos los campos para registrarse.");
    } else {
        window.location.href = "Hero_Sesion.html"; 
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
