function add(a, b)
{
    return (a+b);
}

function subtract(a, b)
{
    return (a-b);
}

function multiply(a, b)
{
    return (a*b);
}

function divide(a, b)
{
    if(b===0) { alert("Cannot divide by 0!!!"); return;}
    return (a/b);
}

function operate(operation, num1, num2)
{
    switch(operation) {
        case '+': return (add(parseInt(num1), parseInt(num2))); break;
        case '-': return (subtract(parseInt(num1), parseInt(num2))); break;
        case '*': return (multiply(parseInt(num1), parseInt(num2))); break;
        case '/': return (divide(parseInt(num1), parseInt(num2))); break;
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
        isOperatorUsedOnce = true;
        currentDigit = '';
    })
});

equalkey.addEventListener("click", function() {
    let result = operate(currOperator, prevDigit, currentDigit); 
    calcDisplay.textContent = String(result);
    prevDigit = result;
    currentDigit = '';
});

allClear.addEventListener("click", function() {
    currentDigit = '';
    prevDigit = '';
    currOperator = '';
    calcDisplay.textContent = '';
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