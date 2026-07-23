const uildel = document.getElementById("uildel");
const result = document.getElementById("result");

const symbols = ["x", "AC", "...", "/", 7, 8, 9, "*", 4, 5, 6, "-", 1, 2, 3, "+", "...", 0, ".", "="];

symbols.map((element) => {
    const newBtn = document.createElement("button");
    newBtn.textContent = element;

    newBtn.classList.add('netBtn')

    uildel.appendChild(newBtn);

    newBtn.addEventListener("click", function () {
        if (element === "AC") {
            result.textContent = "";
        } else if (element === "x") {
            const newString = result.textContent.slice(0, result.textContent.length - 1);
            result.textContent = newString;
        } else if (element === "=") {
            calculate();
        } else {
            result.textContent = result.textContent + element;
        }
    })
})

function calculate() {
    const values = result.textContent.match(/(\d+\.?\d*|[\+\-\*\/])/g);

    let results = 0;

    let i = 0;
    while (i < values.length) {
        if (values[i] === "*") {
            results = values[i - 1] * values[i + 1];
            values.splice(i - 1, 3, results);
            i--;
        } else if (values[i] === "/") {
            results = values[i - 1] / values[i + 1];
            values.splice(i - 1, 3, results);
            i--;
        } else if (values[i] === "+") {
            results = values[i - 1] + values[i + 1];
            values.splice(i - 1, 3, results);
            i--;
        } else if (values[i] === "-") {
            results = values[i - 1] - [i + 1];
            values.splice(i - 1, 3, results);
            i--;
        } else {
            i++;
        }
    }



    console.log(values);
}