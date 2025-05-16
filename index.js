const add = (x,y) => {
    return x + y;
}

const sub = (x,y) => {
    return x - y;
}

const multiply = (x,y) => {
    return x * y;
}

const divide = (x,y) => {
    if(y === 0){
        return 'Error';
    } else{
        return x  / y;
    }
}


function operate(x, y, operation) {
    switch(operation){
        case '+':
            return add(x,y);
        case '-':
            return sub(x,y);
        case '*':
            return multiply(x,y);
        case '/':
            return divide(x,y);
        default:
            return '????';
    }
}

let num1 = undefined;
let num2 = undefined;
let operation = undefined;
const keyboard = document.querySelector('.keyboard');

function handleClick(e) {
    console.log(e.target.textContent);
}

keyboard.addEventListener('click', (e) => {handleClick(e)});