import { showError, removeError } from "./error.js";

const VALID_NUMBERS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const VALID_OPERATORS = ["+", "-", "*", "/"];

const resetDisplay = () => {
    const display = document.getElementById("display");
    display.textContent = "0";
    return "";
};

const setDisplay = (text) => {
    const display = document.getElementById("display");
    display.textContent = text;
    return text;
};

const subDisplay = () => {
    const display = document.getElementById("display");
    const updated = display.textContent.slice(0, -1);
    return setDisplay(updated || "0");
};

const appendNumber = (number, currentInput) => {
    if (!VALID_NUMBERS.includes(number)) showError("유효한 숫자를 입력하세요.");
    removeError();
    return setDisplay(currentInput + number);
};

const setOperator = (op, currentInput) => {
    if (!VALID_OPERATORS.includes(op)) showError("유효한 연산자를 선택하세요.");
    if (!currentInput) showError("숫자를 먼저 입력하세요.");

    return op;
};

export {
    resetDisplay,
    setDisplay,
    subDisplay,
    appendNumber,
    setOperator,
    VALID_NUMBERS,
    VALID_OPERATORS,
};
