import printRecipe from "./printRecipe.js";


let recipe = document.getElementById("recipe");

export default function printFoodCategory(type) {
    fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=" + type)
    
    .then(res => res.json())
    .then(data => {
        let infoDiv = document.createElement("div");
        
        data.meals.map(name => {
            let h2 = document.createElement("h2");
            let foodImg = document.createElement("img");

            h2.innerText = name.strMeal;
            foodImg.src = name.strMealThumb;

            foodImg.addEventListener("click", () => {
                printRecipe(name.idMeal);
                console.log(name.idMeal);
            })
            
            infoDiv.append(h2);
            infoDiv.append(foodImg);
            recipe.innerHTML = "";
        })
        
        recipe.append(infoDiv);
        console.log(data)
    })
};
