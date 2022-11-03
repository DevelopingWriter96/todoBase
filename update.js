const User = require('./user')

const incrementAge = async (firstName) => {

    const user = await User.findOne({firstName})

    if(!user) {
        throw new Error('User Not Found!')
    }

    user.age++

    // console.log(user)

    const result = await user.save()

    console.log(result)

}

incrementAge("Richard")