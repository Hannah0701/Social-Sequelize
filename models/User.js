// 2. In `models/User.js`, define a `User` model with the following properties:
//     - `username`: A string
//     - `email`: A string

const { db, DataTypes } = require('../db/connection');

const User = db.define('user', {
    username: DataTypes.STRING,
    email: DataTypes.STRING
});

module.exports = User;
