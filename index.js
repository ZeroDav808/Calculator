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

const values = {
  num1 : null,
  num2 : null,
  operation1 : null,
  operation2 : null,
  result : null,
}



const keyboard = document.querySelector(".keyboard");
const output = document.querySelector("p");

function clear() {
    let num1 = undefined;
    let num2 = undefined;
    let operation1 = undefined;
    let operation2 = undefined;
    output.textContent = "";
}

function handleNumber(element){
  if()
}

function handleClick(event) {
    const clickedElement = event.target;

    switch(clickedElement.className){
      case 'number':
        handleNumber(clickedElement);
        break;
      case 'operation':

      case 'equal':

      case 'clear':


    }
}

keyboard.addEventListener("click", (e) => {
  handleClick(e);
});
