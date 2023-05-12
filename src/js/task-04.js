const buttonElDecrement = document.querySelector('[data-action="decrement"]');
const buttonElIncrement = document.querySelector('[data-action="increment"]');
const spanEl = document.querySelector("#value");

let counterValue = 0;

const decrement = () => {
  counterValue -= 1;
  spanEl.innerHTML = counterValue;
};

const increment = () => {
  counterValue += 1;
  spanEl.innerHTML = counterValue;
};

buttonElDecrement.addEventListener("click", decrement);
buttonElIncrement.addEventListener("click", increment);
