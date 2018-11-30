var express = require('express');
var router = express.Router();
var ctrlMain=require('../controllers/restaurants.js');
var ctrlOther=require('../controllers/others.js');

/* GET home page. */
router.get('/', ctrlMain.index);
router.route('/restaurant/:resId')
      .get(ctrlMain.restaurantInfo).post(ctrlMain.restaurantInfoUpdate);

router.get('/restaurant/:resId/addReview',ctrlMain.addReview);

router.get('/about',ctrlOther.about);

module.exports = router;
