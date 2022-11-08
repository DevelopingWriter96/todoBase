const User = require('./user')

const incrementAge = async (firstName) => {

    const user = await User.findOne({firstName})

    if(!user) {
        throw new Error('Todo Not Found!')
    }

    user.id++

    // console.log(user)

    const result = await user.save()

    console.log(result)

}

incrementAge("Delete Categories")