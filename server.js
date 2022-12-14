const mongoose = require('mongoose');
require('dotenv').config();
const uri = process.env.MONGOURI

mongoose.connect(
  uri,
  {
    useNewUrlParser: true
  }
)
.then(e => console.log('MongoDB Ready!'))
.catch(console.error)

const User = require('./user')

const findAllUsers = async () => {
    const allUsers = await User.find()

    console.log(allUsers)

    // allUsers.forEach(todo => {
    //   let cat = todo.Category;
    //   if (categories.includes(cat) == false) {
    //       categories.push(cat);
    //   }
    // })
}

findAllUsers()

// const findUserByName = async (Name) => {
//     return User.find({ Name })
// }

// findUserByName("Add Categories")

// require('./createTodo')
// require('./query')
// require('./update')
// require('./delete')

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

app.get('/todos', async (req, res) => {

  const todos = await findAllUsers()

  res.send(todos)

})

// app.post('/todos', (req, res) => {
//     console.log(req);
//     todos.push({
//         id: todos.length + 1,
//         Name:req.body.Name,
//         Category: req.body.Category,
//         Status: ""
//     })
//     res.send(todos)
// })

// app.put('/todos', (req, res) => {
//     let index = req.body.index - 1
//     let editedTodo = {
//          id: index + 1,
//          Name: req.body.Name,
//          Category: 'none',
//          Status: ""
//       }
//     todos.splice(index, 1, editedTodo);
//     res.send(todos)
// })

// app.delete('/todos', (req, res) =>{
//     let index = req.body.index - 1
//     todos.splice(index, 1);
//     res.send(todos)
// })

// app.get('/sort', (req, res) => {
//     let sortedArray = [];
//     todos.forEach(todo => {
//         if (todo.Category === req.query.Category){
//             sortedArray.push(todo);
//         }
//     })
//     res.send(sortedArray)
// })

// app.get('/category', (req, res) => {
//     res.send(categories)
// })

// app.post('/category', (req, res) => {
//     console.log(req)
//     categories.push(req.body.Category)
//     res.send(categories)
// })

// app.put('/category', (req, res) => {
//     let index = req.body.index
//     let editedCat = req.body.Category
//     todos.forEach(todo => {
//         if (todo.Category === req.body.Value) {  
//              todo.Category = req.body.Category;
//         }
//      })
//     categories.splice(index, 1, editedCat);
//     res.send(categories)
// })

// app.delete('/category', (req, res) => {
//     let index = req.body.index
//     todos.forEach(todo => {
//         if (todo.Category === req.body.Value) {  
//              todo.Category = "";
//         }
//      })
//     categories.splice(index, 1);
//     res.send(categories)
// })

app.listen(port, () => {
    console.log(`Example App running on ${port}`)
})