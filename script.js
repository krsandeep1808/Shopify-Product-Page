// JavaScript for the Shopify product page

// Change main image when thumbnails are clicked
function changeMainImage(element) {
    const mainImage = document.getElementById('mainImage');
    mainImage.src = element.src.replace('w=100&h=100', 'w=600&h=600');
    const thumbnails = document.querySelectorAll('.thumbnail');
    thumbnails.forEach(thumbnail => thumbnail.classList.remove('active'));
    element.classList.add('active');
}

// Update purchase option in UI
function updatePurchaseOption() {
    const purchaseType = document.querySelector('input[name="purchaseType"]:checked').value;
    const subscriptionPricing = document.getElementById('subscriptionPricing');
    const subscriptionFrequency = document.getElementById('subscriptionFrequency');
    const cartButtonPrice = document.getElementById('cartButtonPrice');
    const currentPrice = document.getElementById('currentPrice');
    const includedItems = document.getElementById('includedItems');

    if (purchaseType === 'subscription') {
        subscriptionPricing.style.display = 'block';
        subscriptionFrequency.style.display = 'block';
        cartButtonPrice.textContent = '$18.74';
        
        // Update What's Included for subscription
        includedItems.innerHTML = `
            <li>12 pieces of premium artisan chocolate delivered monthly</li>
            <li>Elegant gift box packaging</li>
            <li>Flavor profile guide with each delivery</li>
            <li>Free shipping on all subscription orders</li>
            <li>25% discount on every order</li>
            <li>Skip or cancel anytime</li>
            <li>Exclusive subscriber-only flavors</li>
        `;
    } else {
        subscriptionPricing.style.display = 'none';
        subscriptionFrequency.style.display = 'none';
        cartButtonPrice.textContent = currentPrice.textContent;
        
        // Update What's Included for one-time purchase
        includedItems.innerHTML = `
            <li>12 pieces of premium artisan chocolate</li>
            <li>Elegant gift box packaging</li>
            <li>Flavor profile guide</li>
            <li>Free shipping on orders over $50</li>
        `;
    }
}

// Select flavor (single click)
function selectFlavor(element) {
    const flavors = document.querySelectorAll('.flavor-btn');
    flavors.forEach(flavor => flavor.classList.remove('active'));
    element.classList.add('active');
}

// Double-click to deselect flavor
function handleFlavorDoubleClick(element) {
    if (element.classList.contains('active')) {
        element.classList.remove('active');
    }
}

// Update frequency selection
function updateFrequency() {
    const frequency = document.getElementById('frequencySelect').value;
    console.log('Delivery frequency updated to:', frequency);
}

// Change quantity
function changeQuantity(amount) {
    const quantityInput = document.getElementById('quantity');
    let quantity = parseInt(quantityInput.value, 10) + amount;
    quantity = Math.max(1, Math.min(10, quantity));
    quantityInput.value = quantity;
    updateQuantity();
}

// Update quantity
function updateQuantity() {
    const quantity = document.getElementById('quantity').value;
    const cartButtonPrice = document.getElementById('cartButtonPrice');
    let price = parseFloat(cartButtonPrice.textContent.replace('$', ''));
    const originalPrice = 24.99;
    price = originalPrice * quantity;
    cartButtonPrice.textContent = `$${price.toFixed(2)}`;
}

// Add to cart
function addToCart() {
    const cartModal = document.getElementById('cartModal');
    const cartProductName = document.getElementById('cartProductName');
    const cartFlavor = document.getElementById('cartFlavor');
    const cartQuantity = document.getElementById('cartQuantity');
    const cartPrice = document.getElementById('cartPrice');
    const cartType = document.getElementById('cartType');
    const productTitle = document.querySelector('.product-title');
    const activeFlavor = document.querySelector('.flavor-btn.active');
    const quantity = document.getElementById('quantity').value;
    const price = document.getElementById('cartButtonPrice').textContent;
    const type = document.querySelector('input[name="purchaseType"]:checked').parentElement.textContent.trim();

    // Check if a flavor is selected
    if (!activeFlavor) {
        alert('Please select a flavor before adding to cart.');
        return;
    }

    cartProductName.textContent = productTitle.textContent;
    cartFlavor.textContent = activeFlavor.textContent;
    cartQuantity.textContent = quantity;
    cartPrice.textContent = price;
    cartType.textContent = type.split('-')[0].trim();

    // Update cart count
    updateCartCount(parseInt(quantity));

    cartModal.classList.add('fade-in');
    cartModal.style.display = 'block';
}

// Update cart count (simulate cart functionality)
function updateCartCount(quantityToAdd = 0) {
    const cartCountElement = document.querySelector('.cart-count');
    let currentCount = parseInt(cartCountElement.textContent) || 0;
    currentCount += quantityToAdd;
    cartCountElement.textContent = currentCount;
}

// Close cart modal
function closeCartModal() {
    const cartModal = document.getElementById('cartModal');
    cartModal.style.display = 'none';
}

// View cart (not yet implemented)
function viewCart() {
    alert('View Cart functionality is not implemented yet');
}

