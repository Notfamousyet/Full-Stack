
      document.addEventListener('DOMContentLoaded', () => {
        let cart = {}; // Stores items as { 'p1': { name: 'Product 1', price: 29.99, count: 1 } }
        let totalPrice = 0;

        const totalPriceElement = document.getElementById('total-price');
        const cartListElement = document.getElementById('cart-list');
        const actionButtons = document.querySelectorAll('.action-btn');
        const checkoutBtn = document.getElementById('checkout-btn');

        const modal = document.getElementById('popup-modal');
        const modalMessage = document.getElementById('modal-message');
        const closeModalBtn = document.getElementById('close-popup-btn');

        // Function to render the cart list items on the page
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
            
            // Format: Product 1 ($29.99) x1
            itemRow.innerHTML = `
              <span>${item.name} ($${item.price.toFixed(2)})</span>
              <span class="cart-item-count">x${item.count}</span>
            `;
            cartListElement.appendChild(itemRow);
          });
        }

        // Add to Cart Button Click Handler
        actionButtons.forEach((button) => {
          button.addEventListener('click', (e) => {
            const card = e.target.closest('.product-card');
            
            // Extract info from data attributes and span
            const productId = card.getAttribute('data-id');
            const productName = card.getAttribute('data-name');
            const priceSpan = card.querySelector('.product-info span');
            const price = parseFloat(priceSpan.textContent);

            // Update item quantity if already in cart, else add new
            if (cart[productId]) {
              cart[productId].count += 1;
            } else {
              cart[productId] = {
                name: productName,
                price: price,
                count: 1
              };
            }

            // Update total and refresh cart UI
            totalPrice += price;
            totalPriceElement.textContent = totalPrice.toFixed(2);
            updateCartUI();
          });
        });

        // Checkout Button Click Handler
        checkoutBtn.addEventListener('click', () => {
          if (totalPrice === 0) {
            modalMessage.textContent = 'Your cart is empty! Please add items before checking out.';
          } else {
            modalMessage.textContent = `Order Placed Successfully! Total paid: $${totalPrice.toFixed(2)}`;

            // Clear cart
            cart = {};
            totalPrice = 0;
            totalPriceElement.textContent = '0.00';
            updateCartUI();
          }

          modal.classList.remove('hidden');
        });

        // Close Pop-up Modal
        closeModalBtn.addEventListener('click', () => {
          modal.classList.add('hidden');
        });

        modal.addEventListener('click', (e) => {
          if (e.target === modal) {
            modal.classList.add('hidden');
          }
        });
      });
