const User = require('./user')

const newUser = new User({
    firstName: "Richard",
    middleName: "Mark",
    lastName: "Stacey",
    age: 25,
    email: "staceyrichard1996@gmail.com"
})

newUser.save().then(doc => {
    console.log('new user sucessfully saved')
    console.log(doc)
})

