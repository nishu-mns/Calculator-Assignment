// function for calculation
function calc() {
  // Get user inputs
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);
  let operator = document.getElementById("operator").value;
  let resultElement = document.getElementById("result");

  // Perform calculation based on operator
  let result;
  switch (operator) {
    case "add":
      result = add(num1, num2);
      break;
    case "subtract":
      result = subtract(num1, num2);
      break;
    case "multiply":
      result = multiply(num1, num2);
      break;
    case "divide":
      result = divide(num1, num2);
      break;
    default:
      result = "Invalid operator";
  }

  //  Display result or error message
  if (isNaN(result)) {
    result === "Cannot divide by zero"
      ? (resultElement.innerText = result)
      : (resultElement.innerText = "Invalid input");
  } else {
    resultElement.innerText = "Result: " + result;
  }
}

// Functions for arithmetic operations

// for addition
function add(num1, num2) {
  return num1 + num2;
}

// for subtraction
function subtract(num1, num2) {
  return num1 - num2;
}

// for multiplication
function multiply(num1, num2) {
  return num1 * num2;
}

// for divide operation
function divide(num1, num2) {
  if (num2 === 0) {
    return "Cannot divide by zero";
  }
  return num1 / num2;
}

// function to clear the form
function clr() {
  document.getElementById("num1").value = "";
  document.getElementById("num2").value = "";
  document.getElementById("operator").value = "";
}
