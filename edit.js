
const titleInput = document.querySelector('#title')
const discInput = document.querySelector('#disc')
const saveButton = document.querySelector('#save')
const deleteButton = document.querySelector('#delete')
let data = getData()
let hashId = location.hash.substring(1)
let recipe = data.find((recipe) => recipe.id === hashId)

titleInput.value = recipe.title
discInput.value = recipe.disc


titleInput.addEventListener('input', (e) => {
    recipe.title = e.target.value
    console.log(recipe.title) 
    saveData(data)
})

discInput.addEventListener('input', (e) => {
    recipe.disc = e.target.value
    console.log(recipe.disc) 
    saveData(data)
})

saveButton.addEventListener('click', (e) => {
   location.assign('index.html')
})

deleteButton.addEventListener('click', (e) => {
    removeRecipe(data, hashId)
    location.assign('index.html')
})

//////

const addButton = document.querySelector('#addIngredients')
const textIngredients = document.querySelector('#textIngredients')
const ingBox = document.querySelector('#ingredientsBox')

 let ingredientsWord = ''

addButton.addEventListener('click', () => {
 recipe.ingredients.push(ingredientsWord)
     saveData(data)
     renderIngredients(recipe) 
     console.log(recipe.ingredients)
  
})

textIngredients.addEventListener('input', (e) => {   
   ingredientsWord = e.target.value
    
})

const generateIngDOM = (ing) => {
        const ingEl = document.createElement('div')
        ingEl.setAttribute('id', 'ingEl')
        ingEl.textContent = ing
       

        const xEl = document.createElement('button')
        xEl.setAttribute('id', 'xEl')
        xEl.textContent = 'x'
        ingEl.appendChild(xEl)
        ingBox.appendChild(ingEl)

        //remove
        xEl.addEventListener('click',(e)=> { 
            const x = e.target.parentNode
            console.log(x.textContent)

            const ingInStorage = recipe.ingredients.findIndex((ing => ing + 'x' === x.textContent))
            recipe.ingredients.splice(ingInStorage, 1)

            ingBox.removeChild(x)
            saveData(data)

            console.log( recipe.ingredients)
           
        })

}

const renderIngredients = (recipe) => { 
    textIngredients.innerHTML = ''
    textIngredients.value = ''
    ingBox.innerHTML = ''
   
    recipe.ingredients.forEach((ing) => { 
      generateIngDOM(ing) 
    })
}


const removeIng = (recipe) => {
   

//     const ingEl = document.querySelector('#ingEl')
//     const xIndex = recipe.ingredients.findIndex((ing) => ing + 'x' === ingEl.textContent )
//     console.log(xIndex)
//     console.log(ingEl.textContent)
//     recipe.ingredients.splice(xIndex, 1)
//     saveData(data)
//     renderIngredients(recipe)
//    console.log(recipe.ingredients)
  
}


renderIngredients(recipe)