document.addEventListener("DOMContentLoaded", () => {
    const cartItemsContainer = document.getElementById("cart-items");
    const totalPriceElement = document.getElementById("total-price");
    const checkoutButton = document.getElementById("checkout-button");
    const clearCartButton = document.getElementById("clear-cart");

    // Cargar carrito desde el localStorage o inicializar vacío
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Renderizar el carrito
    function renderCart() {
        cartItemsContainer.innerHTML = ""; // Limpiar productos previos
        let total = 0;

        cart.forEach((item, index) => {
            total += item.price * item.quantity;

            const itemElement = document.createElement("div");
            itemElement.className = "cart-item";
            itemElement.innerHTML = `
                <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                <div class="cart-item-details">
                    <h4>${item.name}</h4>
                    <p>Precio: $${item.price.toFixed(2)}</p>
                    <div class="cart-item-quantity">
                        <button class="decrease" data-index="${index}">-</button>
                        <span>${item.quantity}</span>
                        <button class="increase" data-index="${index}">+</button>
                    </div>
                </div>
            `;
            cartItemsContainer.appendChild(itemElement);
        });

        totalPriceElement.textContent = total.toFixed(2);

        // Habilitar o deshabilitar botón de realizar pedido
        checkoutButton.disabled = cart.length === 0;
    }

    // Función para actualizar cantidad en el carrito
    function updateCart(index, action) {
        if (action === "increase") {
            cart[index].quantity++;
        } else if (action === "decrease") {
            cart[index].quantity = Math.max(1, cart[index].quantity - 1);
        }

        localStorage.setItem("cart", JSON.stringify(cart));
        renderCart();
    }

    // Vaciar carrito
    clearCartButton.addEventListener("click", () => {
        localStorage.removeItem("cart");
        cart.length = 0; // Vaciar el array
        renderCart();
    });

    // Listeners para aumentar/disminuir cantidad
    cartItemsContainer.addEventListener("click", (e) => {
        const index = e.target.dataset.index;
        if (e.target.classList.contains("increase")) {
            updateCart(index, "increase");
        } else if (e.target.classList.contains("decrease")) {
            updateCart(index, "decrease");
        }
    });

    // Inicializar el renderizado del carrito
    renderCart();
});

