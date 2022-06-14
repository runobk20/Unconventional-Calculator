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

// Generates and write calculation log
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
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

// All calculations together
function calculateResult(calculationType) {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    let mathOperator;
    if (calculationType === 'add') {
        currentResult += enteredNumber;
        mathOperator = '+';
    } else if (calculationType === 'subtract') {
        currentResult -= enteredNumber;
        mathOperator = '-';
    } else if (calculationType === 'multiply') {
        currentResult *= enteredNumber;
        mathOperator = '*';
    } else if (calculationType === 'divide') {
        currentResult /= enteredNumber;
        mathOperator = '/';
    }

    createAndWriteOutput(mathOperator, initialResult, enteredNumber);
    writeLog(calculationType, initialResult, enteredNumber, currentResult);
}

// Calculator functions derivates
function add() {
    calculateResult('add');
}

function subtract() {
    calculateResult('subtract');
}

function multiply() {
    calculateResult('multiply');
}

function divide() {
    calculateResult('divide');
}

// Adding events to buttons
addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);

