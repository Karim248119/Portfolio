///nav///

const navbar = document.querySelector(".nav");
const navLinks = document.querySelectorAll(".nav a");
let lastScrollY = window.scrollY;
window.addEventListener("scroll", () => {
  if (window.scrollY > 10) {
    navbar.style.backgroundColor = "#212529";
  } else {
    navbar.style.backgroundColor = "transparent";
  }

  // Change position based on scroll direction
  if (window.scrollY < lastScrollY) {
    // Scrolling up
    navbar.classList.remove("absolute");
    navbar.classList.add("fixed");
  } else {
    // Scrolling down
    navbar.classList.remove("fixed");
    navbar.classList.add("absolute");
  }

  lastScrollY = window.scrollY;
});

const menuBtn = document.querySelector(".menuBtn");
const menu = document.querySelector(".menu");
const menuLinks = document.querySelectorAll(".menu a");
menuBtn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});
menuLinks.forEach((tab) => {
  tab.addEventListener("click", () => {
    menu.classList.toggle("hidden");
  });
});

///colorPalette///

const paletteContainer = document.querySelector(".palette-container");
const palette = document.querySelector(".palette");
const sideBtn = document.querySelector(".side-btn");
const buttons = document.querySelectorAll(".color-palette button");

sideBtn.addEventListener("click", () => {
  paletteContainer.classList.toggle("left-0");
  paletteContainer.classList.toggle("md:-left-48");
  paletteContainer.classList.toggle("-left-16");
});

lastClickedButton = buttons[0];
lastClickedButton.style.border = "2px solid black";

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const paletteNewCollor = window.getComputedStyle(button).backgroundColor;

    document
      .querySelector(":root")
      .style.setProperty("--main-color--", paletteNewCollor);

    lastClickedButton.style.border = "none";
    lastClickedButton = button;
    lastClickedButton.style.border = "2px solid black";
  });
});

var typed = new Typed(".job", {
  strings: ["detective", "Spy", "Author", "Musician", "Forensic Scientist"],
  loop: true,
  typeSpeed: 150,
  backSpeed: 150,
});

///carousel///

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,

    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });
});

///filter////
const allFilter = document.querySelector(".all-filter");
const hatsFilter = document.querySelector(".hats-filter");
const pipesFilter = document.querySelector(".pipes-filter");
const scarfFilter = document.querySelector(".scarf-filter");
const allProducts = document.querySelectorAll(".products div");
const hats = document.querySelectorAll(".hat");
const pipes = document.querySelectorAll(".pipe");
const scarfs = document.querySelectorAll(".scarf");
const productsContainer = document.querySelector(".products");

allFilter.addEventListener("click", () => {
  allProducts.forEach((priduct) => {
    priduct.classList.remove("filter");
  });
});

function clearFilters() {
  allProducts.forEach((product) => {
    product.classList.add("filter");
  });
}

function filter(elements) {
  elements.forEach((element) => {
    element.classList.remove("filter");
  });
}

hatsFilter.addEventListener("click", () => {
  clearFilters();
  filter(hats);
});
pipesFilter.addEventListener("click", () => {
  clearFilters();
  filter(pipes);
});
scarfFilter.addEventListener("click", () => {
  clearFilters();
  filter(scarfs);
});

///scroll-up///
document.addEventListener("DOMContentLoaded", () => {
  const topBtn = document.querySelector(".topBtn");

  window.addEventListener("scroll", () => {
    if (window.scrollY > window.innerHeight * 2) {
      topBtn.classList.add("opacity-100");
      topBtn.classList.remove("opacity-0");
    } else {
      topBtn.classList.remove("opacity-100");
      topBtn.classList.add("opacity-0");
    }
  });

  topBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});

///navColors///

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  let currentSection = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 200) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(currentSection)) {
      link.classList.add("active");
    }
  });
});
