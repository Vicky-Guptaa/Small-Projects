const btn = document.querySelector(".btn");
const searchInput = document.querySelector(".search-here");

btn.addEventListener("click", () => {
    searchInput.classList.toggle("w-64")
    searchInput.focus();
})