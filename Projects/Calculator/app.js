let screen = document.querySelector("#calcScreen");
// All Buttons
let numBtn = document.querySelectorAll(".calcBtn");
let plusBtn = document.querySelector("#plusBtn");
let minusBtn = document.querySelector("#minusBtn");
let multiplyBtn = document.querySelector("#multiplyBtn");
let divideBtn = document.querySelector("#divideBtn");
let ceBtn = document.querySelector("#ceBtn");
let equalBtn = document.querySelector("#equalBtn");
let num = [];
let num2 = ``;
let num3 = ``;
let sign = ``;
// num Buttons
numBtn.forEach((i) => {
  i.addEventListener("click", (e) => {
    num.push(e.target.value);
    screen.innerText = num.join("");
    screen.scrollLeft = screen.scrollWidth;
  });
});
equalBtn.addEventListener("click", () => {
  calcFunction();
});
calcFunction = () => {
  let numCalc = num.join("");
  let answer = eval(numCalc);
  screen.innerText = answer;
};

// Clear Button
ceBtn.addEventListener("click", () => {
  num1 = 0;
  screen.innerText = num1;
  location.reload();
});
