import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import '../css/Uploader.css';
import uploadimg from "../images/image.svg";


function Uploader({ setUpload }) {
	const history = useHistory();
	const [isDrag, setIsDrag] = useState(false);

	const isValidImage = file => {       
        if (file.type.match(/image\/[a-z]*/) != null) {
            return true
        }
    }

	 const formUploadHandler = () => {
		 const image = new FormData(document.forms[0]).get('fileupload');		 
        if (image.name !== "" && isValidImage(image)) {
			uploadImage(image);
		}
	 }
	
	const uploadImage = (image) => {
		 setUpload(image)
         history.push('/loading')
	}
	
	const dragHandler = e => {
        switch (e.type) {
            case 'dragenter':
				e.preventDefault(e) 
				setIsDrag(true);
                break;
			case 'dragover':
                e.preventDefault(e)
				setIsDrag(true);
                break;
            case 'dragleave':
				e.preventDefault(e)  
				setIsDrag(false);
                break;
            case 'drop':
                setIsDrag(false);
                if (e.dataTransfer.files.length > 0) {
                    e.preventDefault(e) 
					const image = e.dataTransfer.files[0]
					if (image.name !== "" && isValidImage(image)) {
						uploadImage(image);
					}					
				}
                break;
            default:
                return e
        }
	}
	
	return (
		<div className="uploader">		
			<h1>Upload your image</h1>
			<h3>File should be Jpeg, Png,...</h3>			
			<div className={"uploader__container " + (isDrag ? " uploader__container-drag" : "")}
			    onDragEnter={e => dragHandler(e)}
                onDragOver={e => dragHandler(e)}
                onDragLeave={e => dragHandler(e)}
                onDrop={e => dragHandler(e)}
			>				
				<img src={uploadimg} alt="" />
				<h3 className="container__title">{isDrag}Drag & Drop your image here</h3>
			</div>		
			<span className="container__title">Or</span>
			 <form className="uploader__form">
				<label htmlFor='fileupload'>
					<input type='file' accept='image/*'
						id="fileupload" name="fileupload"
						className="form__file"
						onChange={() => formUploadHandler()}
					/>
					Choose a file
			  </label>                
            </form>
		</div>
	)
}

export default Uploader;
