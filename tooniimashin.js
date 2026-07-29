const uildel = document.getElementById("uildel");
const result = document.getElementById("result");

const symbols = ["DEL", "AC", "^", "/", 7, 8, 9, "*", 4, 5, 6, "-", 1, 2, 3, "+", "+/-", 0, ".", "="];

symbols.map((element) => {
    const newBtn = document.createElement("button");

    newBtn.textContent = element;

    newBtn.classList.add('netBtn')

    uildel.appendChild(newBtn);

    newBtn.addEventListener("click", function () {
        if (element === "AC") {
            result.textContent = "";
        } else if (element === "DEL") {
            const newString = result.textContent.slice(0, result.textContent.length - 1);
            result.textContent = newString;
        } else if (element === "=") {
            calculate();
        } else {
            result.textContent = result.textContent + element;
        }




        let i = 0
        if (result.textContent[i] === "*") {
            result.textContent = "";
        } else if (result.textContent[i] === "/") {
            result.textContent = "";
        } else if (result.textContent[i] === "+") {
            result.textContent = "";
        } else if (result.textContent[i] === "-") {
            result.textContent = "";
        } else if (result.textContent[i] === "^") {
            result.textContent = "";
        }

    })
})

function calculate() {
    const values = result.textContent.match(/(\d+\.?\d*|[\+\^\-\*\/])/g);

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
            results = Number(values[i - 1]) + Number(values[i + 1]);
            values.splice(i - 1, 3, results);
            i--;
        } else if (values[i] === "-") {
            results = values[i - 1] - values[i + 1];
            values.splice(i - 1, 3, results);
            i--;
        } else if (values[i] === "^") {
            results = values[i - 1] ** values[i + 1]
            values.splice(i - 1, 3, results);
            i--;
        } else {
            i++;
        }
    }


    console.log(values);
    result.textContent = values;
}