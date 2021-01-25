import React, { useState, useEffect } from 'react';
import "../css/Loading.css";
import { useHistory } from "react-router-dom";

function Loading() {
	const [increment, setIncrement] = useState(10);	
	const history = useHistory();

    useEffect(() => {
	const timeout = setTimeout(() => {
		if (increment === 100) {
			history.push('/uploaded');
			return;	
		} 
      setIncrement(increment + 10);
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, [increment, history]);
		
	return (
		<div className="loading">
			<h3>Uploading...</h3>
			<div className="loading__progress">		
				<div className="progress__number" style={{width : `${increment}%`}}></div>	
			</div>
		</div>
	)
}

export default Loading;
