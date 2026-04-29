const express = require('express');
const router = express.Router();
const productService = require('../services/productService');

// Init cart
router.use((req, res, next) => {
  if (!req.session.cart) req.session.cart = [];
  next();
});

router.get('/', async (req, res, next) => {
  try {
    const products = await productService.getAllProducts();
    res.render('index', { products });
  } catch (err) { next(err); }
});

router.get('/product/:id', async (req, res, next) => {
  try {
    const product = await productService.getProductById(req.params.id);
    res.render('product', { product });
  } catch (err) { next(err); }
});

router.post('/add-to-cart', (req, res) => {
  req.session.cart.push(req.body);
  res.redirect('/cart');
});

router.get('/cart', (req, res) => {
  res.render('cart', { cart: req.session.cart });
});

router.get('/remove/:index', (req, res) => {
  req.session.cart.splice(req.params.index, 1);
  res.redirect('/cart');
});

module.exports = router;
