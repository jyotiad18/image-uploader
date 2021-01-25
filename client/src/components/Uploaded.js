import React from 'react';
import { useHistory } from "react-router-dom";
import "../css/Uploaded.css";
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

function Uploaded({ uploadedUrl }) {
	const history = useHistory();

	const onCopyLink = (e) => {
		if (e.target.innerHTML === "Done!") {
			history.push("/");
		} else {
			const blob = new Blob([uploadedUrl], { type: 'text/plain' });
			// eslint-disable-next-line no-undef
			let data = [new ClipboardItem({ [blob.type]: blob })];
			navigator.clipboard.write(data)
			e.target.innerHTML = "Done!"
		}
    }
	return (
		<div className="uploaded">
			<CheckCircleIcon className="uploaded__success" />
			<h4 className="success__text">Uploaded Successfully!</h4>
			<div className="uploaded__container">
				<img src={uploadedUrl} alt="" />			    
			</div>	
			<div className="uploaded__copy">
				<span>{uploadedUrl?.substr(0, 40).concat("......")}</span>
				<button className="button__copy" onClick={onCopyLink}>Copy Link</button>
			</div>
		</div>
	)
}

export default Uploaded;
