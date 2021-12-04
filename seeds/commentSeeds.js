const { Comment } = require('../models');

const commentData = [
    {
        user_id: 1,
        post_id: 1,
        comment: "This is amazing!"
    },
    {
        user_id: 2,
        post_id: 2,
        comment: "Wow, amazing work!"
    },

]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;