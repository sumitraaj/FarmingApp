
import ImagePrediction from "./ImagePrediction";
import classes from './ImagePredictionMain.module.css';
import img from '../../assets/ImagePrediction/MainImage.jpg';
import { useState } from "react";
const ImagePredictionMain=()=>{
   const [mode,setMode]=useState(0);
   const [prediction,setPrediction]=useState('');
  var element=<div>please upload a png image to view the result</div>;
  if(mode==1)
  element=<div>the plant have {prediction} Disease</div>
   return<div className={classes.row}>
   <div className={classes.column}>
      <div>
         <img src={img} className={classes.img}></img>
      </div>
      <div  className={classes.card}>
    <ImagePrediction  setValue={setPrediction}  setMode={setMode}></ImagePrediction>
    </div>
   </div>
   <div className={classes.column}>
      <h2 className={classes.heading}>Know about Plant Disease</h2>
      <p className={classes.description}>Upload plant image and get instant and accurate result.</p>
      <div className={classes.result}>
      {element}
      </div>
   </div>
   </div>;
}
export default ImagePredictionMain;