const display = document.getElementById("display");
const buttons = document.querySelectorAll(".button");
let currentInput = "";
let operator = "";
let previousInput = "";

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent;

        if (value === "C") {
            currentInput = "";
            previousInput = "";
            operator = "";
            display.textContent = "0";
        } else if (value === "=") {
            if (currentInput && previousInput) {
                calculate();
            }
        } else if (["/", "x", "-", "+"].includes(value)) {
            if (currentInput) {
                if (previousInput) {
                    calculate();
                }
                operator = value === "x" ? "*" : value;
                previousInput = currentInput;
                currentInput = "";
            }
        } else {
            currentInput += value;
            display.textContent = currentInput;
        }
    });
});

function calculate() {
    let result;
    const prev = parseFloat(previousInput);
    const curr = parseFloat(currentInput);

    if (isNaN(prev) || isNaN(curr)) return;

    switch (operator) {
        case "+":
            result = prev + curr;
            break;
        case "-":
            result = prev - curr;
            break;
        case "*":
            result = prev * curr;
            break;
        case "/":
            result = prev / curr;
            break;
        default:
            return;
    }

    currentInput = result.toString();
    operator = "";
    previousInput = "";
    display.textContent = currentInput;
}
