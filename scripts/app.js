let data = getData()
let filterWord = ''
let timestamp = moment().valueOf()

renderRecipe(data)

document.querySelector('#add').addEventListener('click', () =>{
    const id = uuidv4()
    data.push({
        title: '',
        description: '',
        ingredients: [],
        createdAt: timestamp,
        editedAt: timestamp,
        id: id
    })
    saveData(data)
    location.assign(`edit.html#${id}`)
})


document.querySelector('#search').addEventListener('input', (e) => {
    filterWord = e.target.value
    filterRender(data, filterWord)
})

