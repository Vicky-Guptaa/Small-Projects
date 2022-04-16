const smallCups = document.querySelectorAll('.small-cups');
const liters = document.querySelector('.liters');
const percentage = document.querySelector('.percentage');
const remained = document.querySelector('.remained');
const smallCupSize = 250;
const bigCupSize = 2000;
const totalSmallCups = 8;

smallCups.forEach((cup, idx) => {
    cup.addEventListener('click', () => fillSmallCups(idx));
})


function fillSmallCups(idx1) {
    if (smallCups[idx1].classList.contains('small-cup-fill') && (idx1 === smallCups.length - 1 || !smallCups[idx1].nextElementSibling.classList.contains('small-cup-fill'))) {
        idx1--;
    }
    smallCups.forEach((cups, idx2) => {
        if (idx2 <= idx1) {
            cups.classList.add('small-cup-fill');
        }
        else {
            cups.classList.remove('small-cup-fill');
        }
    })
    fillBigCup(idx1);
}

function fillBigCup(idx) {
    let percentageFillCup = ((smallCupSize * (idx + 1)) / bigCupSize) * 100;
    percentage.style.height = `${percentageFillCup}%`;
    percentage.textContent = `${percentageFillCup}%`
    remained.style.height = `${100 - percentageFillCup}%`;
    liters.textContent = `${(bigCupSize - (idx + 1) * smallCupSize) / 1000}L`;
    if (percentageFillCup === 0) {
        percentage.style.visibility = 'hidden';
    }
    else {
        percentage.style.visibility = 'visible';
    }
    if (percentageFillCup === 100) {
        remained.style.visibility = 'hidden';
        remained.classList.remove('my-1');
    }
    else {
        remained.style.visibility = 'visible';
        remained.classList.add('my-1');
    }
}