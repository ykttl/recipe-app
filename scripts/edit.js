/// recipe ///

const titleInput = document.querySelector('#title')
const discInput = document.querySelector('#disc')
const saveButton = document.querySelector('#save')
const deleteButton = document.querySelector('#delete')
const lastEdited = document.querySelector('#lastEdited')

let data = getData()
let hashId = location.hash.substring(1)
let recipe = data.find((recipe) => recipe.id === hashId)
const generateTime = (timestamp) => `Last edited on: ${moment(timestamp).format('MMM-DD-YY  H:mm ')}`

titleInput.value = recipe.title
discInput.value = recipe.disc
lastEdited.textContent = generateTime((recipe.editedAt))

titleInput.addEventListener('input', (e) => {
    recipe.title = e.target.value
    recipe.editedAt = moment().valueOf() 
    saveData(data)
   
})

discInput.addEventListener('input', (e) => {
    recipe.disc = e.target.value
    recipe.editedAt = moment().valueOf() 
    saveData(data)
   
})

saveButton.addEventListener('click', (e) => {
   location.assign('index.html')
   recipe.editedAt = moment().valueOf() 
})

deleteButton.addEventListener('click', (e) => {
    removeRecipe(data, hashId)
    location.assign('index.html')
})

/// ingredients ///

const addButton = document.querySelector('#addIngredients')
const textIngredients = document.querySelector('#textIngredients')
const ingList = document.querySelector('#ingredientsList')

let ingredientsWord = ''

addButton.addEventListener('click', () => {
 recipe.ingredients.push(ingredientsWord)
 recipe.editedAt = moment().valueOf() 
     saveData(data)
     renderIngredients(recipe) 
    
})

textIngredients.addEventListener('input', (e) => {   
   ingredientsWord = e.target.value 
})

const generateIngDOM = (ing) => {
    // ingredient element
    const ingEl = document.createElement('div')
    ingEl.setAttribute('id', 'ingEl')
    ingEl.textContent = ing
    
    //remove x button
    const xEl = document.createElement('button')
    xEl.setAttribute('id', 'xEl')
    xEl.textContent = 'X'
    ingEl.appendChild(xEl)
    ingList.appendChild(ingEl)

    //remove event
    xEl.addEventListener('click',(e) => { 
        const x = e.target.parentNode 
        const ingIndex = recipe.ingredients.findIndex( ing => ing + 'x' === x.textContent)
        recipe.ingredients.splice(ingIndex, 1)
        ingList.removeChild(x)
        saveData(data)        
    })
}

const renderIngredients = (recipe) => { 
    textIngredients.innerHTML = ''
    textIngredients.value = ''
    ingList.innerHTML = ''
    recipe.ingredients.forEach((ing) => { 
       generateIngDOM(ing) 
    })
}


renderIngredients(recipe)