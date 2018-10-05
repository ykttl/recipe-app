let data = getData()
let filterWord = ''

renderRecipe(data)

document.querySelector('#add').addEventListener('click', () =>{
    const id = uuidv4()

    data.push({
        title: '',
        disc: '',
        ingredients: [],
        id: id
    })
 saveData(data)
    location.assign(`edit.html#${id}`)

})


document.querySelector('#search').addEventListener('input', (e) => {
    filterWord = e.target.value
    filterRender(data, filterWord)
})

