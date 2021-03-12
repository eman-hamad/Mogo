let searchInput = document.getElementById('searchInput');
let searchBtn = document.getElementById('searchBtn');
let recipesRow = document.getElementById('recipesRow');
let recipeDetails = document.getElementById('recipeDetails');
let allItems = []
// 
// 
async function getCate(item) {
    let res = await fetch(`https://forkify-api.herokuapp.com/api/search?&q=${item}`)
    allItems = await res.json();
    allItems = allItems.recipes;
    displayData()
    console.log(allItems)
}

function displayData() {
    let box = ``;

    for (let i = 0; i < allItems.length; i++){
        let id = "'" + allItems[i].recipe_id + "'";
        box += `<div class="col-4 ">
        <div class="recipe" onclick="getDetails(${id})">
                                <img src="${allItems[i].image_url}" alt="" class="img-fluid">
                                <h3 class="primary-mine py-4">${allItems[i].title}</h3>
                                <p>${allItems[i].publisher}</p>
                                </div>
                            </div>`
    }
    recipesRow.innerHTML = box;
}



async function getDetails(id) {
    console.log(id)
    let res = await fetch(`https://forkify-api.herokuapp.com/api/get?rId=${id}`)
    let itemDetails= await res.json();
    let allV = itemDetails.recipe;
    displayDetails(allV)
    console.log(allV)
}

function displayDetails(details) {
    let box = `<div class="recipeDetials"> <h2 class="color-mine py-1">${details.title}</h2> 
    <img src="${details.image_url}" class="img-fluid">
    <ul class="fa-ul py-5">`;
    for (let ingredient of details.ingredients) {
        box += `  <li><span class="fa-li"><i class="fas fa-utensils"></i></span>${ingredient}</li>`
    }
  box +=`</ul>
    </div>
    `
    recipeDetails.innerHTML = box
}
searchBtn.addEventListener('click', function () {
   
        (async function () {
            await getCate(searchInput.value)
        })();
})