const express = require('express');
const router = express.Router();
const siteController = require('../app/controller/siteController');

router.get('/', siteController.index); // always on bottom

module.exports = router;
