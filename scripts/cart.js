import { products } from "./data.js";
import { flashProducts } from "./data.js";

const allProducts = [...products, ...flashProducts];

// Lấy giỏ hàng từ localStorage
export function getCart() {
  const cart = localStorage.getItem("cart");
  return cart ? JSON.parse(cart) : [];
}

// Lưu giỏ hàng
function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
}

// Cập nhật số lượng icon 🛒
export function updateCartCount() {
  const cart = getCart();
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  const cartIcon = document.querySelector(".cart");
  if (cartIcon) {
    cartIcon.textContent = `🛒 (${count})`;
  }
}

// Thêm sản phẩm vào giỏ
export function addToCart(productId) {
  const cart = getCart();
  const index = cart.findIndex((item) => item.id === productId);

  if (index !== -1) {
    cart[index].quantity++;
  } else {
    const product = allProducts.find((p) => p.id === productId);
    if (product) {
      cart.push({ id: product.id, name: product.name, quantity: 1 });
    }
  }

  saveCart(cart);
}

// Hiển thị giỏ hàng trong modal
export function renderCartModal() {
  const list = document.getElementById("cart-items");
  list.innerHTML = "";

  const cart = getCart();
  if (cart.length === 0) {
    list.innerHTML = "<li>🪹 Chưa có sản phẩm nào</li>";
    updateTotal(0);
    return;
  }

  let total = 0;

  cart.forEach((item, index) => {
    const li = document.createElement("li");
    const product = allProducts.find((p) => p.id === item.id);
    const price = product ? product.price : 0;
    const itemTotal = price * item.quantity;
    total += itemTotal;

    li.innerHTML = `
      <strong>${item.name}</strong><br/>
      <button class="qty-btn" data-index="${index}" data-action="minus">➖</button>
      <span class="qty">${item.quantity}</span>
      <button class="qty-btn" data-index="${index}" data-action="plus">➕</button>
      <br/>
      <small>Giá: ₫${price.toLocaleString()}</small><br/>
      <button class="delete-btn" data-index="${index}">🗑️ Xoá</button>
    `;
    list.appendChild(li);
  });

  // Gắn sự kiện tăng/giảm
  list.querySelectorAll(".qty-btn").forEach((btn) => {
    const index = parseInt(btn.dataset.index);
    const action = btn.dataset.action;

    btn.addEventListener("click", () => {
      const cart = getCart();
      if (action === "plus") cart[index].quantity++;
      else if (action === "minus" && cart[index].quantity > 1) cart[index].quantity--;
      saveCart(cart);
      renderCartModal();
    });
  });

  // Gắn sự kiện xoá
  list.querySelectorAll(".delete-btn").forEach((btn) => {
    const index = parseInt(btn.dataset.index);
    btn.addEventListener("click", () => {
      const cart = getCart();
      cart.splice(index, 1);
      saveCart(cart);
      renderCartModal();
    });
  });

  updateTotal(total);
}

// Tính tổng tiền
function updateTotal(total) {
  const totalElem = document.getElementById("cart-total");
  totalElem.textContent = `Tổng tiền: ₫${total.toLocaleString()}`;
}
