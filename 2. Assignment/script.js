const products = [
  { id: 1, name: "Pro Laptop", price: 1200, category: "laptops", inStock: true },
  { id: 2, name: "Wireless Mouse", price: 45, category: "accessories", inStock: true },
  { id: 3, name: "Mechanical Keyboard", price: 150, category: "accessories", inStock: false },
  { id: 4, name: "Budget Laptop", price: 600, category: "laptops", inStock: true },
  { id: 5, name: "USB-C Hub", price: 30, category: "accessories", inStock: true },
];

const btnAll = document.getElementById('btn-all');
const btnLaptops = document.getElementById('btn-laptops');
const btnAccessories = document.getElementById('btn-accessories');

const container = document.getElementById('product-container');

function renderProducts(items) {
  const htmlString = items.map(item => `
    <div class="product-card ${item.inStock ? '' : 'out-of-stock'}">
      <h2>${item.name}</h2>
      <p>${item.inStock ? '$' + item.price : 'Out of Stock'}</p>
    </div>
  `).join('');

  container.innerHTML = htmlString;
}


renderProducts(products);


btnAll.addEventListener('click', () => {
  renderProducts(products);
});

btnLaptops.addEventListener('click', () => {
  const onlyLaptops = products.filter(
    p => p.category === 'laptops'
  );

  renderProducts(onlyLaptops);
});

btnAccessories.addEventListener('click', () => {
  const onlyAccessories = products.filter(
    p => p.category === 'accessories'
  );

  renderProducts(onlyAccessories);
});
