var express = require('express');
var router = express();

var Product = require('../models/products');

Product.methods(['get', 'put', 'post', 'delete']);
Product.register(router, '/products');

module.exports = router;