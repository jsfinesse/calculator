function add(a, b)
{
    return (a+b).toFixed(2);
}

function subtract(a, b)
{
    return (a-b).toFixed(2);
}

function multiply(a, b)
{
    return (a*b).toFixed(2);
}

function divide(a, b)
{
    if(b===0) { alert("Nice try but I'm immune!!!"); return; }
    return (a/b).toFixed(2);
}

function remainder(a, b)
{
    if(b===0) { alert("Nice try but I'm immune!!!"); return; }
    return (a%b).toFixed(2);
}

function operate(operation, num1, num2)
{
    switch(operation) {
        case '+': return (add(+num1, +num2)); break;
        case '-': return (subtract(+num1, +num2)); break;
        case '*': return (multiply(+num1, +num2)); break;
        case '/': return (divide(+num1, +num2)); break;
        case '%': return (remainder(+num1, +num2)); break;
        default: console.log("unindentified operation");
    }
}

const digitsKeys = document.querySelectorAll(".digits");
const operationKeys = document.querySelectorAll(".operators");
const equalkey = document.querySelector("#equal");
const allClear = document.querySelector("#allclear");
const clear = document.querySelector("#clear");

const calcDisplay = document.querySelector(".display"); 

let currentDigit = '';
let prevDigit = '';
let currOperator = '';
let prevOperator = '';
let equation = '';

let isOperatorUsedOnce = false;

digitsKeys.forEach(button => {
    button.addEventListener("click", function() {
        let temp = this.value;
        currentDigit = currentDigit + temp;
        // equation = currentDigit;
        calcDisplay.textContent = currentDigit;
    })
});

operationKeys.forEach(button => {
    button.addEventListener("click", function() {
        currOperator = this.value;
        let operationSymbol = this.textContent;
        calcDisplay.textContent = operationSymbol;
        if(!isOperatorUsedOnce) {
            prevDigit = currentDigit;
        }
        else {
            if(currentDigit === '' || prevOperator === '' || prevDigit === '') return;
            let result = operate(prevOperator, prevDigit, currentDigit);
            result = result.toString();
            if(result.toString().slice(-2) === "00") { result = result.slice(0, -3);}
            calcDisplay.textContent = String(result);
            prevDigit = result;
        }
        isOperatorUsedOnce = true;
        currentDigit = '';
        prevOperator = currOperator;
    })
});

equalkey.addEventListener("click", function() {
    if(currentDigit === '' || prevOperator === '' || prevDigit === '') return;
    let result = operate(currOperator, prevDigit, currentDigit);
    result = result.toString();
    if(result.toString().slice(-2) === "00") { result = result.slice(0, -3);}
    calcDisplay.textContent = String(result);
    prevDigit = result;
    currentDigit = '';
});

allClear.addEventListener("click", function() {
    currentDigit = '';
    prevDigit = '';
    currOperator = '';
    calcDisplay.textContent = '';
    isOperatorUsedOnce = false;
    calcDisplay.textContent = "0";
});

clear.addEventListener("click", function() {
    if(currentDigit != '') {
        currentDigit = currentDigit.slice(0,-1);
        calcDisplay.textContent = currentDigit;
    }
    else if(currOperator != '') {
        currOperator = currOperator.slice(0,-1);
        calcDisplay.textContent = currOperator;
    }
    else if(prevDigit != '') {
        prevDigit = prevDigit.slice(0,-1);
        calcDisplay.textContent = prevDigit;
    }
    else return;
});