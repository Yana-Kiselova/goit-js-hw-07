const inputEl = document.querySelector("#font-size-control");
const spanEl = document.querySelector("#text");

const textInput = (event) => {
  spanEl.style.fontSize = `${event.target.value}px`;
};

inputEl.addEventListener("input", textInput);
