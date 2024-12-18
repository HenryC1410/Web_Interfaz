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

// Seleccionar todos los botones de "Agregar al Carrito"
document.querySelectorAll('.btn-add-cart').forEach(button => {
    button.addEventListener('click', () => {
        const productCard = button.closest('.product-card');
        const productId = button.getAttribute('data-id');
        const productName = productCard.querySelector('h3').textContent;
        const productPrice = productCard.querySelector('p').textContent.replace('Precio: $', '');
        const productImage = productCard.querySelector('img').src;

        // Crear el objeto del producto
        const product = {
            id: productId,
            name: productName,
            price: parseFloat(productPrice),
            image: productImage
        };

        // Obtener el carrito del localStorage o inicializarlo si está vacío
        const cart = JSON.parse(localStorage.getItem('cart')) || [];

        // Comprobar si el producto ya está en el carrito
        const existingProduct = cart.find(item => item.id === productId);
        if (existingProduct) {
            alert('Este producto ya está en el carrito.');
            return;
        }

        // Agregar el producto al carrito
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));

        // Actualizar el contador del carrito
        updateCartCount();

        alert('Producto agregado al carrito');
    });
});

// Actualizar el contador del carrito al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();
});

// Función para actualizar el contador del carrito
function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartCount = cart.length;
    const cartBadge = document.getElementById('cart-count');
    if (cartCount > 0) {
        cartBadge.textContent = cartCount;
        cartBadge.classList.remove('hidden');
    } else {
        cartBadge.textContent = '0';
        cartBadge.classList.add('hidden');
    }
}

renderProducts(currentPage);


// Script para manejar las funcionalidades dinámicas

document.addEventListener("DOMContentLoaded", () => {
    const products = [
        { id: 1, name: "Pastel de Chocolate", category: "postres", image: "pastel-chocolate.jpg" },
        { id: 2, name: "Café Espresso", category: "bebidas", image: "cafe-espresso.jpg" },
        { id: 3, name: "Brownie Clásico", category: "postres", image: "brownie-clasico.jpg" },
        { id: 4, name: "Té Helado", category: "bebidas", image: "te-helado.jpg" },
        { id: 5, name: "Churros", category: "snacks", image: "churros.jpg" },
        { id: 6, name: "Limonada", category: "bebidas", image: "limonada.jpg" },
        { id: 7, name: "Gelatina de Fresa", category: "postres", image: "gelatina-fresa.jpg" },
        { id: 8, name: "Capuchino", category: "bebidas", image: "capuchino.jpg" },
        { id: 9, name: "Dona de Chocolate", category: "postres", image: "dona-chocolate.jpg" },
        { id: 10, name: "Jugo de Naranja", category: "bebidas", image: "jugo-naranja.jpg" },
        { id: 11, name: "Panecillo Dulce", category: "snacks", image: "panecillo-dulce.jpg" },
        { id: 12, name: "Smoothie de Mango", category: "bebidas", image: "smoothie-mango.jpg" },
        { id: 13, name: "Cupcake Vainilla", category: "postres", image: "cupcake-vainilla.jpg" },
        { id: 14, name: "Latte", category: "bebidas", image: "latte.jpg" },
        { id: 15, name: "Tartaleta de Frutas", category: "postres", image: "tartaleta-frutas.jpg" },
        { id: 16, name: "Té Verde", category: "bebidas", image: "te-verde.jpg" },
        { id: 17, name: "Galletas Chispas", category: "snacks", image: "galletas-chispas.jpg" },
        { id: 18, name: "Malteada de Fresa", category: "bebidas", image: "malteada-fresa.jpg" },
        { id: 19, name: "Cheesecake", category: "postres", image: "cheesecake.jpg" },
        { id: 20, name: "Agua de Coco", category: "bebidas", image: "agua-coco.jpg" },
        { id: 21, name: "Pretzel Salado", category: "snacks", image: "pretzel-salado.jpg" },
        { id: 22, name: "Frappé de Chocolate", category: "bebidas", image: "frappe-chocolate.jpg" },
        { id: 23, name: "Pastel de Zanahoria", category: "postres", image: "pastel-zanahoria.jpg" },
        { id: 24, name: "Té Chai", category: "bebidas", image: "te-chai.jpg" }
    ];

    const productGrid = document.getElementById("product-grid");
    const searchInput = document.getElementById("search");
    const categorySelect = document.getElementById("category");
    const pagination = document.getElementById("pagination");

    const ITEMS_PER_PAGE = 6;
    let currentPage = 1;

    function renderProducts(filteredProducts) {
        productGrid.innerHTML = "";
        const start = (currentPage - 1) * ITEMS_PER_PAGE;
        const end = start + ITEMS_PER_PAGE;
        const paginatedProducts = filteredProducts.slice(start, end);

        paginatedProducts.forEach(product => {
            const productCard = document.createElement("div");
            productCard.className = "product-card";
            productCard.innerHTML = `
                <img src="images/${product.image}" alt="${product.name}" class="product-image">
                <div class="product-details">
                    <h3>${product.name}</h3>
                    <p>Precio: $${(Math.random() * 50 + 5).toFixed(2)}</p>
                    <button class="btn-details" data-id="${product.id}">Ver más</button>
                </div>
            `;
            productGrid.appendChild(productCard);
        });
    }

    function renderPagination(totalItems) {
        pagination.innerHTML = "";
        const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

        for (let i = 1; i <= totalPages; i++) {
            const button = document.createElement("button");
            button.textContent = i;
            button.className = currentPage === i ? "active" : "";
            button.addEventListener("click", () => {
                currentPage = i;
                filterProducts();
            });
            pagination.appendChild(button);
        }
    }

    function filterProducts() {
        const searchTerm = searchInput.value.toLowerCase();
        const selectedCategory = categorySelect.value;

        let filteredProducts = products.filter(product => {
            const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
            const matchesSearch = product.name.toLowerCase().includes(searchTerm);
            return matchesCategory && matchesSearch;
        });

        renderProducts(filteredProducts);
        renderPagination(filteredProducts.length);
    }

    searchInput.addEventListener("input", filterProducts);
    categorySelect.addEventListener("change", filterProducts);

    productGrid.addEventListener("click", (e) => {
        if (e.target.classList.contains("btn-details")) {
            const productId = e.target.dataset.id;
            const product = products.find(p => p.id == productId);
            if (product) {
                alert(`Detalles del producto:\n\nNombre: ${product.name}\nCategoría: ${product.category}`);
            }
        }
    });

    // Inicializar
    filterProducts();
});

