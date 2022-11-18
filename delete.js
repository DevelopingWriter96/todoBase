const User = require('./user')

const deleteByFirstName = async (Name) => {
    await User.deleteOne({ Name })

    const allUsers = await User.find()

    console.log(allUsers)
}

deleteByFirstName("Delete categories")