import printFoodCategory from "./printFoodCategory.js";

let list = document.getElementById("list");

export default function printCategories(food) {
    let ul = document.createElement("ul");

    food.meals.map(category => {
        let li = document.createElement("li");
        li.innerText = category.strCategory;
        

        li.addEventListener("click", () => {
            printFoodCategory(category.strCategory);
        })
        ul.append(li);
        list.append(ul);
    }) 
    
}