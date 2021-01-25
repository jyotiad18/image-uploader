const express = require('express');
const { uploadImage } = require('../../controllers/upload');
const router = express.Router();

// @route    POST api/upload
// @desc     Upload image and retreive link
// @access   Public
router.route('/').post((req, res) => {
	res.send('hello');
});

module.exports = router;