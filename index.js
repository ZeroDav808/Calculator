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

const screen = document.querySelector("p");
const keyboard = document.querySelector(".keyboard");

let values = {
  num1: null,
  num2: null,
  op1: null,
  result: null,
}

function clear() {
  for(let key in values){
    values[key] = null;
  }
  screen.textContent = "";
}

function handleNumber(value) {
  if (values.result) {
    values.num1 = value; // Start fresh with the new number
    values.result = null;
    values.op1 = null;
    values.num2 = null;
    screen.textContent = values.num1;
  } else if (!values.op1) {
    if (!values.num1) {
      values.num1 = value;
    } else {
      values.num1 += value;
    }
    screen.textContent = values.num1;
  } else if (values.op1) {
    if (!values.num2) {
      values.num2 = value;
    } else {
      values.num2 += value;
    }
    screen.textContent = values.num2;
  }
}


  function handleOperation(value) {
    if (values.result) {
      values.num1 = values.result;
      values.result = null;
      values.num2 = null; // Reset num2 for the new operation
    } else if (values.num1 && values.op1 && values.num2) {
      // Handle chained operations (e.g., 1 + 2 = 3, then * 4)
      values.result = operate(Number(values.num1), Number(values.num2), values.op1);
      values.num1 = values.result;
      values.num2 = null;
    }
    values.op1 = value;
    console.log(values.op1);
  }

  function handleEqual() {
    if (!values.num1 || !values.op1 || !values.num2) {
      return;
    }
  
    console.log(`Num1 = ${values.num1}, Num2 = ${values.num2}, Operation = ${values.op1}`);
    values.result = operate(Number(values.num1), Number(values.num2), values.op1);
    screen.textContent = values.result;
    values.num1 = values.result; // Update num1 for potential next operation
    values.op1 = null;          // Reset op1 as the current operation is complete
    values.num2 = null;          // Reset num2
  }

function handleClick(e) {
  const button = e.target;

  switch (button.className) {
    case "number":
      console.log("The button is a number");
      handleNumber(button.textContent);
      break;
    case "operation":
      console.log("The button is an operation");
      handleOperation(button.textContent);
      break;
    case "equal":
      console.log("The button is an equal button");
      handleEqual();
      break;
    case "clear":
      console.log("The button is a clear button");
      clear();
      break;
  }
}

keyboard.addEventListener("click", (e) => {
  handleClick(e);
});
