import {useEffect} from "react";
import { useState } from "react";
import classes from './ProfilePage.module.css';
import ParentCart from "./ParentCart";
import ProfileInfo from "./ProfileInfo";
import ParentCart2 from './ParentCart2';

import Card from "./Card";
function ProfilePage(props){

  const [current_data,set_data]=useState([]);
  const [current_order,set_order]=useState([]);
  var username=props.user
  useEffect(() => {
    if(props.logValue==1){
    fetch("http://34.131.134.106/profile", {
    method: "POST",
    crossDomain: true,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({
      username
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      set_data(data.data);
      if (data.status == "ok") {
        {};
      } else {alert("something went wrong")};
    });
  }

  if(props.logValue==1){
    fetch("http://34.131.134.106/profileorders", {
    method: "POST",
    crossDomain: true,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({
      username
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.status == "ok") {
        {
          console.log(data.data[0]);
          set_order(data.data);
        };
      } else {alert("something went wrong")};
    });
  }

}, []);
var itemsList=<div></div>;
if(props.logValue==1){ 
   itemsList = <ParentCart>{
    current_order.map((orders) => 
   <ParentCart2>
    {
      (orders.Items.map((item)=>
   <Card
    key={item.id}
    id={item.id}
    name={item.name}
    amount={item.amount}
    price={item.price}
  ></Card>
    ) 
 )
    }
 </ParentCart2>
)}</ParentCart>
 }

 var content=<div></div>;
 if(props.logValue==1){
  content= <div className={classes.row}>
  <div className={classes.column1}>
  <h1> Account Info </h1>
  <ProfileInfo username={current_data.username} email={current_data.email} City={current_data.City} 
  Country={current_data.Country} address={current_data.address} mobilenumber={current_data.mobilenumber}> 
  </ProfileInfo>
</div>

  <div className={classes.column2}>
  <h1> Orders Details </h1>
  {itemsList}</div>
</div>
 }
  return(
     <div >{content}</div>
     
  )
};

export default ProfilePage;