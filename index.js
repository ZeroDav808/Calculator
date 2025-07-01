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

let values = {
  firstNum: null,
  secondNum: null,
  operator: null,
  result: null,
};

function clear() {
  for (let key in values) {
    console.log(`${key} is now null`);
    values[key] = null;
  }
  screen.textContent = "";
}

function handleNumber(value) {
  const num = value.textContent;

  if (!values.operator) {
    if (!values.firstNum) {
      values.firstNum = num;
    } else {
      values.firstNum += num;
    }
    screen.textContent = values.firstNum;
  } else {
    if (!values.secondNum) {
      values.secondNum = num;
      screen.textContent = values.secondNum;
    } else {
      values.secondNum += num;
      screen.textContent = values.secondNum;
    }
  }
}

function handleOperator(target) {
  /* 
  Case that need to be handled:
  1. If the operator is entered but there is no second number and no result
    - We just need to store the operator and allow the user to enter the second
      number. If they want to chain operators then the next case will handle that,
      else they should just enter equal to calculate the result.

  2. If the operator is entered and there is two numbers already
    - When two numbers are present and another operator is entered,
      we should calculate a result, set the first number = result, 
      and allow for the second number to be entered and chained
      like previously
  */

  const op = target.textContent;
  // Case 1 Implementation
  if (!values.result && !values.secondNum && values.firstNum) {
    values.operator = op;
    screen.textContent = "";
    console.log(values.operator);
  }
}

function handleClick(event) {
  let target = event.target;

  switch (target.classList[1]) {
    case "number":
      console.log(`It's a number`);
      handleNumber(target);
      break;
    case "operator":
      console.log(`It's an operator -> ${target.textContent}`);
      handleOperator(target);
      break;
    case "equal":
      console.log(`It's an equal sign`);
      break;
    case "clear":
      console.log(`It's a clear sign`);
      clear();
      break;
    default:
      "???";
  }
}

const keyboard = document.querySelector("#inputs");
const screen = document.querySelector("#display");

keyboard.addEventListener("click", (event) => {
  handleClick(event);
});
