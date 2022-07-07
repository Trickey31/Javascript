const increase = document.querySelector(".counter-increase");
const decrease = document.querySelector(".counter-decrease");
const counter = document.querySelector(".counter-number");

increase.addEventListener("click", handleIncrease);
decrease.addEventListener("click", handleDecrease);

let counterValue = parseInt(counter.textContent);
function handleIncrease() {
  counterValue++;
  return (counter.textContent = counterValue);
}
function handleDecrease() {}
