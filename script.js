// script.js
const openBtn = document.getElementById("menu-open-button");
const closeBtn = document.getElementById("menu-close-button");
const body = document.body;

openBtn.addEventListener("click", () => {
  body.classList.add("show-mobile-menu");
});

closeBtn.addEventListener("click", () => {
  body.classList.remove("show-mobile-menu");
});
