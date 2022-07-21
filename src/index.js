import './assets/styles/index.scss';

document.addEventListener("DOMContentLoaded", function () {

  const valuePower = this.querySelector(".form-label");
  const range = this.querySelector(".form-range");

  range.addEventListener("input", () => {
    valuePower.innerHTML = `${range.value} hp`;
  });

  const menu = document.querySelector(".menu");
  const burger = document.querySelector(".menu-icon");
  const closeMenu = document.querySelector(".bi-x-lg");

  const toggleMenu = () => menu.classList.toggle("active");

  burger.addEventListener("click", toggleMenu);

  closeMenu.addEventListener("click", toggleMenu);
});