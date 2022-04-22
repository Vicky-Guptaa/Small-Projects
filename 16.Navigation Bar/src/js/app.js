const openMenuButton = document.querySelector('.open-menu-button');
const closeMenuButton = document.querySelector('.close-menu-button');
const navSlide = document.querySelectorAll('.nav-slide');
console.log(navSlide);
let delayTiming = [0, 100, 300, 500];

openMenuButton.addEventListener('click', function () {
    let cntr = 0;
    navSlide.forEach(slide => {
        slide.classList.remove('-translate-x-[100%]');
        slide.classList.remove(`delay-${delayTiming[3 - cntr]}`);
        slide.classList.add(`delay-${delayTiming[cntr++]}`);
    })
})

closeMenuButton.addEventListener('click', function () {
    let cntr = 3;
    navSlide.forEach(slide => {
        slide.classList.add('-translate-x-[100%]');
        slide.classList.remove(`delay-${delayTiming[3 - cntr]}`);
        slide.classList.add(`delay-${delayTiming[cntr--]}`);
    })
})