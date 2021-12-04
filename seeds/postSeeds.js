const { Post } = require('../models');

const postData = [
    {
        title: "Test1",
        post_content: "test",
        user_id: 1
    },
    {
        title: "Test 2",
        post_content: "test",
        user_id: 2
    }
]

const seedPosts = () => Post.bulkCreate(postData);
module.exports = seedPosts