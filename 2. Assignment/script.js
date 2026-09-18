const products = [
  { id: 1, name: "Pro Laptop", price: 1200, category: "laptops", inStock: true },
  { id: 2, name: "Wireless Mouse", price: 45, category: "accessories", inStock: true },
  { id: 3, name: "Mechanical Keyboard", price: 150, category: "accessories", inStock: false },
  { id: 4, name: "Budget Laptop", price: 600, category: "laptops", inStock: true },
  { id: 5, name: "USB-C Hub", price: 30, category: "accessories", inStock: true },
];

function renderProducts(items) {
    const container = document.getElementById("product-container");

    container.innerHTML = "";

    items.forEach(function(product) {
        let card = document.createElement("div");
        card.className = "product-card";

        if (product.inStock == false) {
            card.classList.add("out-of-stock");
            card.innerHTML =
                "<h2>" + product.name + "</h2>" +
                "<p>Out of Stock</p>";
        } else {
            card.innerHTML =
                "<h2>" + product.name + "</h2>" +
                "<p>Price: $" + product.price + "</p>";
        }

        container.appendChild(card);
    });
}

renderProducts(products);
