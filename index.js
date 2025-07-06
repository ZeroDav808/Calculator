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

function handleNumber(value) {}

function handleOperator(target) {}

function handleEqual() {}

function handleClick(event) {
  let target = event.target;

  switch (target.classList[1]) {
    case "number":
      console.log(`It's a number`);
      break;
    case "operator":
      console.log(`It's an operator -> ${target.textContent}`);
      handleOperator(target);
      break;
    case "equal":
      console.log(`It's an equal sign`);
      handleEqual();
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

console.log(`Keyboard activated. Attaching event listener to keyboard.`)
keyboard.addEventListener("click", (event) => {
  handleClick(event);
});
