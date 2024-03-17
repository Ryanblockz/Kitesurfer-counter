console.log("WHAT THE FUCK ;(");

let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

const incrementButton = document.getElementById("increment-btn")
const saveButton = document.getElementById("save-btn")

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}

incrementButton.addEventListener("click", increment);
saveButton.addEventListener("click", save);
