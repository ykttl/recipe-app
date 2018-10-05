

let data = getData()
let hashId = location.hash.substring(1)

let recipe = data.find((recipe) => recipe.id === hashId)

document.querySelector('#title').addEventListener('input', (e) => {
    recipe.title = e.target.value
    console.log(recipe.title) 
    saveData(data)
})

document.querySelector('#desc').addEventListener('input', (e) => {
    recipe.disc = e.target.value
    console.log(recipe.disc) 
    saveData(data)
})

document.querySelector('#save').addEventListener('click', (e) => {
   location.assign('index.html')
})

document.querySelector('#delete').addEventListener('delete', (e) => {
    
})