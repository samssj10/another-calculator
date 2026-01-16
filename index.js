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

let num1 = null,
  num2 = null,
  operator = null;

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
displayDiv.classList.add("resultDisplay");
displayDiv.textContent = "0";
containerDiv.appendChild(displayDiv);

let commandDiv = document.createElement("div");
commandDiv.classList.add("buttonContainer");
containerDiv.appendChild(commandDiv);
let allKeys = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "+", "-", "*", "/", "=", "CLEAR"];

for (let i = 0; i < 16; i++) {
  let digit = document.createElement("button");
  digit.textContent = allKeys[i];
  digit.classList.add("childButton");
  digit.addEventListener("click", updateOperationKeys);
  commandDiv.appendChild(digit);
}

function updateOperationKeys(e) {
  if (e.target.textContent === "CLEAR") {
    num1 = num2 = operator = null;
    displayDiv.textContent = 0;
  } else if (e.target.textContent === "=") {
    if (num1 !== null && num2 !== null && operator) {
      // console.log("all filled");
      num1 = operate(num1, num2, operator);
      num2 = operator = null;
      displayDiv.textContent = num1;
    }
    // console.log(
    //   `all not filled num1=${num1}, num2=${num2}, operator=${operator}`
    // );
  } else {
    if (["+", "-", "*", "/"].includes(e.target.textContent)) {
      if (num1 === null) {
        num1 = 0;
      } else if (num2 !== null) {
        num1 = operate(num1, num2, operator);
        num2 = null;
      }
      operator = e.target.textContent;
      // displayDiv.textContent = `${num1} ${operator ? operator : ""} ${
      //   num2 !== null ? num2 : ""
      // }`;
    } else {
      let value = +e.target.textContent;
      if (num1 === null) {
        num1 = value;
      } else if (num1 !== null && !operator) {
        num1 = num1 * 10 + value;
      } else if (num1 !== null && operator) {
        if (num2 === null) {
          num2 = value;
        } else {
          num2 = num2 * 10 + value;
        }
      }
      // displayDiv.textContent = `${num1} ${operator ? operator : ""} ${
      //   num2 !== null ? num2 : ""
      // }`;
    }
    displayDiv.textContent = `${num1} ${operator ?? ""} ${num2 ?? ""}`;
  }
}
