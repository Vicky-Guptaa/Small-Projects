const email = document.querySelector(".email");
const password = document.querySelector(".password");
let pLabel = document.querySelector(".plabel");
let eLabel = document.querySelector(".elabel");


eLabel.innerHTML = eLabel.innerText
    .split('')
    .map((letter, indx) => `<span class=" absolute top-1 duration-500 ease-in-out" style="left:${indx * 1}rem; transition-delay:${50 * indx}ms" >${letter}</span>`)
    .join("");


pLabel.innerHTML = pLabel.innerText
    .split('')
    .map((letter, indx) => `<span class=" absolute top-1 duration-500 ease-in-out" style="left:${indx * 1}rem; transition-delay:${50 * indx}ms" >${letter}</span>`)
    .join("");



[email, password].forEach((ele) => {
    ["focusin", "focusout"].forEach((event) => {
        ele.addEventListener(event, (e) => {
            if (e.type === "focusin")
                if (ele === email) {
                    console.log(eLabel.childNodes);
                    for (let child of eLabel.children) {
                        child.classList.add("-top-6");
                    }
                }
                else {
                    for (let child of pLabel.children) {
                        child.classList.add("-top-6");
                    }
                }
            else
                if (e.target.value.length === 0) {
                    if (ele === email)
                        for (let child of eLabel.children) {
                            child.classList.remove("-top-6");
                        }
                    else
                        for (let child of pLabel.children) {
                            child.classList.remove("-top-6");
                        }
                }
        })

    })
})