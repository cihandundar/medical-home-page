// REVIEWS SLIDER

var swiper = new Swiper(".reviews-swiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    620: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

// NEWS SLIDER

var swiper = new Swiper(".news-swiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    620: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

// DOCTOR SLIDER
const container = document.querySelector(".slider-container");
const sliderTrack = document.querySelector(".slider-track");
const doctorBoxes = document.querySelectorAll(".box");
const circles = document.querySelectorAll(".circle-item");

let currentIndex = 0;

function getItemsPerPage() {
  const width = window.innerWidth;
  if (width <= 480) {
    return 1;
  } else if (width <= 768) {
    return 2;
  } else {
    return 3;
  }
}

function updateSlider() {
  const itemsPerPage = getItemsPerPage();
  const boxWidth = container.offsetWidth / itemsPerPage;
  sliderTrack.style.transform = `translateX(-${currentIndex * boxWidth}px)`;

  circles.forEach((circle, i) => {
    if (i === currentIndex / itemsPerPage) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });
}

circles.forEach((circle, index) => {
  circle.addEventListener("click", () => {
    currentIndex = index * getItemsPerPage();
    updateSlider();
  });
});

window.addEventListener("resize", updateSlider);

updateSlider();

// HERO SLIDER
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
