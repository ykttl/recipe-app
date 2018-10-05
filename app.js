let data = getData()

document.querySelector('#add').addEventListener('click', () =>{
    const id = uuidv4()

    data.push({
        title: '',
        disc: '',
        id: id
    })
 saveData(data)
    location.assign(`edit.html#${id}`)

})

renderRecipe(data)

