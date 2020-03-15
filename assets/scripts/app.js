let currentResult = 0;

function createOutput(operator, resultBefore, resultAfter){
    const calculationDescription = `${resultBefore} ${operator} ${resultAfter}`
    outputResult(currentResult, calculationDescription);

}

function add(){
    const enteredNumber = parseInt(userInput.value);
    const initialResult = currentResult;
    currentResult += enteredNumber;
    createOutput('+', initialResult, enteredNumber);
}

function subtract(){
    const enteredNumber = parseInt(userInput.value);
    const initialResult = currentResult;
    currentResult -= enteredNumber;
    createOutput('-', initialResult, enteredNumber);
}

function multiply(){
    const enteredNumber = parseInt(userInput.value);
    const initialResult = currentResult;
    currentResult *= enteredNumber;
    createOutput('*', initialResult, enteredNumber);
}

function divide(){
    const enteredNumber = parseInt(userInput.value);
    const initialResult = currentResult;
    currentResult /= enteredNumber;
    createOutput('/', initialResult, enteredNumber);
}


 addBtn.addEventListener('click', add);
 subtractBtn.addEventListener('click', subtract);
 multiplyBtn.addEventListener('click', multiply);
 divideBtn.addEventListener('click', divide);


