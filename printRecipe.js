

export default function printRecipe(recipeId) {
    fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + recipeId)
    .then(res => res.json())
    .then(data => {
        let recipeDiv = document.createElement("div");

        data.meals.map(idNumb => {
            recipe.innerHTML = "";
            let h2 = document.createElement("h2");
            let recipeInstruction = document.createElement("p");
            let recipeImg = document.createElement("img");

            h2.innerText = idNumb.strMeal;
            recipeImg.src = idNumb.strMealThumb;
            recipeInstruction.innerText = idNumb.strInstructions;

            recipeDiv.append(h2);
            recipeDiv.append(recipeImg);
            recipeDiv.append(recipeInstruction);
            recipe.append(recipeDiv);
        })

    }) 
}