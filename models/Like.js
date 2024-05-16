// 5. In `models/Like.js`, create a `Like` model with the following properties: 
//     - `reactionType`: A string
//     - `createdAt`: A date formatted as a string
const { db, DataTypes } = require("../db/connection");

let Like = db.define("like", {
    reactionType: DataTypes.STRING,
    createdAt: DataTypes.STRING
});

module.exports = Like;