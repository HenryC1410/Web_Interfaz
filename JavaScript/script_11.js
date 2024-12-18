// Obtener todos los productos
const products = [
    ...document.querySelectorAll('.product-card'),
];


const productsPerPage = 6;
let currentPage = 1;


const productGrid = document.querySelector('.product-grid');
const pageIndicator = document.getElementById('pageIndicator');
const prevPageButton = document.getElementById('prevPage');
const nextPageButton = document.getElementById('nextPage');

function renderProducts(page) {

    const startIndex = (page - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;

    
    productGrid.innerHTML = '';

   
    const productsToShow = products.slice(startIndex, endIndex);
    productsToShow.forEach(product => {
        productGrid.appendChild(product);
    });

    
    pageIndicator.textContent = page;

    
    prevPageButton.disabled = page === 1;
    nextPageButton.disabled = endIndex >= products.length;
}


prevPageButton.addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        renderProducts(currentPage);
    }
});

nextPageButton.addEventListener('click', () => {
    if (currentPage * productsPerPage < products.length) {
        currentPage++;
        renderProducts(currentPage);
    }
});

// Seleccionamos los botones
const btnDetails = document.querySelector('.btn-details');
const btnAddCart = document.querySelector('.btn-add-cart');

// Asignamos eventos de clic
btnDetails.addEventListener('click', () => {
    // Redirige a en_proceso.html
    window.location.href = 'en_proceso.html';
});

btnAddCart.addEventListener('click', () => {
    // Redirige a en_proceso.html
    window.location.href = 'en_proceso.html';
});
