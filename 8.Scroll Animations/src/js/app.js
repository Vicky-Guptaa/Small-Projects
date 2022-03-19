const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", () => {
    const triggerBottom = window.innerHeight*4/5;
    boxes.forEach((box => {
        const boxTop = box.getBoundingClientRect().top;
        if (boxTop < triggerBottom) {
            box.classList.remove("odd:translate-x-[200%]");
            box.classList.remove("even:-translate-x-[200%]");
            box.classList.remove("opacity-0");
        }
        else {
            box.classList.add("odd:translate-x-[200%]");
            box.classList.add("even:-translate-x-[200%]");
            box.classList.add("opacity-0");
        }
    }))
})