import { products } from "./data.js";
import { addToCart } from "./cart.js";

export function renderProductGrid(containerSelector) {
  const container = document.querySelector(containerSelector);
  container.innerHTML = "";

  products.forEach((item) => {
    const card = document.createElement("div");
    card.className = "product-card";

    card.innerHTML = `
      <img src="${item.image}" alt="${item.name}" />
      <p class="product-name">${item.name}</p>
      <p class="product-price">₫${item.price.toLocaleString()}</p>
      <p class="product-sold">Đã bán: ${item.sold}</p>
      <button class="add-to-cart" data-id="${item.id}">🛒 Thêm vào giỏ</button>
    `;

    container.appendChild(card);
  });

  // Gắn sự kiện cho tất cả nút
  container.querySelectorAll(".add-to-cart").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const id = parseInt(e.target.dataset.id);
      addToCart(id);
    });
  });
}
