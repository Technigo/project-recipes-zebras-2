const meatButton = document.getElementById('meat-button')
const chickenButton = document.getElementById('chicken-button')
const fishButton = document.getElementById('fish-button')
const vegetarianButton = document.getElementById('vegetarian-button')

const result10 = document.getElementById('result10')
const result15 = document.getElementById('result15')
const result20 = document.getElementById('result20')
const result25 = document.getElementById('result25')

const button30 = document.getElementById('time30')
const button60 = document.getElementById('time60')
const button90 = document.getElementById('time90')
const button120 = document.getElementById('time120')


//Global var
let foodType = ""
let result = 5
let time = ""

const myRecipeFunc = (foodType, result, time) => {
  document.getElementById('recipe-items').innerHTML = ""

  fetch(`https://api.edamam.com/search?q=${foodType}&app_id=af973ae3&app_key=3d25a0aca50ab9f0f6176749f6525590&from=0&to=${result}&time=1-${time}`)
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



meatButton.addEventListener('click', () => {
  foodType = meatButton.value
  myRecipeFunc(foodType, result, time)

})

chickenButton.addEventListener('click', () => {
  foodType = chickenButton.value
  myRecipeFunc(foodType, result, time)

})

fishButton.addEventListener('click', () => {
  foodType = fishButton.value
  myRecipeFunc(foodType, result, time)
})

vegetarianButton.addEventListener('click', () => {
  foodType = vegetarianButton.value
  myRecipeFunc(foodType, result, time)

})

button30.addEventListener('click', () => {
  time = button30.value
  myRecipeFunc(foodType, result, time)

})

button60.addEventListener('click', () => {
  time = button60.value
  myRecipeFunc(foodType, result, time)

})

button90.addEventListener('click', () => {
  time = button90.value
  myRecipeFunc(foodType, result, time)
})

button120.addEventListener('click', () => {
  time = button120.value
  myRecipeFunc(foodType, result, time)

})


result10.addEventListener('click', () => {
  result = result10.value
  myRecipeFunc(foodType, result, time)
})

result15.addEventListener('click', () => {
  result = result15.value
  myRecipeFunc(foodType, result, time)
})

result20.addEventListener('click', () => {
  result = result20.value
  myRecipeFunc(foodType, result, time)
})

result25.addEventListener('click', () => {
  result = result25.value
  myRecipeFunc(foodType, result, time)
})

myRecipeFunc(foodType, result, time)


