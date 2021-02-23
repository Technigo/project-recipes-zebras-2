const maxTime = document.getElementById('max-time')
const button = document.getElementById('button')
const inputValue = document.getElementById('input-value')

//Global var
let maxi = 60


const myRecipeFunc = (maxi) => {
  //console.log(maxi)
  fetch(
    `https://api.edamam.com/search?q=vegetarian&app_id=af973ae3&app_key=3d25a0aca50ab9f0f6176749f6525590&from=0&to=24&time=1-${maxi}`)
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
        <div class="recipe">
          <h2>${foodTitle[index]}</h2>
          <a class="source-p" href="${foodUrl[index]}">Source: ${foodRecipe[index]}</a> 
          <a href="${foodUrl[index]}"><img class="food-img" src="${foodImage[index]}" ></a>
          <p><img class="icon" src="cookingtime.png">${cookingTime[index]}</p>
        </div>
        `
      })
    })
}


myRecipeFunc(maxi)


button.addEventListener('click', () => {
  //event.preventDefault()
  //console.log(maxTime.value)
  //myRecipeFunc(maxTime.value)
  //console.log(maxTime.value)
  maxi = maxTime.value
  console.log(maxi)
  myRecipeFunc(maxi)
  document.getElementById('recipe-items').innerHTML = ""
})






