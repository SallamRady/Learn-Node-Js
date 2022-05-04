// Declaration...
const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin')
// Routes..
router.get('/',adminController.Dashboard);
router.get('/addProduct',adminController.AddProduct);
router.post('/createProduct',adminController.CreateProduct);
router.get('/product/:id',adminController.SingleProduct);

module.exports = router