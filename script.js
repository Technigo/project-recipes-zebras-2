

const myRecipeFunc = () => {
    fetch(
        `https://api.edamam.com/search?q=vegetarian&app_id=af973ae3&app_key=3d25a0aca50ab9f0f6176749f6525590&from=0&to=12`)
    .then((response) => {
        return response.json()
    }).then((json) => { 
        console.log(json)
        console.log(json.hits[0].recipe.label)



        const foodTitle = Array.from(
            json.hits, item => item.recipe.label
        )
        console.log(foodTitle)
    })

}

myRecipeFunc()