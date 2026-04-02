"use strict";

/*
 * Dynamic behavior of the page:
 * - toggle the hamburger menu (mobile),
 * - switch between the light and dark themes,
 * - swap the illustration according to the active theme.
 */

const page = document.body;
const navToggle = document.querySelector(".nav__toggle");
const navList = document.querySelector(".nav__list");
const themeButtons = document.querySelectorAll(".nav__button");
const themeToggleButton = document.querySelector("#theme-toggle");
const themeImage = document.querySelector("#theme-illustration");

/*
 * Each theme carries its illustration and the matching text
 * alternative, so the image never ends up with a stale `alt`.
 */
const THEMES = {
  light: {
    image: "img/theme-light.svg",
    alt: "Sunny beach with a palm tree.",
  },
  dark: {
    image: "img/theme-dark.svg",
    alt: "Night landscape with a full moon and stars.",
  },
};

/* ~~~ Theme switching */

function currentTheme() {
  return page.classList.contains("page--dark") ? "dark" : "light";
}

function applyTheme(themeName) {
  page.classList.toggle("page--dark", themeName === "dark");

  themeImage.src = THEMES[themeName].image;
  themeImage.alt = THEMES[themeName].alt;

  // Reflect the active choice for assistive technologies
  themeButtons.forEach((button) => {
    const isActive = button.dataset.theme === themeName;
    button.setAttribute("aria-pressed", String(isActive));
  });
}

themeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    applyTheme(button.dataset.theme);
    closeMenu();
  });
});

themeToggleButton.addEventListener("click", () => {
  applyTheme(currentTheme() === "dark" ? "light" : "dark");
});

/* ~~~ Hamburger menu */

function openMenu() {
  navList.classList.add("nav__list--open");
  navToggle.setAttribute("aria-expanded", "true");
}

function closeMenu() {
  navList.classList.remove("nav__list--open");
  navToggle.setAttribute("aria-expanded", "false");
}

navToggle.addEventListener("click", () => {
  const isOpen = navToggle.getAttribute("aria-expanded") === "true";

  if (isOpen) {
    closeMenu();
  } else {
    openMenu();
  }
});

// Close the menu with the Escape key and give focus
// back to the hamburger button (keyboard accessibility)
document.addEventListener("keydown", (event) => {
  const isOpen = navToggle.getAttribute("aria-expanded") === "true";

  if (event.key === "Escape" && isOpen) {
    closeMenu();
    navToggle.focus();
  }
});
