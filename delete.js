const User = require('./user')

const deleteByFirstName = async (firstName) => {
    await User.deleteOne({firstName})

    const allUsers = User.find()

    console.log(allUsers)
}

deleteByFirstName('Richard')