// Seleciona elementos principais
const header = document.querySelector("header");
const menuBtn = document.querySelector(".menu button");
const nav = document.querySelector("nav");

// Alterna o menu no mobile
menuBtn.addEventListener("click", () => {
  header.classList.toggle("nav-open");
});

// Fecha o menu se clicar fora (em telas pequenas)
document.addEventListener("click", (e) => {
  if (
    !header.contains(e.target) &&
    header.classList.contains("nav-open")
  ) {
    header.classList.remove("nav-open");
  }
});

// Efeito do scroll (header.scrolled)
window.addEventListener("scroll", () => {
  if (window.scrollY > 80) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
