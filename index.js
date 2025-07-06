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

//----------------------------------------------------------------------------------------------------------------

function operate(num1, operation, num2) {
  switch (operation) {
    case "+":
      console.log(`The result of ${num1} + ${num2} = ${add(+num1, +num2)}`);
      return add(+num1, +num2);
    case "-":
      console.log(`The result of ${num1} - ${num2} = ${sub(+num1, +num2)}`);
      return sub(+num1, +num2);
    case "*":
      console.log(`The result of ${num1} * ${num2} = ${multiply(+num1, +num2)}`);
      return multiply(+num1, +num2);
    case "/":
      console.log(`The result of ${num1} / ${num2} = ${divide(+num1, +num2)}`);
      return divide(+num1, +num2);
    default:
      return "???";
  }
}

//---------------------------------------------------------------------------------------------------------------

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
  if(!values.operator){
    console.log('Appending to the first number');
    if(!values.firstNum){
      values.firstNum = value;
    } else{
      values.firstNum += value;
    }
    screen.textContent = values.firstNum;
  } else {
    console.log('Appending to the second number');
    if(!values.secondNum){
      values.secondNum = value;
    } else{
      values.secondNum += value;
    }
    screen.textContent = values.secondNum;
  }
}

function handleOperator(target) {
  screen.textContent = '';
  values.operator = target;
}

function handleEqual() {
  console.log(`Performing calculation: ${values.firstNum} ${values.operator} ${values.secondNum}`);
  values.result = operate(values.firstNum, values.operator, values.secondNum);
  screen.textContent = values.result;
}

function handleClick(event) {
  let target = event.target;
  console.log(`Event detected. The key clicked is ${target.textContent}`);

  switch (target.classList[1]) {
    case "number":
      handleNumber(target.textContent);
      break;
    case "operator":
      handleOperator(target.textContent);
      break;
    case "equal":
      handleEqual();
      break;
    case "clear":
      clear();
      break;
    default:
      "???";
  }
}

const keyboard = document.querySelector("#inputs");
const screen = document.querySelector("#display");

console.log(`Keyboard activated. Attaching event listener to keyboard.`)
keyboard.addEventListener("click", (event) => {
  handleClick(event);
});
