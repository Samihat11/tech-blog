const router = require('express').Router();
const { Post, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.use(withAuth);

router.get('/new', async (req, res) => {
  res.render('new-post', { loggedIn: req.session.loggedIn });
});

module.exports = router;
