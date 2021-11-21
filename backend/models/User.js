const { Schema, model } = require("mongoose")

let userSchema = new Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String
    },
    profession: {
        type: String
    }
})

const User = model("User",userSchema)
module.exports = User;