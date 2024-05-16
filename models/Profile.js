// . In `models/Profile.js`, create a `Profile` model with the following properties:
//     - `bio`: A string
//     - `profilePicture`: A string
//     - `birthday`: A date formatted as a string
const { db, DataTypes, Model } = require('../db/connection');

class Profile extends Model {};

Profile.init({
    bio: DataTypes.STRING,
    profilePicture: DataTypes.STRING,
    birthday: DataTypes.STRING
}, {
    sequelize: db,
    modelName: 'profile'
});

module.exports = Profile;