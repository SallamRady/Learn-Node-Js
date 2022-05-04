// Declaration...
const express = require('express');
const router = express.Router();
const shopController = require('../controllers/shop');

// routes....
router.get('/',shopController.HomePage);
router.get('/about',shopController.AboutPage);
router.get('/contactUs',shopController.ContactPage);

module.exports = router;