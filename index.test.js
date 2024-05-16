const { Comment, Like, Post, Profile, User } = require("./index");
const { db } = require('./db/connection.js');
// const { users } = require('./seed/users.json');

describe('Social Sequelize Test', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the test suite is run
        await db.sync({ force: true });
    })

    // 7. Write unit tests to ensure that the connection works and the associations are set up correctly.
    // - Seed data has been created in the `seed` directory. Feel free to use this in your test creation!
    // 6. In `index.js`, define the following associations:
    //     - A `User` can have one `Profile` and vice versa.
    //     - A `User` can have many `Post` instances, but a `Post` can only have one `User`.
    //     - A `Post` can have many `Comment` instances, but a `Comment` can only have one `Post`.
    //     - A `User` can have many `Like` instances and vice versa.
    
    //  need to figure out how to use the seed data... as it was not working when replaced as seed
    test("can associate a Profile with a User", async () => {
        const user = await User.create({
            "username": "john_doe",
            "email": "john_doe@example.com"
          });
        await user.createProfile({
            "bio": "I'm a software engineer",
            "profilePicture": "https://example.com/profile1.jpg",
            "birthday": "1990-06-15"
          });
        const profile = await user.getProfile();

        expect(user.username).toBe("john_doe");
        expect(user.email).toBe("john_doe@example.com");
        expect(profile.bio).toBe("I'm a software engineer");
        expect(profile.profilePicture).toBe("https://example.com/profile1.jpg");
        expect(profile.birthday).toBe("1990-06-15");
    });

    test("can associate many Posts with a User", async () => {
        const user = await User.create({
            "username": "jane_doe",
            "email": "jane_doe@example.com"
          });
        await user.createPost({
            "title": "Hiking in Yosemite",
            "body": "I had an amazing time hiking in Yosemite National Park!",
            "createdAt": "2022-03-15T10:30:00.000Z"
          });
        await user.createPost({
            "title": "London Street Photography",
            "body": "Here are some of my recent street photography shots from London.",
            "createdAt": "2022-03-18T14:15:00.000Z"
          });
        const posts = await user.getPosts();

        expect(user.username).toBe("jane_doe");
        expect(user.email).toBe("jane_doe@example.com");
        expect(posts[0].title).toBe("Hiking in Yosemite");
        expect(posts[0].body).toBe("I had an amazing time hiking in Yosemite National Park!");
        expect(posts[0].createdAt).toBe("2022-03-15T10:30:00.000Z");
        expect(posts[1].title).toBe("London Street Photography");
        expect(posts[1].body).toBe("Here are some of my recent street photography shots from London.");
        expect(posts[1].createdAt).toBe("2022-03-18T14:15:00.000Z");
    })

    test("can associate many Comments with a Post", async () => {
        const post = await Post.create({
            "title": "Hiking in Yosemite",
            "body": "I had an amazing time hiking in Yosemite National Park!",
            "createdAt": "2022-03-15T10:30:00.000Z"
          });
        await post.createComment({
            "body": "This is a great post!",
            "createdAt": "2022-01-01T12:00:00Z"
          });
        await post.createComment({
            "body": "I completely agree with you.",
            "createdAt": "2022-01-02T08:30:00Z"
          });
        const comments = await post.getComments();

        expect(post.title).toBe("Hiking in Yosemite");
        expect(post.body).toBe("I had an amazing time hiking in Yosemite National Park!");
        expect(post.createdAt).toBe("2022-03-15T10:30:00.000Z");
        expect(comments[0].body).toBe("This is a great post!");
        expect(comments[0].createdAt).toBe("2022-01-01T12:00:00Z");
        expect(comments[1].body).toBe("I completely agree with you.");
        expect(comments[1].createdAt).toBe("2022-01-02T08:30:00Z");
    });

});