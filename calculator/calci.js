let currentInput = '';
let currentOperation = '';
let firstOperand = '';

function appendNumber(number) {
    // Prevent appending multiple operators in a row
    if (['+', '-', '*', '/'].includes(number) && currentInput === '') return;
    
    // Prevent appending multiple decimal points
    if (number === '.' && currentInput.includes('.')) return;

    currentInput += number;
    updateDisplay();
}

function setOperation(operation) {
    if (currentInput === '' && firstOperand === '') return; // No operation if no operand

    if (firstOperand !== '') {
        calculate();
    }

    firstOperand = currentInput;
    currentInput = '';
    currentOperation = operation;
    updateDisplay();
}

function calculate() {
    if (firstOperand === '' || currentInput === '') return;

    let result;
    const num1 = parseFloat(firstOperand);
    const num2 = parseFloat(currentInput);

    switch (currentOperation) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                alert('Division by zero is not allowed');
                clearDisplay();
                return;
            }
            result = num1 / num2;
            break;
        default:
            return;
    }

    currentInput = result;
    currentOperation = '';
    firstOperand = '';
    updateDisplay();
}

function clearDisplay() {
    currentInput = '';
    currentOperation = '';
    firstOperand = '';
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('text').value = currentInput || '0';
}
