const User = require('./user')

let newTodo = prompt("What is the new Todo?")

const newUser = new User({
    id: allUsers.length++,
    Name: newTodo,
    Category: "None",
    Status:""
})

newUser.save().then(doc => {
    console.log('new todo sucessfully saved')
    console.log(doc)
})

