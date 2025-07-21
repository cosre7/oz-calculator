export default function calculateOperation(
    firstNumber,
    secondNumber,
    operator
) {
    if (operator === "/" && secondNumber === 0) {
        throw new Error("0으로 나눌 수 없습니다.");
    }

    switch (operator) {
        case "+":
            return firstNumber + secondNumber;
        case "-":
            return firstNumber - secondNumber;
        case "*":
            return firstNumber * secondNumber;
        case "/":
            return firstNumber / secondNumber;
        default:
            throw new Error("유효한 연산자가 아닙니다.");
    }
}
