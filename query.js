const User = require('./user')

const findAllUsers = async () => {
    const allUsers = await User.find()

    console.log(allUsers)
}

findAllUsers()

const findUserByName = async (Name) => {
    const users = User.find({ Name })

    console.log(users)
}

findUserByName("Add Categories")