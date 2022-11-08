const {model, Schema} = require('mongoose')

const User = new Schema({
    id: Number,
    Name: String,
    Category: String,
    status: {
        type: String,
        default: ""
    }
})

module.exports = model('user', User)