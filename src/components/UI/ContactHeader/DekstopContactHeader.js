import classes from './DekstopContactHeader.module.css';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF,faTwitter,faYoutube,faInstagram  } from '@fortawesome/free-brands-svg-icons';
import { FaUserCircle } from 'react-icons/fa';
import {Link } from 'react-router-dom';
import { useState } from 'react';
const DekstopContactHeader=(props)=>{
  const logoutHandler=()=>{
    props.setLogged(0);
    props.setuser('');
 }
    var logout=<a></a>;
    if(props.logValue==1)
    {
      logout=<a><button onClick={logoutHandler} className={classes.logout}>logout</button></a>
    }
    return<nav className={classes.navComponent}>
    <FontAwesomeIcon className={classes.navIcon} icon={faEnvelope} size="1x"/>
    <a className={classes.navElement}> support@yourdomin.tld</a>
    <FontAwesomeIcon className={classes.navIcon} icon={faMobileAlt} />
    <a className={classes.navElement}> +6221.2002.2012</a>
    <span className={classes.Icon_container}>
    <a className={classes.Icons_}>
      <FontAwesomeIcon icon={faFacebookF} size="1x"/>
    </a>
    <a className={classes.Icons_}>
      <FontAwesomeIcon icon={faInstagram} size="1x"/>
    </a>
    <a className={classes.Icons_}>
      <FontAwesomeIcon icon={faYoutube} size="1x"/>
    </a>
    <a className={classes.Icons_}>
      <FontAwesomeIcon icon={faTwitter} size="1x"/>
    </a>
    <a className={classes.Icons_}>
      <Link to='/ProfilePage'><FaUserCircle></FaUserCircle></Link>
    </a>
    {logout}
    
    </span>
 </nav>
}
export default DekstopContactHeader;