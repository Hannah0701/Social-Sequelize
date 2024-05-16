const { Comment, Like, Post, Profile, User } = require("./models/index");

// Define your associations here
// 6. In `index.js`, define the following associations:
//     - A `User` can have one `Profile` and vice versa.
//     - A `User` can have many `Post` instances, but a `Post` can only have one `User`.
//     - A `Post` can have many `Comment` instances, but a `Comment` can only have one `Post`.
//     - A `User` can have many `Like` instances and vice versa.

User.hasOne(Profile);
Profile.belongsTo(User);

User.hasMany(Post);
Post.belongsTo(User);

Post.hasMany(Comment);
Comment.belongsTo(Post);

User.belongsToMany(Like, { through: 'user_likes' });
Like.belongsToMany(User, { through: 'user_likes' });

module.exports = {
    Comment,
    Like,
    Post,
    Profile,
    User
}