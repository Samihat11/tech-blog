const { Post } = require('../models');

const postData = [
  {
    title: 'Quote I found on Medium',
    post_content:
      'Junior developers build complicated solutions to imple problems. Mid-level developers build simple solutions to simple problems. Senior developers build simpple solutions to complicated problems.',
    user_id: 1,
  },
  {
    title: 'CSS clamp()',
    post_content:
      'The CSS clamp function essentially clamps a value between an upper and lower bound. It takes three parameters: a min value, a preffered value and a max value. It will return the second argument if it is within the min and max values.',
    user_id: 2,
  },
];

const seedPosts = () => Post.bulkCreate(postData);
module.exports = seedPosts;
