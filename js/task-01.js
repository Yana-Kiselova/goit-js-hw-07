const countCategoryItems = document.querySelector("#categories");
console.log(`В списке ${countCategoryItems.children.length} категории.`);

[...countCategoryItems.children].forEach((item) => {
  console.log(`Категория: ${item.children[0].textContent}`);
  console.log(`Количество элементов: ${item.children[1].children.length}`);
});
