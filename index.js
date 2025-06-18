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

const opVariables = {
  firstOperand: null,
  secondOperand: null,
  operation: null,
};

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
