const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(express.static('src'));
const path = require('path');
const port = 8000

app.use(express.static('client'))
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

let todos = [
    {   
        id: 1,
        Name:"View todos by category",
        Category: "Deleting",
        Status:"done"
    },
    {   
        id: 2,
        Name:"Add categories",
        Category: "Random",
        Status:"done"
    },
    {   
        id: 3,
        Name:"Select a category",
        Category: "Editing",
        Status:"done"
    },
    {   
        id: 4,
        Name:"Delete categories",
        Category: "Adding",
        Status:""
    },
    {   
        id: 5,
        Name:"Edit categories",
        Category: "Editing",
        Status:""
    },
    {   
        id: 6,
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
        id: todos.length + 1,
        Name:req.body.Name,
        Category: "none",
        Status: ""
    })
    res.send(todos)
})

app.put('/todos', (req, res) => {
    let index = req.body.index
    let editedTodo = {
         id: index + 1,
         Name: req.body.Name,
         Category: "none",
         Status: ""
      }
    todos.splice(index, 1, editedTodo);
    res.send(todos)
})

app.delete('/todos', (req, res) =>{
    todos.splice(req.body.index, 1);
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
    categories.push(req.body.Category)
    res.send(categories)
})

app.put('/category', (req, res) => {
    let index = req.body.index
    let editedCat = req.body.Category
    categories.splice(index, 1, editedCat);
    res.send(categories)
})

app.delete('/category', (req, res) => {
    categories.splice(req.body.index, 1);
    res.send(categories)
})

app.listen(port, () => {
    console.log(`Example App running on ${port}`)
})