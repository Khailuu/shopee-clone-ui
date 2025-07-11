import { products } from "./data.js";

export function renderProductGrid(selector, keyword = "") {
  const container = document.querySelector(selector);
  if (!container) return;

  const filtered = keyword
    ? products.filter((p) =>
        p.name.toLowerCase().includes(keyword.toLowerCase())
      )
    : products;

  container.innerHTML = "";

  if (filtered.length === 0) {
    container.innerHTML = "<p>Không tìm thấy sản phẩm nào.</p>";
    return;
  }

  filtered.forEach((product) => {
    const div = document.createElement("div");
    div.classList.add("product-card");

    div.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <h3>${product.name}</h3>
      <p>₫${product.price.toLocaleString()}</p>
      <button data-id="${product.id}" class="add-to-cart">🛒 Thêm vào giỏ</button>
    `;

    container.appendChild(div);
  });
}
