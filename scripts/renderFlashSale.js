import { flashProducts } from "./data.js";

export function renderFlashSale(selector) {
  const container = document.querySelector(selector);
  container.innerHTML = "";

  flashProducts.forEach((item) => {
    const card = document.createElement("div");
    card.className = "flash-item";

    card.innerHTML = `
      <img src="${item.image}" alt="${item.name}" />
      <p class="price-old">₫${item.priceOld.toLocaleString()}</p>
      <p class="price-sale">₫${item.priceSale.toLocaleString()}</p>
    `;

    container.appendChild(card);
  });
}
