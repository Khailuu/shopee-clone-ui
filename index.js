const bannerImage = document.getElementById("banner-image");

// list banner
const banners = ["./imgs/banner1.png", "./imgs/banner2.webp"];

let currentIndex = 0;

setInterval(() => {
  currentIndex = (currentIndex + 1) % banners.length;
  bannerImage.style.opacity = 0;

  setTimeout(() => {
    bannerImage.src = banners[currentIndex];
    bannerImage.style.opacity = 1;
  }, 300);
}, 3000);
