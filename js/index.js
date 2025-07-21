import calculateOperation from "./operations.js";
import {
    resetDisplay,
    setDisplay,
    subDisplay,
    appendNumber,
    setOperator,
    VALID_NUMBERS,
    VALID_OPERATORS,
} from "./input.js";
import { showError, removeError } from "./error.js";
import saveHistory from "./history.js";

// ✅ 모든 상태를 하나의 객체로 묶음
const state = {
    history: [],
    currentInput: "",
    firstNumber: null,
    operator: null,
    isError: false,
};

function calculate() {
    try {
        const { currentInput, firstNumber, operator, history } = state;

        if (firstNumber === null || operator === null || !currentInput) {
            state.isError = true;
            throw new Error("계산에 필요한 값이 부족합니다.");
        }

        const secondNumber = Number(currentInput);
        if (isNaN(secondNumber)) throw new Error("유효한 숫자를 입력하세요.");

        const result = calculateOperation(firstNumber, secondNumber, operator);
        saveHistory(firstNumber, operator, secondNumber, result, history);

        const resultElement = document.getElementById("result");
        resultElement.classList.remove("d-none", "alert-danger");
        resultElement.classList.add("alert-info");
        resultElement.textContent = `결과: ${result}`;

        // 상태 초기화
        state.currentInput = "";
        state.firstNumber = null;
        state.operator = null;
        resetDisplay();
    } catch (error) {
        showError(error.message);
    }
}

export {
    calculateOperation,
    resetDisplay,
    setDisplay,
    subDisplay,
    appendNumber,
    setOperator,
    showError,
    removeError,
    saveHistory,
    VALID_NUMBERS,
    VALID_OPERATORS,
    state,
};

export default calculate;
