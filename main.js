import { renderProductGrid } from "./scripts/renderProducts.js";
import { renderFlashSale } from "./scripts/renderFlashSale.js";
import { startCountdown } from "./scripts/countdown.js";

document.addEventListener("DOMContentLoaded", () => {
  renderProductGrid(".product-grid");
  renderFlashSale(".flash-products");
  startCountdown("countdown", 3600); 
});