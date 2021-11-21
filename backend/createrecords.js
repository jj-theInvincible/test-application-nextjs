const User = require("./models/User");

let users = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => {
    return {
        name: `User${item}`,
        email: `user${item}@email.com`,
        phone: `${item}-123456789`,
        profession: `SE${item}`
    }
})

module.exports = () => User.insertMany([
    ...users
])