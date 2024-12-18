
function checkConnectionStatus() {
    if (!navigator.onLine) {

        localStorage.setItem("lastPage", window.location.href);

        window.location.href = "HTML/black_state.html";
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
