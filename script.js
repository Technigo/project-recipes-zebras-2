const meatButton = document.getElementById('meat-button')
const chickenButton = document.getElementById('chicken-button')
const fishButton = document.getElementById('fish-button')
const vegetarianButton = document.getElementById('vegetarian-button')

const button30 = document.getElementById('30')
const button60 = document.getElementById('60')
const button90 = document.getElementById('90')
const button120 = document.getElementById('120')

//Global var
let foodType
let time 


const myRecipeFunc = (foodType, time) => {
  //console.log(maxi)
  fetch(`https://api.edamam.com/search?q=${foodType}&app_id=af973ae3&app_key=3d25a0aca50ab9f0f6176749f6525590&from=0&to=20&time=1-${time}`)
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
  document.getElementById('recipe-items').innerHTML = ""
  foodType = meatButton.value
  myRecipeFunc(foodType)

})

chickenButton.addEventListener('click', () => {
  document.getElementById('recipe-items').innerHTML = ""
  foodType = chickenButton.value
  myRecipeFunc(foodType)

})

fishButton.addEventListener('click', () => {
  document.getElementById('recipe-items').innerHTML = ""
  foodType = fishButton.value
  myRecipeFunc(foodType)
})

vegetarianButton.addEventListener('click', () => {
  document.getElementById('recipe-items').innerHTML = ""
  foodType = vegetarianButton.value
  myRecipeFunc(foodType)

})


button30.addEventListener('click', () => {
  time = button30.value
  
  document.getElementById('recipe-items').innerHTML = ""

})

chickenButton.addEventListener('click', () => {
  document.getElementById('recipe-items').innerHTML = ""
  foodType = chickenButton.value
  myRecipeFunc(foodType)

})

fishButton.addEventListener('click', () => {
  document.getElementById('recipe-items').innerHTML = ""
  foodType = fishButton.value
  myRecipeFunc(foodType)
})

vegetarianButton.addEventListener('click', () => {
  document.getElementById('recipe-items').innerHTML = ""
  foodType = vegetarianButton.value
  myRecipeFunc(foodType)

})

myRecipeFunc('vegetarian', '20')


/*button.addEventListener('click', (event) => {
  event.preventDefault()

  switch (myRecipeFunc) {
    case 'meat': 
    foodType = meat.value
    break;
    case 'fish':
    foodType = fish.value
    break;
    case 'chicken': 
    foodType = chicken.value
    break;
    default:
      foodType = vegetarian.value
    
  }*/


  //foodType = meat.value
 /* myRecipeFunc(foodType)
  document.getElementById('recipe-items').innerHTML = ""
  //maximumresult.innerHTML = ""
})*/