const sectionOne = document.querySelector(".section-1");
const sectionTwo = document.querySelector(".section-2");

[sectionOne, sectionTwo].forEach(function (section) {
    ["mouseover", "mouseout"].forEach(function (e) {
        section.addEventListener(e, scaleUp);
    })
})

function scaleUp(e) {
    let type = e.type;
    if (type === "mouseover") {
        this.classList.add("basis-2/3");
        if (this !== sectionOne)
            sectionOne.classList.add("basis-1/3");
        else
            sectionTwo.classList.add("basis-1/3");
    }
    else {
        this.classList.remove("basis-2/3");
        if (this !== sectionOne)
            sectionOne.classList.remove("basis-1/3");
        else
            sectionTwo.classList.remove("basis-1/3");
    }
}

