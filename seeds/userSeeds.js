const { User } = require('../models');

const userData = [
    {
        name: "samira",
        email: "samira@gmail.com",
        password: "password1"
    },
    {
        name: "john",
        email: "john@gmail.com",
        password: "password2"
    }
]

const seedUsers = () => User.bulkCreate(userData, {individualHooks: true, returning: true});

module.exports = seedUsers;