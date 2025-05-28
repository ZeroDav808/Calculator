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

