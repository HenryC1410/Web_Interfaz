var header = document.getElementById('header');

window.addEventListener('scroll', ()=>{

    var scroll = window.scrollY
    if(scroll>10){

        header.style.backgroundColor = '#ffc8dd'
    }else{
        header.style.backgroundColor = '#EB455F'
    }
})


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
