# Simple JavaScript Calculator

A basic calculator built using HTML, CSS, and JavaScript. It performs standard arithmetic operations: addition, subtraction, multiplication, and division.


## Features

- Performs addition (`+`)
- Performs subtraction (`-`)
- Performs multiplication (`*`)
- Performs division (`/`)
- Handles division by zero errors
- Clears the display (`C` button)
- Allows for sequential operations (the result of one calculation can be used as the first number for the next)

## How to Use

1.  **Clone the repository:**
    ```bash
    git clone git@github.com:ZeroDav808/Calculator.git
    ```
2.  **Open the `index.html` file** in your web browser.
3.  **Interact with the calculator** by clicking the number and operation buttons.
4.  **Press the `=` button** to see the result.
5.  **Press the `C` button** to clear the display and reset the calculator.

## Code Structure

The project structure is as follows:

-   **`index.html`:** Defines the basic structure of the calculator interface, including the display and buttons.
-   **`style.css`:** Contains the styles to make the calculator visually appealing and functional.
-   **`script.js`:** Holds all the JavaScript code that handles user interactions, performs calculations, and updates the display.

    -   **`add(x, y)`:** Function to perform addition.
    -   **`sub(x, y)`:** Function to perform subtraction.
    -   **`multiply(x, y)`:** Function to perform multiplication.
    -   **`divide(x, y)`:** Function to perform division, including error handling for division by zero.
    -   **`operate(x, y, operation)`:** A central function that takes two numbers and an operation and calls the appropriate arithmetic function.
    -   **`values` object:** Stores the current state of the calculator (`num1`, `num2`, `op1`, `result`).
    -   **`clear()`:** Resets the calculator's state and clears the display.
    -   **`handleNumber(value)`:** Handles clicks on number buttons, appending digits to the current number.
    -   **`handleOperation(value)`:** Handles clicks on operation buttons, storing the selected operation and managing the flow for sequential calculations.
    -   **`handleEqual()`:** Performs the calculation based on the stored numbers and operation and displays the result.
    -   **`handleClick(e)`:** An event handler that determines which button was clicked and calls the appropriate function.
    -   Event listener on the `.keyboard` element to handle button clicks.