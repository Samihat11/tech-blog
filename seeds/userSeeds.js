const { User } = require('../models');

const userData = [
  {
    name: 'Samira',
    email: 'samira@gmail.com',
    password: 'password1',
  },
  {
    name: 'John',
    email: 'john@gmail.com',
    password: 'password2',
  },
];

const seedUsers = () =>
  User.bulkCreate(userData, { individualHooks: true, returning: true });

module.exports = seedUsers;
