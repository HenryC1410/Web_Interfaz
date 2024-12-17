document.addEventListener("DOMContentLoaded", () => {
    const cartContainer = document.getElementById("cart-items");
    const totalPriceElement = document.getElementById("total-price");
    const clearCartButton = document.getElementById("clear-cart");
    const checkoutButton = document.getElementById("checkout");

    function renderCart() {
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        cartContainer.innerHTML = "";

        if (cart.length === 0) {
            cartContainer.innerHTML = "<p>El carrito está vacío</p>";
            totalPriceElement.textContent = "0.00";
            return;
        }

        let total = 0;

        cart.forEach((item, index) => {
            total += item.price * item.quantity;

            const itemElement = document.createElement("div");
            itemElement.className = "cart-item";
            itemElement.innerHTML = `
                <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                <div class="cart-item-details">
                    <h3>${item.name}</h3>
                    <p>Precio: $${item.price.toFixed(2)}</p>
                    <div class="cart-item-quantity">
                        <button class="decrease" data-index="${index}">-</button>
                        <span>${item.quantity}</span>
                        <button class="increase" data-index="${index}">+</button>
                    </div>
                </div>
            `;
            cartContainer.appendChild(itemElement);
        });

        totalPriceElement.textContent = total.toFixed(2);
    }

    function updateCartQuantity(index, change) {
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        if (cart[index]) {
            cart[index].quantity += change;
            if (cart[index].quantity <= 0) {
                cart.splice(index, 1);
            }
            localStorage.setItem("cart", JSON.stringify(cart));
            renderCart();
        }
    }

    cartContainer.addEventListener("click", (e) => {
        if (e.target.classList.contains("increase")) {
            updateCartQuantity(e.target.dataset.index, 1);
        } else if (e.target.classList.contains("decrease")) {
            updateCartQuantity(e.target.dataset.index, -1);
        }
    });

    clearCartButton.addEventListener("click", () => {
        localStorage.removeItem("cart");
        renderCart();
    });

    checkoutButton.addEventListener("click", () => {
        window.location.href = "proceso_pedido.html";
    });

    renderCart();
});
