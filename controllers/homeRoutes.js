const router = require('express').Router();
const { Product, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    const productData = await Product.findAll(req.body);
    const products = productData.map((product) => product.get({ plain: true }));
    res.render('homepage', {
      products,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/product/:id', withAuth, async (req, res) => {
  try {
    const productData = await Product.findByPk(req.params.id);
    const product = productData.get({ plain: true });
    res.render('product', { ...product, loggedIn: req.session.loggedIn });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/profile', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('profile');
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login', { title: 'Login', layout: 'custom' });
});

module.exports = router;