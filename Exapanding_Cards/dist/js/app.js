const Cards = document.querySelectorAll(".card");

Cards.forEach((card) => {
    card.addEventListener("click", () => {
        removeActiveClass();
        card.classList.add("active-class-div");
        card.lastElementChild.classList.add("active-class-text");
    })
})

function removeActiveClass() {
    Cards.forEach((card) => {
        if (card.classList.contains("active-class-div")) {
            card.classList.remove("active-class-div");
            card.lastElementChild.classList.remove("active-class-text");
        }
    })

}