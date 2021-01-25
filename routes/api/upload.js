const express = require('express');
const { uploadImage } = require('../../controllers/upload');
const router = express.Router({ mergeParams: true });

// @route    POST api/upload
// @desc     Upload image and retreive link
// @access   Public
router.route('/').post(uploadImage);

module.exports = router;