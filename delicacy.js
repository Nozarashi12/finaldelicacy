
function getRecipe() {
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
        .then(res => {
            return res.json();
        })
        .then(data => {
            document.querySelector(".random").innerHTML =
                `<h2 class="title2">Random Recipe</h2>
                <div class="rndimg">
                    <button class="ibutton" onclick="ingredient()"><img class="recipe" src="${data.meals[0].strMealThumb}" ></button>
                    <p class="rname">${data.meals[0].strMeal}</p>
                </div>`;
                // console.log(data);
        })
        .catch(error => {
            console.log("Recipe not found");
        });
}

getRecipe();

function ingredient(){
    const box=document.querySelector(".box")

    box.style.visibility="visible"}

document.querySelector(".search").addEventListener("input", getCat)

function getCat() {
    const catname = document.querySelector(".search").value;
    const cat_URL = (`https://www.themealdb.com/api/json/v1/1/filter.php?c=${catname}`);
    fetch(cat_URL)
        .then(res => res.json())
        .then(data => { 
            const shai=document.querySelector(".searchb4").innerHTML =
                `<h2 class="b4meals">Popular Dishes made with ${catname}</h2>
            <div class="mealimg">
            <img class="meals" src="${data.meals[0].strMealThumb}">
            <button class="ibutton" onclick="ingredient()"><p class="lastp">${data.meals[0].strMeal} - (recipe)</p></button>
            <img class="meals" src="${data.meals[1].strMealThumb}">
            <button class="ibutton" onclick="ingredient()"><p class="lastp">${data.meals[1].strMeal} - (recipe)</p></button>
            <img class="meals" src="${data.meals[2].strMealThumb}">
            <button class="ibutton" onclick="ingredient()"><p class="lastp">${data.meals[2].strMeal} - (recipe)</p></button>
            <img class="meals" src="${data.meals[3].strMealThumb}">
            <button class="ibutton" onclick="ingredient()"><p class="lastp">${data.meals[3].strMeal} - (recipe)</p></button>
          </div>`
        })
        .catch(error => {
            console.log(error,"Error fetching category");
        });
};


getCat();

function getingredient(){
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    .then(res => {
        return res.json();
    })
    .then(data => {
    const mealname=document.querySelector(".box")
    
    
    mealname.innerHTML=
    ` <h1>Ingredients</h1>
    <div class="close" onclick="document.querySelector('.box').style.visibility='hidden'">&times;</div>
</div>
    <ul>
    <li> ${data.meals[0].strIngredient1} ${data.meals[0].strMeasure1}</li>
    <li>${data.meals[0].strIngredient2} ${data.meals[0].strMeasure2}</li>
    <li> ${data.meals[0].strIngredient3} ${data.meals[0].strMeasure3}</li>
    <li>${data.meals[0].strIngredient4} ${data.meals[0].strMeasure4}</li>
    <li> ${data.meals[0].strIngredient5} ${data.meals[0].strMeasure5}</li>
    <li>${data.meals[0].strIngredient6} ${data.meals[0].strMeasure6}</li>
    <li> ${data.meals[0].strIngredient7} ${data.meals[0].strMeasure7}</li>
    <li>${data.meals[0].strIngredient8} ${data.meals[0].strMeasure8}</li>
    <li> ${data.meals[0].strIngredient9} ${data.meals[0].strMeasure9}</li>
    <li>${data.meals[0].strIngredient10} ${data.meals[0].strMeasure10}</li>
     </ol>`    
})
}
getingredient()

