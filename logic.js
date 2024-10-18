let resultField = document.getElementById("result");

function appendNumber(number) {
    resultField.value += number;
}

function appendOperator(operator) {
    resultField.value += operator;
}

function clearDisplay() {
    resultField.value = '';
}

function deleteLast() {
    resultField.value = resultField.value.slice(0, -1);
}

function calculate() {
    try {
        let expression = resultField.value.replace("^", "**");
        resultField.value = eval(expression);
    } catch (e) {
        resultField.value = 'Error';
    }
}

function sqrt() {
    resultField.value = Math.sqrt(resultField.value);
}

function square() {
    resultField.value = Math.pow(resultField.value, 2);
}

function reciprocal() {
    resultField.value = 1 / resultField.value;
}

function negate() {
    resultField.value = -resultField.value;
}
