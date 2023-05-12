const buttonRenderEl = document.querySelector('[data-action="render"]');
const buttonDestroyEl = document.querySelector('[data-action="destroy"]');
const inputEl = document.querySelector('[type="number"]');
const divEl = document.querySelector("#boxes");

const createBoxes = (amount) => {
  let result = "";
  for (let i = 0; i < inputEl.value; i += 1) {
    const newDiv = `<div style="background-color: ${getRandomColor()}; width: ${
      30 + i * 10
    }px; height: ${i * 10 + 30}px"> ${i + 1} </div>`;
    result += newDiv;
  }
  divEl.innerHTML = result;
};

const destroyBoxes = () => {
  divEl.innerHTML = "";
};

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

buttonRenderEl.addEventListener("click", createBoxes);
buttonDestroyEl.addEventListener("click", destroyBoxes);
