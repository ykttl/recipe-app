
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
    const recipeDiv = document.createElement('div')

    recipeEl.setAttribute('href', `edit.html#${recipe.id}`)
    recipeDiv.classList.add('recipeDiv')

    if (recipe.title.length === 0) {
        titleEl.textContent = 'No Title'
    } else {
         titleEl.textContent =  recipe.title
    }

    recipeDiv.appendChild(titleEl)
    recipeEl.appendChild(recipeDiv)

    return recipeEl
}


const renderRecipe = (data) => {
    const recipeList = document.querySelector('#recipeList')
     
    recipeList.innerHTML = ''

    data.forEach((recipe) => {
        const recipeEl = generateDOM(recipe)
        recipeList.appendChild(recipeEl)
    })
}

const filterRender = (data, filterWord) => {
    const filteredData =  data.filter((x) => x.title.includes(filterWord)) 
    const recipeList = document.querySelector('#recipeList')
      
     recipeList.innerHTML = ''
 
     filteredData.forEach((recipe) => {
         const recipeEl = generateDOM(recipe)
         recipeList.appendChild(recipeEl)
     })
 
}


const removeRecipe = (data, id) => { 
    const recipeIndex = data.findIndex((recipe) => recipe.id === id)
    if (recipeIndex !== -1) {
        data.splice(recipeIndex, 1)
    }
    saveData(data)
}

