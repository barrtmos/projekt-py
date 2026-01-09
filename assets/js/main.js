const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

const nav = document.querySelector(".nav");
const burger = document.querySelector(".burger");
const menuLinks = document.querySelectorAll(".menu__link");

function openMenu() {
  if (!nav || !burger) return;
  nav.classList.add("is-open");
  burger.setAttribute("aria-expanded", "true");
}

function closeMenu() {
  if (!nav || !burger) return;
  nav.classList.remove("is-open");
  burger.setAttribute("aria-expanded", "false");
}

function toggleMenu() {
  if (!nav) return;
  nav.classList.contains("is-open") ? closeMenu() : openMenu();
}

if (burger) {
  burger.addEventListener("click", toggleMenu);
}

menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    // закрываем меню после клика (на мобилке)
    closeMenu();
  });
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeMenu();
});

