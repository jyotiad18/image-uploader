const ErrorResponse = require("../utils/errorResponse");

// @desc      Upload Image of Post 
// @route     POST /api/upload
// @access    Public

exports.uploadImage = (req, res, next) => {	
	if (!req.files)
	{
		return next(new ErrorResponse(`Please upload a image`, 400));
	}
	
	const file = req.files.file;
	 if (!file.mimetype.startsWith("image")) {
    	return next(new ErrorResponse(`Please upload an valid images`, 400));
	} 
	
	file.mv(`${process.env.FILE_UPLOAD_PATH}/${file.name}`, (err) => {
		if (err) {      			
			return next(new ErrorResponse(`Problem with file upload`, 500));
		}
		res.status(200).json({
     		success: true,
      		url: `${req.protocol}://${req.get('host')}/${process.env.FILE_UPLOAD_PATH}/${file.name}`
   	 	});   
  });  
};