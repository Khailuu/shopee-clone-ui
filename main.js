import { renderProductGrid } from "./scripts/renderProducts.js";
import { renderFlashSale } from "./scripts/renderFlashSale.js";
import { startCountdown } from "./scripts/countdown.js";
import { renderCartModal, updateCartCount } from "./scripts/cart.js";

document.addEventListener("DOMContentLoaded", () => {
  renderProductGrid(".product-grid");
  renderFlashSale(".flash-products");
  startCountdown("countdown", 3600); 
  updateCartCount();

  const cartIcon = document.querySelector(".cart");
  const cartModal = document.getElementById("cart-modal");
  const closeBtn = document.getElementById("close-cart");

  cartIcon.addEventListener("click", () => {
    renderCartModal();
    cartModal.classList.remove("hidden");
  });

  closeBtn.addEventListener("click", () => {
    cartModal.classList.add("hidden");
  });
});