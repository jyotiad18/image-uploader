import React, { useState }from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route, 
} from "react-router-dom";
import Uploader from './components/Uploader';
import Loading from './components/Loading';
import Uploaded from './components/Uploaded';
import axios from './axios';

function App() {
  const [uploadedUrl, setUploadedUrl] = useState()
  
  const setUpload = async (image = {}) => {     
     const formData = new FormData() //Sends image as part of from data to avoid wierd Boundry issues when sending multipart/form data when not part of an actual form
     formData.append('file', image)
     const response = await axios.post('/upload', formData);
     setUploadedUrl(response.data.url);
   }
  
  return (
    <Router>
    <div className="app">     
        <Switch>   
          <Route exact path='/uploaded'> 
            <Uploaded uploadedUrl={uploadedUrl}/> 
          </Route>
           <Route exact path='/loading'> 
             <Loading />
          </Route>
          <Route exact path='/'> 
            <Uploader setUpload={setUpload} /> 
          </Route>           
        </Switch>
        <div className="app__footer">Jyoti ADHIAKRI @ DevChallenges.io</div>
      </div>  
    </Router>   
  );
}

export default App;
