const categories = document.querySelector("#categories");
const categoriesCount = categories.querySelectorAll(".item").length;
for (const category of categories.querySelectorAll(".item")) {
    
  const title = category.querySelector("h2").textContent;

  const elementsCount = category.querySelectorAll("li").length;

  console.log(`Категорія: ${title}, елементів: ${elementsCount}`);
}