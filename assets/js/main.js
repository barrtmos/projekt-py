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

const slider = document.querySelector("[data-slider]");
const track = document.querySelector(".slider__track");
const btnPrev = document.querySelector("[data-slider-prev]");
const btnNext = document.querySelector("[data-slider-next]");

let index = 0;

function getVisibleCount() {
  return window.matchMedia("(max-width: 900px)").matches ? 1 : 3;
}

function getMaxIndex() {
  if (!track) return 0;
  const total = track.children.length;
  return Math.max(0, total - getVisibleCount());
}

function slideTo(newIndex) {
  if (!slider || !track) return;

  const maxIndex = getMaxIndex();
  index = newIndex;

  if (index < 0) index = maxIndex;
  if (index > maxIndex) index = 0;

  const firstCard = track.children[0];
  if (!firstCard) return;

  const cardWidth = firstCard.getBoundingClientRect().width;
  const gap = 14; // как в CSS
  const offset = (cardWidth + gap) * index;

  track.style.transform = `translateX(-${offset}px)`;
}

if (btnPrev) btnPrev.addEventListener("click", () => slideTo(index - 1));
if (btnNext) btnNext.addEventListener("click", () => slideTo(index + 1));

window.addEventListener("resize", () => {
  // при ресайзе пересчитываем, чтобы не уехало
  slideTo(index);
});

// старт
slideTo(0);

