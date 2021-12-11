const { Comment } = require('../models');

const commentData = [
  {
    user_id: 2,
    post_id: 1,
    comment: `"Good judgement comes from experience, and experience comes from bad judgement." Rita Mae Brown`,
  },
  {
    user_id: 1,
    post_id: 2,
    comment:
      'Looks like it gives you the best of both min() and max(). Cool, will use it in my next project.',
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
