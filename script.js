const myRecipeFunc = () => {
  fetch(
    `https://api.edamam.com/search?q=vegetarian&app_id=af973ae3&app_key=3d25a0aca50ab9f0f6176749f6525590&from=0&to=12&time=1%2B`)
    .then((response) => {
      return response.json()
    }).then((json) => {

      const foodTitle = Array.from(
        json.hits, item => item.recipe.label
      )

      const foodImage = Array.from(
        json.hits, item => item.recipe.image
      )


      const foodUrl = Array.from(
        json.hits, item => item.recipe.url
      )


      const foodRecipe = Array.from(
        json.hits, item => item.recipe.source
      )

      const cookingTime = Array.from(
        json.hits, item => item.recipe.totalTime
      )


      /*const timeInHours = cookingTime.map((value, index) => {
        return value / 60

        <p>${cookingTime[index]}</p>
          <p>${timeInHours[index].toFixed(1)} </p>
      }) */

      const timeConvert = ((Time) => {
        const hours = Math.floor(Time/ 60)
        const minutes = Time % 60
        if (minutes < 10) {
          return `${hours}:0${minutes}`
        } else {
        return `${hours}:${minutes}`
        }
      })

      
     cookingTime.forEach((value, index)=>{
      cookingTime[index] = timeConvert(cookingTime[index]);
     })
      


      const ourRecipes = json.hits

      ourRecipes.forEach((value, index) => {
        document.getElementById('recipe-items').innerHTML += `
        <div>
          <h2>${foodTitle[index]}</h2>
          <p>Maker: ${foodRecipe[index]}</p>
          
          <a href="${foodUrl[index]}"><img src="${foodImage[index]}" ></a>
          
          <p><img class="icon" src="cookingtime.png">${cookingTime[index]}</p>
        </div>
        `
      })
    })

}

myRecipeFunc()