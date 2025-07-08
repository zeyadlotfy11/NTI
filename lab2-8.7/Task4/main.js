
const display = document.getElementById('Answer');

let currentInput = '';
let operator = '';
let previousInput = '';
let shouldResetDisplay = false;

function EnterNumber(num) {
    if (shouldResetDisplay) {
        display.value = '';
        shouldResetDisplay = false;
    }

    if (num === '.') {
        if (display.value.includes('.')) {
            return;
        }
        if (display.value === '') {
            display.value = '0.';
            return;
        }
    }

    if (display.value === '0' && num !== '.') {
        display.value = num;
    } else {
        display.value += num;
    }
}

function EnterOperator(op) {
    if (operator && !shouldResetDisplay) {
        EnterEqual();
    }

    previousInput = display.value;
    operator = op;
    shouldResetDisplay = true;
}

function EnterEqual() {
    if (operator && previousInput !== '' && display.value !== '') {
        const prev = parseFloat(previousInput);
        const current = parseFloat(display.value);
        let result = 0;

        switch (operator) {
            case '+':
                result = prev + current;
                break;
            case '-':
                result = prev - current;
                break;
            case '*':
                result = prev * current;
                break;
            case '/':
                if (current === 0) {
                    display.value = 'Error';
                    operator = '';
                    previousInput = '';
                    shouldResetDisplay = true;
                    return;
                }
                result = prev / current;
                break;
            default:
                return;
        }

        if (result % 1 !== 0) {
            result = parseFloat(result.toFixed(8));
        }

        display.value = result;
        operator = '';
        previousInput = '';
        shouldResetDisplay = true;
    }
}

function EnterClear() {
    display.value = '';
    currentInput = '';
    operator = '';
    previousInput = '';
    shouldResetDisplay = false;
}

document.addEventListener('DOMContentLoaded', function () {
    display.value = '';

    document.addEventListener('keydown', function (event) {
        const key = event.key;

        if ((key >= '0' && key <= '9') || key === '.') {
            EnterNumber(key);
        }
        else if (key === '+' || key === '-' || key === '*' || key === '/') {
            EnterOperator(key);
        }
        else if (key === 'Enter' || key === '=') {
            event.preventDefault();
            EnterEqual();
        }
        else if (key === 'c' || key === 'C' || key === 'Escape') {
            EnterClear();
        }
        else if (key === 'Backspace') {
            if (display.value.length > 0) {
                display.value = display.value.slice(0, -1);
            }
        }
    });

});