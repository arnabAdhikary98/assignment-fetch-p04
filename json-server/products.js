const mainContent = document.getElementById('main-content');
const userInfo = document.getElementById('user-info');

// Function to display products
function displayProducts(products) {
    mainContent.innerHTML = '';
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML = `
            <img src="${product.src}" alt="${product.title}">
            <h3>${product.title}</h3>
            <p>Price: $${product.price}</p>
            <p>Ratings: ${product.ratings}</p>
            <div class='button'>
            <button class="add-to-cart" onclick="addToCart(${product.id})">Add to Cart</button>
            <button class="remove-from-cart" onclick="removeFromCart(${product.id})">Remove from Cart</button>
            </div>
        `;
        mainContent.appendChild(productCard);
    });
}

// Function to fetch products from JSON Server
async function fetchProducts() {
    try {
        const response = await fetch('http://localhost:3000/products');
        const products = await response.json();
        displayProducts(products);
    } catch (error) {
        console.error('Error fetching products:', error);
    }
}

// Function to fetch user info and display in header
async function fetchUserInfo() {
    try {
        const response = await fetch('http://localhost:3000/users/2');
        const user = await response.json();
        userInfo.textContent = `Logged In: ${user.name}`;
    } catch (error) {
        console.error('Error fetching user info:', error);
    }
}

// Function to initialize the app
async function init() {
    await fetchProducts();
    await fetchUserInfo();
}

init();