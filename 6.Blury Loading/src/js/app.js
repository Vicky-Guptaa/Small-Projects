const loadingText = document.querySelector(".loading-text");
const main = document.querySelector("main");

let load = 0;

let interval = setInterval(blurryLoading, 30);

function blurryLoading() {
    if (load === 100) {
        clearInterval(interval);
    }
    loadingText.innerText = `${load}%`;
    load++;
    let blurPercent = 100 - load;
    main.style.filter = `blur(${rangeMap(load, 0, 100, 30, 0)}px)`;
    loadingText.style.opacity = rangeMap(load, 0, 100, 1, 0);

}

function rangeMap(now, rangeMax, rangeMin, actualMax, actualMin) {
    let actualRange = actualMax - actualMin;
    let range = rangeMax - rangeMin;
    let answer = actualRange / range;
    answer *= now - rangeMin;
    answer += actualMin;
    return answer;
}