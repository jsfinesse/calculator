function add(a, b)
{
    console.log(a+b);
}

function subtract(a, b)
{
    console.log(a-b);
}

function multiply(a, b)
{
    console.log(a*b);
}

function divide(a, b)
{
    if(b===0) { alert("Cannot divide by 0!!!"); return;}
    console.log(a/b);
}

function operate(operation, num1, num2)
{
    switch(operation) {
        case '+': console.log(add(parseInt(num1), parseInt(num2))); break;
        case '-': console.log(add(parseInt(num1), parseInt(num2))); break;
        case '*': console.log(add(parseInt(num1), parseInt(num2))); break;
        case '/': console.log(add(parseInt(num1), parseInt(num2))); break;
        default: console.log("unindentified operation");
    }
}