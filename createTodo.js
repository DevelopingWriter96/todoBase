const User = require('./user')

const newUser = new User({
    id: 4,
    Name:"Add Categories",
    Category: "Adding",
    Status:""
})

newUser.save().then(doc => {
    console.log('new todo sucessfully saved')
    console.log(doc)
})

