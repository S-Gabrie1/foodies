import printCategories from "./printCatergory.js";



fetch ("https://www.themealdb.com/api/json/v1/1/list.php?c=list")
.then(res => res.json())
.then(data =>  {

printCategories(data);

})

