import React, { useState } from 'react';
import classes from './ImagePrediction.module.css';

const ImagePrediction = (props) => {
  const [selectedImage, setSelectedImage] = useState(null);
  
  const handleImageSelect = (event) => {
    setSelectedImage(event.target.files[0]);
  };

  const handleImageUpload = () => {
    
    // fetch('http://34.131.134.106/upload', {
    //   method: 'POST',
    //   body: formData,
    // })
    // .then(response => response.text())
    // .then(result => {
    //   console.log(result);
    // })
    // .catch(error => {
    //   console.error('Error:', error);
    // }).
    const formData = new FormData();
    formData.append('image', selectedImage);
    fetch('http://34.16.141.105/upload', {
      method: 'POST',
      body: formData,
    })
      .then(response => response.json())
      .then(data => {
        console.log('Image uploaded successfully');
      })
      .catch(error => {
        console.error('Error uploading image:', error);
      }).then(
    fetch("http://34.16.141.105/leaf_image", 
    {
    method: 'POST',
   headers: {
       'Content-type': 'application/json',
        'Accept': 'application/json'
   },
    }).then((res) => {
      
     return res.json()}).then(jsonResponse=> {
         props.setMode(1);
         props.setPrediction(jsonResponse.pre);
}).catch((err) => console.error(err)))
}

  return (
    <div>
      <h2>Image Upload</h2>
      <form>
        <span className={classes.btn2}>
        <input type="file" onChange={handleImageSelect}  />
        </span>
        <button className={classes.btn} type="button" onClick={handleImageUpload}>Upload</button>
      </form>
    </div>
  );
};

export default ImagePrediction;
