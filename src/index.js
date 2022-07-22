import './assets/styles/index.scss';

document.addEventListener("DOMContentLoaded", function () {

  const valuePower = document.querySelector(".form-label");
  const range = document.querySelector(".form-range");

  range.addEventListener("input", () => {
    valuePower.innerHTML = `${range.value} hp`;
  });

  const menu = document.querySelector(".menu");
  const burger = document.querySelector(".menu-icon");
  const crossMenu = document.querySelector(".bi-x-lg");

  const toggleMenu = () => menu.classList.toggle("active");

  burger.addEventListener("click", toggleMenu);
  crossMenu.addEventListener("click", toggleMenu);
});