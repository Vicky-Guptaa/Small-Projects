const choices = document.querySelector(".choices");
const textarea = document.querySelector("textarea");
console.log(choices, textarea);

textarea.focus();

textarea.addEventListener("keyup", (e) => {
    createChoices(e.target.value);
    if (e.key === "Enter") {
        setTimeout(() => {
            e.target.value = "";
        }, 10)
        randomSelect();
    }
})

function createChoices(input) {
    let choiceArray = input.split(',').filter((choice) => choice.trim() !== "").map(choice => choice.trim());
    choices.innerHTML = "";
    choiceArray.forEach(choice => {
        const choiceElement = document.createElement('span');
        choiceElement.classList.add("choice");
        choiceElement.innerText = choice;
        choices.appendChild(choiceElement);
    });
}

function randomSelect() {

    let interval = setInterval(() => {

        const randomChoice = pickRandomChoice();
        randomChoice.classList.add("choiceHighlight");
        setTimeout(() => {
            randomChoice.classList.remove("choiceHighlight");
        }, 150)

    }, 200);

    setTimeout(() => {
        clearInterval(interval);
        setTimeout(() => {
            const randomChoice = pickRandomChoice();
            randomChoice.classList.add("choiceHighlight");
        }, 100)
    }, 3000);
}

function pickRandomChoice() {
    let choiceLength = choices.childElementCount;
    return choices.childNodes[Math.floor(Math.random() * choiceLength)];
}
