const bodyElement = document.querySelector('body');
const imageSliderElement = document.querySelectorAll('.img-slider');
const leftSlide = document.querySelector('.left-slide');
const rightSlide = document.querySelector('.right-slide');
//hardcode
const imageClasses = [
    "bg-[url('https://cdn.pixabay.com/photo/2018/02/13/23/41/nature-3151869_1280.jpg')]",
    "bg-[url('https://cdn.pixabay.com/photo/2018/08/21/23/29/forest-3622519_1280.jpg')]",
    "bg-[url('https://cdn.pixabay.com/photo/2017/05/09/03/46/alberta-2297204_1280.jpg')]",
    "bg-[url('https://cdn.pixabay.com/photo/2016/10/21/14/50/plouzane-1758197_1280.jpg')]",
    "bg-[url('https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg')]"
]
console.log(imageClasses);
let currSlide = 0;
console.log(bodyElement);


function removeBackhroundToBody() {
    bodyElement.classList.remove(imageClasses[currSlide]);
}
function setBackgroundToBody() {
    bodyElement.classList.add(imageClasses[currSlide]);
}

function setCurrSlide() {
    imageSliderElement.forEach(imgEle => {
        imgEle.classList.add('opacity-0');
    });
    imageSliderElement[currSlide].classList.remove('opacity-0');
}

rightSlide.addEventListener('click', () => {
    removeBackhroundToBody();
    currSlide = (currSlide + 1) % imageSliderElement.length;
    setBackgroundToBody();
    setCurrSlide();
})

leftSlide.addEventListener('click', () => {
    removeBackhroundToBody();
    currSlide = (currSlide - 1) % imageSliderElement.length;
    if (currSlide < 0)
        currSlide = (currSlide + imageSliderElement.length);
    console.log(currSlide);
    setBackgroundToBody();
    setCurrSlide();
})
