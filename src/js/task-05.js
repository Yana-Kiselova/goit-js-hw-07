const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");
const onChange = (event) => {
  if (event.target.value === "") {
    outputEl.innerHTML = "незнакомец";
  } else {
    outputEl.innerHTML = event.target.value;
  }
};

inputEl.addEventListener("input", onChange);
