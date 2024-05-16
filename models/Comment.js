// 4. In `models/Comment.js`, create a `Comment` 
//     - `body`: A string 
//     - `createdAt`: A date formatted as a string
const { db, DataTypes } = require("../db/connection");

let Comment = db.define("comment", {
    body: DataTypes.STRING,
    createdAt: DataTypes.STRING
});

module.exports = Comment;