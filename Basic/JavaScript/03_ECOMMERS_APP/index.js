document.addEventListener('DOMContentLoaded', () => {
  let cart = {}; // Object format: { 'p1': { name: 'Product 1', price: 29.99, count: 1 } }
  let totalPrice = 0;

  const totalPriceElement = document.getElementById('total-price');
  const cartListElement = document.getElementById('cart-list');
  const actionButtons = document.querySelectorAll('.action-btn');
  const checkoutBtn = document.getElementById('checkout-btn');

  // Modal elements
  const modal = document.getElementById('popup-modal');
  const modalMessage = document.getElementById('modal-message');
  const closeModalBtn = document.getElementById('close-popup-btn');

  // Function to render cart items list on screen
  function updateCartUI() {
    cartListElement.innerHTML = '';

    const itemKeys = Object.keys(cart);
    if (itemKeys.length === 0) {
      cartListElement.innerHTML = '<p class="empty-msg">No items added yet.</p>';
      return;
    }

    itemKeys.forEach((id) => {
      const item = cart[id];
      const itemRow = document.createElement('div');
      itemRow.className = 'cart-item';
      
      // Exact format requested: Product Name ($Price) xCount
      itemRow.innerHTML = `
        <span class="item-details">${item.name} ($${item.price.toFixed(2)})</span>
        <span class="cart-item-count">x${item.count}</span>
      `;
      cartListElement.appendChild(itemRow);
    });
  }

  // Handle "Add to Cart" button click
  actionButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
      const card = e.target.closest('.product-card');
      const productId = card.dataset.id;
      const productName = card.dataset.name;
      const priceSpan = card.querySelector('.product-info span');
      const price = parseFloat(priceSpan.textContent);

      // Check if product is already added
      if (cart[productId]) {
        cart[productId].count += 1; // Just increment count
      } else {
        cart[productId] = {
          name: productName,
          price: price,
          count: 1
        };
      }

      // Update total price and UI
      totalPrice += price;
      totalPriceElement.textContent = totalPrice.toFixed(2);
      updateCartUI();
    });
  });

  // Handle Checkout Click
  checkoutBtn.addEventListener('click', () => {
    if (totalPrice === 0) {
      modalMessage.textContent = 'Your cart is empty! Please add items before checking out.';
    } else {
      modalMessage.textContent = `Order Placed Successfully! Total paid: $${totalPrice.toFixed(2)}`;

      // Reset cart data after order placement
      cart = {};
      totalPrice = 0;
      totalPriceElement.textContent = '0.00';
      updateCartUI();
    }

    modal.classList.remove('hidden');
  });

  // Close popup modal
  closeModalBtn.addEventListener('click', () => {
    modal.classList.add('hidden');
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.add('hidden');
    }
  });
});