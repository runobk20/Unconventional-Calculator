const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

/* function add() {
    // parseInt => string to Integer / parseFloat => string to Float / add a + and it will judge which one to use
    // Un input siempre devuelve un string, incluso si es de tipo "number"
    currentResult = currentResult + parseInt(userInput.value);
    outputResult(currentResult, '');
} */

// Gets input from input field
function getUserNumberInput() {
    return parseInt(userInput.value);
}

// Generates and writes calculation log
function createAndRenderOutput(operator, resultBeforeCalc, calcNumber) {
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription);

}

// Write a entry in logEntries
function writeLog(operationId, prevResult, operationNumber, newResult) {
    const logEntry = {
        operation: operationId,
        prevResult: prevResult,
        number: operationNumber,
        result: newResult
    }
    logEntries.push(logEntry);
    console.log(logEntries);
}

// Calculator functions
function add() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult += enteredNumber;
    createAndRenderOutput('+', initialResult, enteredNumber);
    writeLog('Add', initialResult, enteredNumber, currentResult);
}

function subtract() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult -= enteredNumber;
    createAndRenderOutput('-', initialResult, enteredNumber);
    writeLog('Subtract', initialResult, enteredNumber, currentResult);
}

function multiply() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult *= enteredNumber;
    createAndRenderOutput('*', initialResult, enteredNumber);
    writeLog('Multiply', initialResult, enteredNumber, currentResult);

}

function divide() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult /= enteredNumber;
    createAndRenderOutput('/', initialResult, enteredNumber);
    writeLog('divide', initialResult, enteredNumber, currentResult);

}

// Adding events to buttons
addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);

