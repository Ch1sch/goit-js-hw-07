const categories = document.querySelector("#categories");
const categoriesCount = categories.querySelectorAll(".item").length;
console.log("Numbers of categories:", categoriesCount);
for (const category of categories.querySelectorAll(".item")) {
  const categoryTitle = category.querySelector("h2").textContent;
  const categoryItemsCount = category.querySelectorAll("li").length;
  console.log(`Category: ${categoryTitle}, Elements: ${categoryItemsCount}`);
}