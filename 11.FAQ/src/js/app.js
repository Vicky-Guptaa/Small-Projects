const allButtons = document.querySelectorAll(".btn");

allButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
        button.classList.toggle("rotate-180");
        button.parentNode.nextElementSibling.classList.toggle("hidden");
    })
})