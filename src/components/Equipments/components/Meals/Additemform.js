import React, { useState } from "react";
// import classes from './SellEquipment.module.css';
import Input from "../../../UI/Helper/Input";
import classes from '../../../UI/Helper/SellCropForm.module.css';

function Additemform(props) {

    const [enteredEquipmentName,setEquipmentName] = useState("");
    const [enteredPrice,setEnteredPrice] = useState(0);
    const [enteredDescription,setEnteredDescription] = useState("");
    const [enteredImage,setEnteredImage] = useState("");
    const [enteredQuantity,setQuantity] = useState(0);

    var loggedInStatus = props.loggedIn;
   
   
    const EquipmentNameChangeHandler = (event) => {
        setEquipmentName(event.target.value);
    };
    const PriceChangeHandler = (event) => {
        setEnteredPrice(event.target.value);
    };
    const DescriptionChangeHanlder = (event) => {
        setEnteredDescription(event.target.value);
    };
    const imageChangeHandler = (event) => {
        setEnteredImage(event.target.value);
    };
    const QuantityChangeHandler = (event) => {
        setQuantity(event.target.value);
    }

const handleSubmit = (event) => {
    event.preventDefault();
    if(loggedInStatus == 0){
        alert("Login First");
    }else{
        if(enteredEquipmentName.length == 0 || enteredDescription.length == 0){
            alert("Fields should not be empty ...");
        }else if(enteredPrice < 0){
            alert("Price should not be negative ...");
        }else if(enteredQuantity <=0 ){
            alert("Please choose some quantity ...")
        }else{
    if(1)
    {
      console.log("yes");
      fetch("http://34.131.134.106/sell_equipment",{
        method:"POST",
        crossDomain:true,
        headers:{
          "Content-Type":"application/json",
          Accept:"application/json",
          "Access-Control-Allow-Origin":"*",
        },
        body:JSON.stringify({
            username: props.username,
            equipmentname: enteredEquipmentName,
            enteredprice:enteredPrice,
            entereddescription:enteredDescription,
            enteredimage:enteredImage,
            quantity: enteredQuantity,
        })
      }).then((res)=>res.json())
      .then((data)=>{
        console.log(data,"Equipment saved");
        if(data.status=="saved"){
          alert("saved successfull");
        }
        else
        alert("something went wrong");
      })
    }
    setEquipmentName('');
    setQuantity(0);
    setEnteredPrice(0);
    setEnteredDescription("");
    setEnteredImage("");
}
}


  };
    return (
        <div className={classes.card1}>
        <div className={classes.card}>
            <form onSubmit={handleSubmit}>
               <div>
                <Input name="Equipment Name" placeholder="Equipment Name..." value={enteredEquipmentName} handler={EquipmentNameChangeHandler} type="text"></Input>
                <Input name="Price Value" placeholder="Enter price..." value={enteredPrice} handler={PriceChangeHandler} type="number"></Input>
                <Input name="Description" placeholder="Description..." value={enteredDescription} handler={DescriptionChangeHanlder} type="textbox"></Input>
                <Input name="image" placeholder="image..." value={enteredImage} handler={imageChangeHandler} type="file"></Input>
                
                <Input name="Quantity" placeholder="quantity..." value={enteredQuantity} handler={QuantityChangeHandler} type="number"></Input>
                <button type="submit" className={classes.right}>Submit</button>
                
                </div>;
            </form>
        </div>
        </div>
    );
}

export default Additemform;