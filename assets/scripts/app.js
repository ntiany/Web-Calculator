let currentResult = 0;

function createOutput(operator, resultBefore, resultAfter){
    const calculationDescription = `${resultBefore} ${operator} ${resultAfter}`
    outputResult(currentResult, calculationDescription);

}

function calculate(operation){
    const enteredNumber = parseInt(userInput.value) ? parseInt(userInput.value) : 0;
    const initialResult = currentResult;
    if (operation === "+"){
        currentResult += enteredNumber;
    } else if (operation === "-") {
        currentResult -= enteredNumber;
    } else if (operation === "*") {
        currentResult *= enteredNumber;
    } else {
        currentResult /= enteredNumber;
    }
    createOutput(operation, initialResult, enteredNumber);
}


 addBtn.addEventListener('click', calculate.bind(this, "+"));
 subtractBtn.addEventListener('click', calculate.bind(this, "-"));
 multiplyBtn.addEventListener('click', calculate.bind(this, "*"));
 divideBtn.addEventListener('click', calculate.bind(this, "/"));


