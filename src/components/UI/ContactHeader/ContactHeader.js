import React,{useEffect,useState} from "react";
import MobileContactHeader from "./MobileContactHeader";
import DekstopContactHeader from "./DekstopContactHeader";

const ContactHeader=(props)=>{
    const [width,setWidth]=useState(window.innerWidth);
    const breakpoint=860;
    useEffect(()=>{
        window.addEventListener("resize",()=>setWidth(window.innerWidth));
    })
    return width<breakpoint ?<MobileContactHeader logValue={props.logValue} setLogged={props.setLogged} setuser={props.setuser}></MobileContactHeader>:<DekstopContactHeader setLogged={props.setLogged} logValue={props.logValue} setuser={props.setuser}></DekstopContactHeader>
};
export default ContactHeader;