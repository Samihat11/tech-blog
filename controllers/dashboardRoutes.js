const router = require('express').Router();
const { Post, User } = require('../models');
const withAuth = require('../utils/auth');

router.use(withAuth);

router.get('/myPosts', async (req, res) => {
  try {
    const postData = await Post.findAll({
      where: { user_id: req.session.user_id },
    });
    const posts = postData.map((post) => post.get({ plain: true }));
    res.render('dashboard', {
      posts,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/new', async (req, res) => {
  res.render('new-post', { loggedIn: req.session.loggedIn });
});

module.exports = router;
