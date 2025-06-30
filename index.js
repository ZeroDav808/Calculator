function add(x, y) {
  return x + y;
}

function sub(x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

function divide(x, y) {
  if (y === 0) {
    return `Error!!! Can't divide by zero.`;
  }
  return x / y;
}

function operate(num1, operation, num2) {
  switch (operation) {
    case "+":
      console.log(`The result of ${num1} + ${num2} = ${add(num1, num2)}`);
      break;
    case "-":
      console.log(`The result of ${num1} - ${num2} = ${sub(num1, num2)}`);
      break;
    case "*":
      console.log(`The result of ${num1} * ${num2} = ${multiply(num1, num2)}`);
      break;
    case "/":
      console.log(`The result of ${num1} / ${num2} = ${divide(num1, num2)}`);
      break;
  }
}

const keypad = document.querySelector('#inputs');
const display = document.querySelector('#display');


keypad.addEventListener('click', (event)=> {
  display.textContent = event.target.textContent;
  console.log(event.target.textContent);
})
