
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
    const recipeEl = document.createElement('a')
    const titleEl = document.createElement('p')

    recipeEl.setAttribute('href', `edit.html#${recipe.id}`)

    titleEl.textContent =  recipe.title
    recipeEl.appendChild(titleEl)

    return recipeEl
}


const renderRecipe = (data) => {
    const box = document.querySelector('#box')
     
    box.innerHTML = ''

    data.forEach((recipe) => {
        const recipeEl = generateDOM(recipe)
        box.appendChild(recipeEl)
    })
}

const filterRender = (data, filterWord) => {
    const filteredData =  data.filter((x) => x.title.includes(filterWord)) 
    const box = document.querySelector('#box')
      
     box.innerHTML = ''
 
     filteredData.forEach((recipe) => {
         const recipeEl = generateDOM(recipe)
         box.appendChild(recipeEl)
     })
 
}


const removeRecipe = (data, id) => { 
    const recipeIndex = data.findIndex((recipe) => recipe.id === id)
    if (recipeIndex !== -1) {
        data.splice(recipeIndex, 1)
    }
    saveData(data)
}

