import React, { useState } from "react";
import classes from './CropRecommendation.module.css';
import Input from "../UI/Helper/Input";

function CropRecommendation(props) {

    const [current_data,set_data]=useState('');
    const [enteredNirogenContent, setNitrogenContent] = useState(0);
    const [enteredPhosphorusContent,setPhosphorusContent] = useState(0);
    const [enteredPotassiumContent,setPotassiumContent] = useState(0);
    const [enteredPh, setPh] = useState(0);
    const[location,setlocation]=useState('');
    const[temp, settemp] = useState(0);
    const[humid, sethumid] = useState(0);
    const [mode,setMode] = useState(0);
   
    const NitrogenContentChangeHandler = (event) => {
        setNitrogenContent(event.target.value);
    };
    const PhosphorusContentChangeHandler = (event) => {
        setPhosphorusContent(event.target.value);
    };
    const PotassiumContentChangeHandler = (event) => {
        setPotassiumContent(event.target.value);
    };
    const PhChangeHandler = (event) => {
        setPh(event.target.value);
    };
    
    const submitHandler = (event) => {
        event.preventDefault();
        const ExpenseData = {
            nitrogen: enteredNirogenContent,
            phosphorus: enteredPhosphorusContent,
            potassium: enteredPotassiumContent,
            Ph: enteredPh,
 
        };
        console.log(ExpenseData);
            fetch("http://34.131.134.106/profile", {
            method: "POST",
            crossDomain: true,
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({
              username:props.username
            }),
          })
            .then((res) => res.json())
            .then((data) => {
              setlocation(data.data.City);
              if (data.status == "ok") {
                {};
              } else {alert("something went wrong")};
            }).then(
        fetch("http://34.131.134.106/weather",{
        method:"POST",
        crossDomain:true,
        headers:{
          "Content-Type":"application/json",
          Accept:"application/json",
          "Access-Control-Allow-Origin":"*",
        },
        body:JSON.stringify({
            address : location
        })
      }).then((res) => {return res.json()}).then(jsonResponse=> {
      
           settemp(jsonResponse.data.temp)
           sethumid(jsonResponse.data.humid)
      })).then(
        fetch("http://34.16.141.105/crop_recommendation", 
     {
     method: 'POST',
    headers: {
        'Content-type': 'application/json',
      'Accept': 'application/json'
    },

     body:JSON.stringify(
        {
            "N": enteredNirogenContent,
            "P": enteredPhosphorusContent,
            "K": enteredPotassiumContent,
            "temp": temp,
            "humid": humid,
            "ph" : enteredPh,
            "rainfall": 10
        }
     )}).then((res) => {
      console.log(res);
      return res.json()}).then(jsonResponse=> {
      
      console.log(jsonResponse.pre);
      set_data(jsonResponse.pre)
      setMode(1);
 }).catch((err) => console.error(err)));

        setNitrogenContent(0);
        setPhosphorusContent(0);
        setPotassiumContent(0);
        setPh(0);

    };

 
    var element = <div className={classes.result}>Fill the details to get result.</div>;
    if(mode==1)
    element=<div className={classes.result}>You should grow <div className={classes.finalResult}>{current_data}</div></div>

    return (
        <React.Fragment>
                    <div className={classes.card1}>
        <div className={classes.card}>
            <form onSubmit={submitHandler}>
            <div>
                <Input name="nitrogen" placeholder="Enter Nitrogen Content..." value={enteredNirogenContent} handler={NitrogenContentChangeHandler} type="number"></Input>
                <Input name="phosphorus" placeholder="Enter Phosphorus Content..." value={enteredPhosphorusContent} handler={PhosphorusContentChangeHandler} type="number"></Input>
                <Input name="potassium" placeholder="Enter Potassium Content..." value={enteredPotassiumContent} handler={PotassiumContentChangeHandler} type="number"></Input>
                <Input name="ph" placeholder="Enter Ph..." value={enteredPh} handler={PhChangeHandler} type="number"></Input>
                
                <button type="submit" className={classes.right}>Submit</button>
            </div>
            </form>
        </div>
        </div>
          {element}
          </React.Fragment>

    );
}

export default CropRecommendation;