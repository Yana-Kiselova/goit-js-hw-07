const inputEl = document.querySelector("#validation-input");
const length = 6;

const result = (event) => {
  if (event.target.value.length === length) {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
  } else {
    inputEl.classList.add("invalid");
    inputEl.classList.remove("valid");
  }
};

inputEl.addEventListener("change", result);
