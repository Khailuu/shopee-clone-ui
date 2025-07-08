import { products } from "./data.js";

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
    `;

    container.appendChild(card);
  });
}
