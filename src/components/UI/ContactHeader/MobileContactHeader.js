import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import classes from './MobileContactHeader.module.css';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const MobileContactHeader=(props)=>{
   const logoutHandler=()=>{
      props.setLogged(0);
      props.setuser('');
   }
   var logout=<a ><button className={classes.logout} onClick={logoutHandler}></button></a>;
    if(props.logValue==1)
    {
      logout=<a><button className={classes.logout}>LogOut</button></a>
    }
   return <nav className={classes.navComponent}>
   <FontAwesomeIcon className={classes.navIcon} icon={faEnvelope} size="1x"/>
   <span className={classes.navElement}> support@yourdomin.tld</span>
   {logout}
   <span ><Link to="/ProfilePage" className={classes.navElement2}><FaUserCircle size="30"></FaUserCircle></Link></span>
</nav>
}
export default MobileContactHeader;