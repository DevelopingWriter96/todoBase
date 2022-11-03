const User = require('./user')

const findAllUsers = async () => {
    const allUsers = await User.find()

    console.log(allUsers)
}

findAllUsers()

const findUserByName = async (firstName) => {
    const users = User.find({ firstName })

    console.log(users)
}

findUserByName("Richard")