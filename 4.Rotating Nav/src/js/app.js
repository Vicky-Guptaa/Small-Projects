const body = document.querySelector("body");
const burgerMenu = document.querySelector(".burger-menu");
const crossMenu = document.querySelector(".exit-menu");
const ul = document.querySelector("ul");

const nav = document.querySelector(".nav");
burgerMenu.addEventListener("click", () => {
    body.classList.toggle("-rotate-[30deg]");
    burgerMenu.classList.toggle("opacity-0");
    crossMenu.classList.toggle("opacity-0");
    ul.classList.toggle("opacity-0");
    nav.classList.toggle("-rotate-[45deg]");
})

crossMenu.addEventListener("click", () => {
    body.classList.toggle("-rotate-[30deg]");
    burgerMenu.classList.toggle("opacity-0");
    crossMenu.classList.toggle("opacity-0");
    ul.classList.toggle("opacity-0");
    nav.classList.toggle("-rotate-[45deg]");
})
