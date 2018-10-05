
const getData = ()=> {
    const recipeJSON = localStorage.getItem('recipes')

    try {
        return recipeJSON ? JSON.parse(recipeJSON) : []
    } catch (e) {
        return []
    }
}

const saveData = (data) => {
    localStorage.setItem('recipes', JSON.stringify(data))
}

const generateDOM = (recipe) => {
    const recipeEl = document.createElement('div')
    const titleEl = document.createElement('p')
    const discEl = document.createElement('p')

    titleEl.textContent = 'title: ' + recipe.title
    recipeEl.appendChild(titleEl)

    discEl.textContent = 'disc: '+ recipe.disc
    recipeEl.appendChild(discEl)

    return recipeEl
}

const renderRecipe = (data) => {
    const box = document.querySelector('#box')
 
   data.forEach((recipe) => {
        const recipeEl = generateDOM(recipe)
        box.appendChild(recipeEl)
   })

}