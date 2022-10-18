const express = require('express')
const app = express()
app.use(express.static('src'));
const path = require('path');
const port = 8000

let todos = [
    {
        Name:"View todos by category",
        Category: "Deleting",
        Status:"done"
    },
    {   
        Name:"Add categories",
        Category: "Random",
        Status:"done"
    },
    {   
        Name:"Select a category",
        Category: "Editing",
        Status:"done"
    },
    {   
        Name:"Delete",
        Category: "Adding",
        Status:""
    },
    {   
        Name:"Edit categories",
        Category: "Editing",
        Status:""
    },
    {   
        Name:"Good user experience",
        Category: "Deleting",
        Status:"done"
    },
]

let categories = []

todos.forEach(todo => {
    let cat = todo.Category;
    if (categories.includes(cat) == false) {
        categories.push(cat);
    }
})

app.get('/todos', (req, res) => {
    res.send(todos)
})

app.post('/todos', (req, res) => {
    console.log(req);
    todos.push({
        Name:req.query.Name,
        Category: "",
        Status:""
    })
    res.send(todos)
})

app.put('/todos', (req, res) => {
    let editedTodo = {
         Name: req.query.Name,
         Category: "",
         Status: ""
      }
    todos.splice(req.query.index, 1, editedTodo);
    res.send(todos)
})

app.delete('/todos', (req, res) =>{
    todos.splice(req.query.index, 1);
    res.send(todos)
})

app.get('/sort', (req, res) => {
    let sortedArray = [];
    todos.forEach(todo => {
        if (todo.Category === req.query.Category){
            sortedArray.push(todo);
        }
    })
    res.send(sortedArray)
})

app.get('/category', (req, res) => {
    res.send(categories)
})

app.post('/category', (req, res) => {
    console.log(req)
    categories.push(req.query.Category)
    res.send(categories)
})

app.put('/category', (req, res) => {
    let editedCat = req.query.Name
    todos.splice(req.query.index, 1, editedCat);
    res.send(categories)
})

app.delete('/category', (req, res) => {
    categories.splice(req.query.index, 1);
    res.send(categories)
})

app.listen(port, () => {
    console.log(`Example App running on ${port}`)
})