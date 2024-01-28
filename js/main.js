const menu = document.querySelector(".top-nav__menu");
const OpenMenuBtn = document.querySelector(".open-menu");
const CloseMenuBtn = document.querySelector(".close-menu");

function toggleMenu() {
  /* si el menu esta abierto quiero q lo cierre y si esta cerrado quiero que lo abra */
  menu.classList.toggle("menu_opened");
}

OpenMenuBtn.addEventListener("click", toggleMenu);

CloseMenuBtn.addEventListener("click", toggleMenu);
