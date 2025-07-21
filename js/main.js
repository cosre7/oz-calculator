import calculate from "./index.js";
import {
    appendNumber,
    setOperator,
    subDisplay,
    resetDisplay,
    VALID_NUMBERS,
    VALID_OPERATORS,
    state,
} from "./index.js";

window.appendNumber = (num) => {
    try {
        const updated = appendNumber(num, state.currentInput);
        state.currentInput = updated;
    } catch (e) {
        console.error(e.message);
    }
};

window.setOperator = (op) => {
    try {
        const selected = setOperator(op, state.currentInput);
        state.firstNumber = Number(state.currentInput);
        state.operator = selected;
        state.currentInput = "";
        resetDisplay();
    } catch (e) {
        console.error(e.message);
    }
};

window.clearDisplay = () => {
    state.currentInput = "";
    state.firstNumber = null;
    state.operator = null;
    resetDisplay();
    document.getElementById("result").classList.add("d-none");
    document.getElementById("result").textContent = "";
    document.getElementById("historyList").innerHTML = "";
};

window.calculate = () => {
    calculate();
};

document.addEventListener("keydown", (event) => {
    const key = event.key;
    if (VALID_NUMBERS.includes(key)) {
        try {
            const updated = appendNumber(key, state.currentInput);
            state.currentInput = updated;
        } catch (e) {
            console.error(e.message);
        }
    }
    if (VALID_OPERATORS.includes(key)) {
        try {
            const selected = setOperator(key, state.currentInput);
            state.firstNumber = Number(state.currentInput);
            state.operator = selected;
            state.currentInput = "";
            resetDisplay();
        } catch (e) {
            console.error(e.message);
        }
    }
    if (key === "Enter") calculate();
    if (key === "Backspace") {
        const updated = subDisplay();
        state.currentInput = updated;
    }
});
