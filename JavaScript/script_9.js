document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const productId = params.get("id");

    const products = [
        {
            id: "1",
            name: "Fresas con crema",
            image: "../imagenes/producto_1.png",
            description: "Deliciosas fresas frescas con una dulce crema de leche.",
            price: 5.0,
        },
        {
            id: "2",
            name: "Batido de fresas",
            image: "../imagenes/producto_2.jpg",
            description: "Batido de fresas con leche y esencia de vainilla.",
            price: 4.0,
        },
        {
            id: "3",
            name: "Pinchos de fresas",
            image: "../imagenes/producto_3.jpeg",
            description: "Fresas ensartadas bañadas en chocolate negro con decoración.",
            price: 6.0,
        },
    ];

    const product = products.find((item) => item.id === productId);

    if (product) {
        const productDetails = document.getElementById("product-details");
        productDetails.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>${product.description}</p>
            <p>Precio: $${product.price.toFixed(2)}</p>
            <button id="add-to-cart">Agregar al carrito</button>
        `;

        document.getElementById("add-to-cart").addEventListener("click", () => {
            const cart = JSON.parse(localStorage.getItem("cart")) || [];
            const existingProduct = cart.find((item) => item.id === product.id);

            if (existingProduct) {
                existingProduct.quantity += 1;
            } else {
                cart.push({ ...product, quantity: 1 });
            }

            localStorage.setItem("cart", JSON.stringify(cart));
            alert(`${product.name} agregado al carrito.`);
        });
    }
});
