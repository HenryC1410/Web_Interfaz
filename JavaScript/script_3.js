
const searchInput = document.getElementById('search');
const searchIcon = document.querySelector('.buscar ion-icon');


function redirectToProducts() {
    const searchValue = searchInput.value;
    window.location.href = `HTML/Productos.html?query=${encodeURIComponent(searchValue)}`;
}

searchInput.addEventListener('click', redirectToProducts);
searchIcon.addEventListener('click', redirectToProducts);

searchInput.addEventListener('input', (event) => {
    const query = event.target.value.toLowerCase();

    const elements = document.querySelectorAll('body *');

    elements.forEach(element => {
        if (element.textContent.toLowerCase().includes(query)) {
            element.style.backgroundColor = 'yellow'; 
        } else {
            element.style.backgroundColor = '';
        }
    });
});
