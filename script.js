// SLIDER
var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// ACCORDION MENU
const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    if (faq.classList.contains("active")) {
      faq.classList.remove("active");
    } else {
      faqs.forEach((f) => f.classList.remove("active"));
      faq.classList.add("active");
    }
  });
});

// HAMBURGER MENU
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".header-wrapper");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(
  (n) => n.addEventListener("click"),
  () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  }
);
