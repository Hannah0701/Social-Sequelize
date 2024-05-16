// . In `models/Profile.js`, create a `Profile` model with the following properties:
//     - `bio`: A string
//     - `profilePicture`: A string
//     - `birthday`: A date formatted as a string
const { db, DataTypes } = require('../db/connection');

let Profile = db.define("profile",{
    bio: DataTypes.STRING,
    profilePicture: DataTypes.STRING,
    birthday: DataTypes.STRING
});

module.exports = Profile;