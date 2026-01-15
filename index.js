function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return b == 0 ? "divide by 0 error" : a / b;
}

let num1;
let num2;
let operator;

function operate(num1, num2, operator) {
  let result;
  switch (operator) {
    case "+":
      result = add(num1, num2);
      break;
    case "-":
      result = subtract(num1, num2);
      break;
    case "*":
      result = multiply(num1, num2);
      break;
    case "/":
      result = divide(num1, num2);
      break;
  }
  return result;
}

let containerDiv = document.querySelector(".container");
containerDiv.style.setProperty("--cell-size", 100 / 4 + "%");

let displayDiv = document.createElement("div");
displayDiv.textContent = "THIS IS THE DISPLAY AREA";
containerDiv.appendChild(displayDiv);

let commandDiv = document.createElement("div");
commandDiv.classList.add("buttonContainer");
containerDiv.appendChild(commandDiv);

for (let i = 0; i < 16; i++) {
  let digit = document.createElement("button");
  digit.classList.add("childButton");
  commandDiv.appendChild(digit);
}
