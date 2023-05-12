const ingredients = ["Картошка", "Грибы", "Чеснок", "Помидоры", "Зелень", "Приправы"];
const htmlEl = document.querySelector("#ingredients");
const htmlList = ingredients.map((ingredient) => {
  let li = document.createElement("li");
  li.innerText = ingredient;
  return li;
});

htmlEl.append(...htmlList);
