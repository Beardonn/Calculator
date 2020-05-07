let input = document.querySelector(".calculator .input");
const calcButtons = document.querySelectorAll(".calc-button:not(.equasions)");
const cButton = document.querySelector(".calc-buttons .calc-row .double ");
const equasionButton = document.querySelectorAll(".equasions:not(.double)");
let currentNumber = "";
let numberInMemory = "";
let equasionSign = "";

function start() {
  calcButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      getNumber(event.target.innerHTML);
      input.innerHTML = currentNumber;
    });
  });
  cButton.addEventListener("click", clearEquasion);
  equasions();
}
function clearEquasion() {
  currentNumber = "";
  numberInMemory = "";
  input.innerHTML = "0";
}

function getNumber(number) {
  currentNumber += number;
}
function equasions() {
  equasionButton.forEach((button) => {
    if (button.innerHTML === "%") {
      button.addEventListener("click", (event) => {
        if (numberInMemory === "") {
          numberInMemory = currentNumber;
          currentNumber = "";
          input.innerHTML = 0;
          equasionSign = "/";
          return;
        }
        doEquasion(equasionSign);
      });
    }
    if (button.innerHTML === "X") {
      button.addEventListener("click", (event) => {
        if (numberInMemory === "") {
          numberInMemory = currentNumber;
          currentNumber = "";
          input.innerHTML = 0;
          equasionSign = "*";
          return;
        }
        doEquasion(equasionSign);
      });
    }
    if (button.innerHTML === "-") {
      button.addEventListener("click", (event) => {
        if (numberInMemory === "") {
          numberInMemory = currentNumber;
          currentNumber = "";
          input.innerHTML = 0;
          equasionSign = "-";
          return;
        }
        doEquasion(equasionSign);
      });
    }
    if (button.innerHTML === "+") {
      button.addEventListener("click", (event) => {
        if (numberInMemory === "") {
          numberInMemory = currentNumber;
          currentNumber = "";
          input.innerHTML = 0;
          equasionSign = "+";
          return;
        }
        doEquasion(equasionSign);
      });
    }
    if (button.innerHTML === "=") {
      button.addEventListener("click", (event) => {
        if (numberInMemory === "") {
          return;
        } else {
          doEquasion(equasionSign);
        }
      });
    }
    if (button.innerHTML === "A") {
      button.addEventListener("click", (event) => {
        backArrow();
      });
    }
  });
}
function doEquasion(equasionSign) {
  if (equasionSign === "+") {
    let cNumber = parseInt(currentNumber);
    let mNumber = parseInt(numberInMemory);
    let result = cNumber + mNumber;
    currentNumber = result.toString();
    input.innerHTML = currentNumber;
    equasionSign = "";
    numberInMemory = "";
  } else if (equasionSign === "-") {
    let cNumber = parseInt(currentNumber);
    let mNumber = parseInt(numberInMemory);
    let result = Math.abs(cNumber - mNumber);
    currentNumber = result.toString();
    input.innerHTML = currentNumber;
    equasionSign = "";
    numberInMemory = "";
  } else if (equasionSign === "*") {
    let cNumber = parseInt(currentNumber);
    let mNumber = parseInt(numberInMemory);
    let result = cNumber * mNumber;
    currentNumber = result.toString();
    input.innerHTML = currentNumber;
    equasionSign = "";
    numberInMemory = "";
  } else if (equasionSign === "/") {
    let cNumber = parseInt(currentNumber);
    let mNumber = parseInt(numberInMemory);
    let result = Math.round(mNumber / cNumber);
    currentNumber = result.toString();
    input.innerHTML = currentNumber;
    equasionSign = "";
    numberInMemory = "";
  }
}
function backArrow() {
  let cNumber = input.innerHTML;
  console.log(cNumber.length);
  if (cNumber.length === 1) {
    console.log("wbilem");
    input.innerHTML = "0";
    currentNumber = "";
  } else {
    let newNumber = cNumber.slice(0, -1);
    input.innerHTML = newNumber;
    console.log(cNumber);
    currentNumber = newNumber;
    console.log(cNumber);
  }
}
