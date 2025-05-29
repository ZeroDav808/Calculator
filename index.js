const add = (x, y) => {
  return x + y;
};

const sub = (x, y) => {
  return x - y;
};

const multiply = (x, y) => {
  return x * y;
};

const divide = (x, y) => {
  if (y === 0) {
    return "Error";
  } else {
    return x / y;
  }
};

function operate(x, y, operation) {
  switch (operation) {
    case "+":
      return add(x, y);
    case "-":
      return sub(x, y);
    case "*":
      return multiply(x, y);
    case "/":
      return divide(x, y);
    default:
      return "????";
  }
}

const screen = document.querySelector('p');
const keyboard = document.querySelector('.keyboard');

let num1 = null;
let num2 = null;
let op1 = null;
// let op2 = null;
let result = null;

function clear() {
  num1 = null;
  num2 = null;
  op1 = null;
  //op2 = null;
  result = null;
  screen.textContent = '';
}

function handleNumber(value) {
  if(!op1){
    if(!num1){
      num1 = value;
    }else{
      num1 += value;
    }
    screen.textContent = num1;
  } else{
    if(!num2){
      num2 = value;
    } else {
      num2 += value;
    }
    screen.textContent = num2;
  }
}

function handleOperation(value) {
  op1 = value;
  console.log(op1);
}

function handleClick(e) {
  const button = e.target;

  switch (button.className) {
    case 'number':
      console.log('The button is a number');
      handleNumber(button.textContent);
      break;
    case 'operation':
      console.log('The button is an operation');
      handleOperation(button.textContent);
      break;
    case 'equal':
      console.log('The button is an equal button');
      break;
    case 'clear':
      console.log('The button is a clear button');
      clear();
      break;
  }

}


keyboard.addEventListener('click', (e) => {
  handleClick(e);
})