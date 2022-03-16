const progressBar = document.getElementById("progress-bar");
const btnNext = document.getElementById("btn-next");
const btnPrev = document.getElementById("btn-prev");
const circle = document.querySelectorAll(".circle");

btnPrev.disabled = true; // avoid in starting to going back
const noOfCircle = circle.length;
let stepsCount = 1;


btnNext.addEventListener("click", () => {
    stepsCount++;
    if (stepsCount != 1) btnPrev.disabled = false;
    if (stepsCount == noOfCircle) btnNext.disabled = true;

    let barIncrement = (stepsCount - 1) * 30;
    progressBar.style.width = `${barIncrement}%`;

    circle[stepsCount - 1].classList.add("active");
})

btnPrev.addEventListener("click", () => {
    stepsCount--;
    if (stepsCount == 1) btnPrev.disabled = true;
    if (stepsCount == noOfCircle - 1) btnNext.disabled = false;

    let barIncrement = (stepsCount - 1) * 30;
    progressBar.style.width = `${barIncrement}%`;

    circle[stepsCount].classList.remove("active");
})

